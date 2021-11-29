import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import Book from './components/Book'
//import './components/styles.css'

function App(){
  const [data, setData] = useState(null);        
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      async function getData() {
          const response = await fetch('./books.json');
          
          const json     = await response.json()
         
          setData(json);
          setLoaded(true);
      }
      getData();
  },[])
  console.log('loaded:', loaded, 'data:', data);

  return (<>
      <div className="container">
          <h1> Books </h1>    
          {loaded && data.books.map((book,i) => <Book data={book} key={i}/>)}
      </div>        
  </>);   
}
export default App;
