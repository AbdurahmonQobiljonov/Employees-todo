import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import EmployersAddForm from '../employees-add-form/employees-add-form';
import SearchPanel from '../search-panel/search-panel';
import nextId from "react-id-generator";

import './App.css';

class App extends Component {
   maxRnd = nextId();

   state = {
      data: [
         { name: 'John S', salary: 1200, increase: false, rise: true, id: 1 },
         { name: 'Ali Q', salary: 4000, increase: true, rise: false, id: 2 },
         { name: 'Abu V', salary: 1000, increase: false, rise: false, id: 3 },
      ],
      term: '',
      filter: 'all',
   };

   deleteItemFromData = (id) => {
      this.setState(({ data }) => ({ data: data.filter((elem) => elem.id !== id) }))
   };

   AddItemFromData = (name, salary) => {
      this.setState(({ data }) => ({
         data: [ ...data, {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxRnd
         } ]
      }))
   };

   onToggleProp = (id, prop) => {
      this.setState(({ data }) => ({
         data: data.map((elem) => (elem.id === id) ? { ...elem, [prop]: !elem[prop] } : elem)
      }))
   }

   searchEmp = (items, term) => {
      if (term.length === 0) {
         return items
      }

      return items.filter((elem) => {
         return elem.name.toLowerCase().indexOf(term.toLowerCase()) > -1
      })
   }

   onUpdateSearch = (term) => {
      this.setState({ term })
   }

   filterPost = (items, filter) => {
      switch (filter) {
         case 'rise':
            return items.filter((elem) => elem.rise);
         case 'moreThen1000':
            return items.filter(elem => elem.salary >= 1000);
         default:
            return items

      }
   };

   onFilterSelect = (filter) => {
      this.setState({ filter })
   }

   render () {
      const { data, term, filter } = this.state
      const entries = data.filter((elem) => elem.increase)
      const visibleData = this.filterPost(this.searchEmp(data, term), filter)

      return (
         <div className="app">
            <AppInfo
               allEmployees={data.length}
               entries={entries.length}
            />
            <div className="search-panel">
               <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
               <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>
            <EmployeesList
               data={visibleData}
               onDelete={this.deleteItemFromData}
               onToggleProp={this.onToggleProp}
            />
            <EmployersAddForm
               onAdd={this.AddItemFromData}
            />
         </div>
      );
   };
};

export default App;
