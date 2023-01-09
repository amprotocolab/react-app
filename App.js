//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import { useState } from 'react';




// const App = () => {

//   const onsSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return ({searchField})
//     })

//   }

//   return(
//     <div className = 'App'>
//       <h1 className = "app-title">"Monsters Rolodex"</h1>

//     </div>
//   )










class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField : '',
    };

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return {
            monster: users
          };
        },
        () => {
          console.log(this.state)
        }
      ))
  }

  onSearch = (event) => {
            var searchField = event.target.value.toLocaleLowerCase();
            //console.log(search)
            
              this.setState(
                ()=>{
                  return {searchField}
              },
                
                )
              
          }

  render() {


    const {monster , searchField} = this.state;
    const {onSearch} = this;


    const filtered = monster.filter(
      monster => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      }
    );

    return ( 
      <div className = "App" >
      <input type = "search" className = "search-box" placeholder = 'Search'
        onChange = {onSearch}
        />
      ) {
        filtered.map((monster) => {
          return ( 
            <div key = {monster.id} >
              <h1>{monster.name} =  {monster.username}</h1> 
            </div>   
          );
        })
      } 
      </div>
    )
  }

}

export default App;