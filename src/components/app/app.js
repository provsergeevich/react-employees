import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "Vasiliy P.", salary: 8000, increase: true, id: 1},
        {name: "Ivan P.", salary: 3000, increase: true, id: 2},
        {name: "Sergey R.", salary: 5000, increase: false, id: 3},
        {name: "Artur R.", salary: 2000, increase: true, id: 4}
      ]
    }
  }
  

  deleteItem = (id) => {
    this.setState(({data}) => {
        return {
          data: data.filter(item => item.id !== id)
        }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];

      return {  
          data: newArr
      }
    })
  }


  render() {
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}
          />
          <EmployeesAddForm 
          onAdd={this.addItem}
          />
      </div>
    );
  }
}

export default App;
