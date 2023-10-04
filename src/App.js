import { useEffect, useState } from 'react';
import './App.css';
import WeeklyBar from './components/WeeklyBar/WeeklyBar';
import PageTop from './components/PageTop/PageTop';

function App() {

  const [selectedDay, setSelectedDay] = useState(0);

  const [day, setDay] = useState(Array.from({length: 7}, (_, index) => {
    return {
      name: 'Monday', 
      id: index, 
      img: '', 
      temperature: 12,
    }

  }));

  // const getDayData = async() => {
  //   const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  //   const data = await response.json();
  //   const results = data.results;
    
  //   for (let index = 0; index < results.length; index++) {
  //     const pokemon = results[index];
  //     const pokeData = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon.name);
  //     const pokeJson = await pokeData.json();
  //     results[index] = pokeJson;
  //   }
  //   setDay(results);
  //}

  // useEffect(() => {
  //   getDayData()
  // }, []);

  return (
    <div className="App">
      <PageTop></PageTop>
      <WeeklyBar></WeeklyBar>
    </div>
  );
}

export default App;
