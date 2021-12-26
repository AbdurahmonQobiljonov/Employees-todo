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

   onSubmit = (e) => {
      e.preventDefault();
      // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
      if (this.state.name.length < 3 || !this.state.salary) return;
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
         name: '',
         salary: ''
      })
   }

  render() {
      const {name,salary} = this.state


     return (
        <div className="app-add-form">
           <h3>Добавьте нового сотрудника</h3>
           <form className="add-form d-flex"
                 onSubmit={this.onSubmit}
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

              <button  type="submit" className="btn btn-outline-light">
                 Добавить
              </button>
           </form>
        </div>
     );
  }
}

export default EmployeesAddForm;
