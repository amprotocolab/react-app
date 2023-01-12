
import './App.css';
import React from 'react';
import CardList from './component/card-list/card-list';
import SearchBox from './component/search-box/search-box';
import { useState, useEffect } from 'react';



const App = () => {
  const [searchField , setSearchField] = useState('');
  const [monsters,setMonsters]=useState([]);
  const [filtered ,setFiltered] = useState(monsters)


useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
}, []);


useEffect(() => {
  const newFiltered = monsters.filter(
    monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    }
  );
    setFiltered(newFiltered);
  }, [monsters, searchField]); //change state whenever either these changes




  const onSearch = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);

  }

  

  return(
          <div className = "App" >
              <h1 className='app-title'>Robo Monster</h1>
              <SearchBox 
                    className = "search-box"
                    placeholder = "Search Monsters"
                    onChangeHandler={onSearch} 
              />
              <CardList  monsters = {filtered}/>
        </div>
        )
  }




// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       monster: [],
//       searchField : '',
//     };

//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return {
//             monster: users
//           };
//         },
//         () => {
//           console.log(this.state)
//         }
//       ))
//   }

// onSearch = (event) => {
//           var searchField = event.target.value.toLocaleLowerCase();
//           //console.log(search)
//             this.setState(
//               ()=>{
//                 return {searchField}
//                 },
//             )
//         }



//   render() {


//     const {monster , searchField} = this.state;
//     const {onSearch} = this;


//     const filtered = monster.filter(
//       monster => {
//         return monster.name.toLocaleLowerCase().includes(searchField);
//       }
//     );

//     return ( 
//       <div className = "App" >
//       <h1 className='app-title'>Robo Monster</h1>
//       <SearchBox 
//             className = "search-box"
//             placeholder = "Search Monsters"
//             onChangeHandler={onSearch} 
//       />
      
//       )
//        {/* {
//         filtered.map((monster) => {
//           return ( 
//             <div key = {monster.id} >
//               <h1>{monster.name} =  {monster.username}</h1> 
//             </div>   
//           );
//         })
//       }  */}
//       <CardList  monsters = {filtered}/>
//       </div>
//     )
//   }

// }

export default App