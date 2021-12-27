import './search-panel.css';
import { Component } from "react";

class SearchPanel extends Component {
   state = {
      term: '',
   }

   onUpdateSearch = (e) => {
      let term = e.target.value
      this.setState({term})
      this.props.onUpdateSearch(term)
   }

   render () {
      return (
         <div>
            <input
               type="text"
               className="form-control search-input"
               placeholder="Найти сотрудника"
               value={this.state.term}
               onChange={this.onUpdateSearch}
            />
         </div>
      );
   }
}

export default SearchPanel;
