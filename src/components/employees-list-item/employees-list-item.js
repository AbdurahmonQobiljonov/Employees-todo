import {Component} from "react";
import './employees-list-item.css';

class EmployeesListItem extends Component  {
  state={
     increase:false,
     like:false
  }

   onItemLike=()=>{
     this.setState(({like})=>({like:!like}));
     console.log(1)
   };

   onIncrease=()=>{
     this.setState(({increase})=>({increase:!increase}));
     console.log(1);
   };

  render(){
     const {name,salary,onDelete} =this.props;
     const {increase,like}=this.state;

     let classNames = 'list-group-item d-flex justify-content-between';

     if (increase) classNames += ' increase';
     if(like) classNames += ' like';


     return (
        <li className={classNames} >
           <span className="list-group-item-label" onClick={this.onItemLike} >{name}</span>
           <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
           <div className="d-flex justify-content-center align-items-center">
              <button type="button" className="btn-cookie btn-sm " onClick={this.onIncrease}>
                 <i className="fas fa-cookie"></i>
              </button>

              <button onClick={onDelete} type="button"
                      className="btn-trash btn-sm "
              >
                 <i className="fas fa-trash"></i>
              </button>
              <i className="fas fa-star"></i>
           </div>
        </li>
     );
  }


};

export default EmployeesListItem;
