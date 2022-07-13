
import React, { useContext, createContext, useState } from "react";

import globContent from "./content";

const content = createContext();

const Coma = () => {
  const value = useContext(content);
  const glob = useContext(globContent)
  console.log(value)
  console.log(glob)
  return (
    <>

      <span>this is a {value.name}</span>
      <Conb></Conb>
    </>
  )
}

const Conb = () => {
  const value = useContext(content);
  return (
    <div>
      this is b {value.name}
    </div>
  )
}

const App = () => {
  const [count, setCount] = useState(99)
  return (
    <div>
      <content.Provider value={{ name: '洲洲' + count }}>
        <Coma></Coma>
      </content.Provider>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}



export default App;
