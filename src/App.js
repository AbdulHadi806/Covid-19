import './App.css';
import React, {useEffect, useContext} from 'react';


// importing components 
import {Header} from './components/header'
import {MainBanner} from './components/mainBanner'
import { GlobalContext } from "./context/context";

function App() {

  const api = "https://covid19.mathdro.id/api/countries/Pakistan/confirmed";
//importing setCasesData here from context.js
  const { setCasesData } = useContext(GlobalContext)

// fetching data here
  useEffect(() => {
    const fetchApiData = async (api) => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setCasesData(data)
      } catch (error) {
        console.log(error + " be better on fetching data");
      }
    };
    fetchApiData(api)
  }, []);
  
  return (
    <div className="App">
        <Header />
        <MainBanner />
    </div>
  );
}

export default App;
