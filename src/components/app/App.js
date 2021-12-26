import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import SearchPanel from '../search-panel/search-panel';

import './App.css';

const App = () => {
  const data = [
    { name: 'John S', salary: 1200, increace: true , id:1 },
    { name: 'Ali Q', salary: 4000,increace: false , id:2 },
    { name: 'Abu V', salary: 1000,increace: false , id:3 },
  ];
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList data={data} />
      <EmployersAddForm />
    </div>
  );
};

export default App;
