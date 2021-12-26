import {Component} from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component{

   state = {
      name:'',
      salary:''
   }

   onChangeInput=(e)=>{
      this.setState({
         [e.target.name]:e.target.value
      })
   }

  render() {
      const {addItem}=this.props
      const {name,salary} = this.state
     return (
        <div className="app-add-form">
           <h3>Добавьте нового сотрудника</h3>
           <form className="add-form d-flex"
                 onSubmit={(e)=>addItem(e,name,salary)}
           >
              <input type="text"
                     onChange={this.onChangeInput}
                     value={name} name='name'
                     className="form-control new-post-label"
                     placeholder="Как его зовут?"
              />
              <input type="number"
                     onChange={this.onChangeInput}
                     value={salary} name='salary'
                     className="form-control new-post-label"
                     placeholder="З/П в $?"
              />

              <button type="submit" className="btn btn-outline-light">
                 Добавить
              </button>
           </form>
        </div>
     );
  }
}

export default EmployeesAddForm;
