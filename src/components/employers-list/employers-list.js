import EmployerListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

const EmployersList = () => {
  return (
    <ul className="app-list list-group">
      <EmployerListItem name="John S" salary={1200} />
      <EmployerListItem name="Ali Q" salary={4000} />
      <EmployerListItem name="Abu V" salary={1000} />
    </ul>
  );
};

export default EmployersList;
