import { useState } from 'react';
import Navbar, {Sidebar as Teste} from './components/Navbar'
import './index.css'
import { SupermarketList } from './SupermarketList';

function App({name, age, numCliques, setNumCliques}) {
  // const numCliques = 1

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  function handleClick(message) {
    setNumCliques(numCliques + 1)
  }

  return (
    <>
      {/* <SupermarketList list={products} />
      <p className="test">Hello world</p> */}
      {/* {content} */}
      {/* {!!name !== null ? (
        <p style={{
        color: 'blue'
      }}>
        Hello {name}
      </p>
    ) : null} */}
    {/* {age && (
      <Navbar />
        // <p>I have {age} years old</p>
    )} */}

      {/* <Teste /> */}
    <button onClick={() => handleClick("oi")}>Clique aqui</button>


      <p>
        Numero de cliques: {numCliques}
        </p>
    </>
  )
}

export default App
