import './app-info.css';

const AppInfo = ({ allEmployees,entries }) => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {allEmployees} </h2>
      <h2>Премию получат: {entries} </h2>
    </div>
  );
};

export default AppInfo;
