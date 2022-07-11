// import { Component } from 'react'
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () =>{

  const[searchField, setSearchField] = useState(''); //[value, setValue]
  const[monsters, setMonsters] = useState([]);
  const[filteredMonsters, setFilteredMonsters] = useState(monsters)
  //const[stringField, setStringField] =useState('')  //for second search field


  // fetching data only once
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users)
      );
  }, [])   //fetch the data only once 


  //used for multiple and single search field / 
  useEffect(() => {
    
    const newfilteredMonsters = monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });    //filters monsters according to the input in searchfield

    setFilteredMonsters(newfilteredMonsters);
    console.log('use effect is fireing')
  }, [monsters, searchField])
  
  
  const onSearchChange = (event) => {
    // console.log(event);
      const searchFieldString = event.target.value.toLocaleLowerCase() //gets the input given in searchField by lowercasing
      setSearchField(searchFieldString)   
     };

     // for second search
  // const onStringChange = (event) =>{
  //   setStringField(event.target.value)
  // }


  

  return(
    <div className='App'>
      <h1 className='app-title'> Monsters Rolodex</h1>
      <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters' 
          className='monsters-search-box'
        ></SearchBox>

      {/* for second search */}
      {/* <SearchBox 
          onChangeHandler={onStringChange} 
          placeholder='set string' 
        ></SearchBox> */}


        <CardList monsters={filteredMonsters}></CardList>

    </div>
  )
}





// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       monsters:[],
//       searchField:''   //stores the input we give in searchField
//     };
//   }

//     componentDidMount() {
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//       this.setState(
//         () => {
//           return {
//             monsters: users
//           }
//         }
//       ))
//     }

//     onSearchChange = (event) => {
//       console.log(event);
//       const searchField = event.target.value.toLocaleLowerCase() //gets the input given in searchField by lowercasing
//       this.setState(() => {
//         return { searchField };  
//       });   // update the state

//     }


//   render()  {

//     const {monsters, searchField} = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) =>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });    //filters monsters according to the input in searchfield

//     return (
//       <div className="App">

//         <h1 classname="app-title">Monsters Rolodex</h1>
//         <SearchBox 
//           onChangeHandller={onSearchChange} 
//           placeholder='search monsters' 
//           className='monsters-search-box'
//         ></SearchBox>
          

//         {/* display monsters */}
//       {/* {filteredMonsters.map((monster) => {
//           return <div key={monster.id}>
//             <h1> {monster.name}</h1>         
//           </div>

//         })}
//              */}
//         <CardList 
//           monsters={filteredMonsters}
//         ></CardList>
//       </div>
//     );
//   }
// }

export default App;
