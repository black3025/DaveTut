import { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Table from './Table';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [items, setItems] = useState([]);
  const[currPage, setCurrPage] = useState('Users');
  

  useEffect(()=>{
    const fetchItems = async ()=>{
      try {
        const currReqUrl = `${API_URL}${currPage.toLocaleLowerCase()}`;
        const response = await fetch(currReqUrl);
        const listItems = await response.json();
        setItems(listItems);
      } catch (err){
        console.log(err.message);
      }
    }
    fetchItems();
  },[currPage])


  return (
    
    <div className="App">
        
          <Header 
            currPage = {currPage}
            setCurrPage = {setCurrPage}
          />
          {/* <Content items={items} />  */}
          <Table items={items} />
    </div>
  );
}

export default App;
