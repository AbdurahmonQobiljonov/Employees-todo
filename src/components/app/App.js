import {Component} from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import EmployersAddForm from '../employees-add-form/employees-add-form';
import SearchPanel from '../search-panel/search-panel';
import nextId from "react-id-generator";

import './App.css';

class App extends Component {
   maxRnd=nextId();

   state = {
      data : [
         { name: 'John S', salary: 1200,increase:false , id:1 },
         { name: 'Ali Q', salary: 4000 ,increase:false , id:2 },
         { name: 'Abu V', salary: 1000 ,increase:false , id:3 },
      ]
   };

   deleteItemFromData=(id)=>{
      this.setState(({data})=>({ data: data.filter((elem) => elem.id !== id) }))
   };

   AddItemFromData=(e,name,salary)=>{
       e.preventDefault()
      this.setState(({data})=>({data:[...data,{name,salary,increase: false,id:this.maxRnd}]}))
   };

  render() {
      const {data}=this.state
     return (
        <div className="app">
           <AppInfo/>
           <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
           </div>
           <EmployeesList
              data={data}
              onDelete={this.deleteItemFromData}
           />
           <EmployersAddForm
              addItem={this.AddItemFromData}
           />
        </div>
     );
  };
};

export default App;
