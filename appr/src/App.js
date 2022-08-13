import React from "react";
import { useContext } from "react";
const ExampleContext = React.createContext();

const App = () => {
  return (
    <ExampleContext.Provider value={{ size: 20 }}>
      <div className='App'>
        <ChildComponent />
      </div>
    </ExampleContext.Provider>
  );
};

const ChildComponent = () => {
  const { size } = React.useContext(ExampleContext);

  return <p style={{ size }}>This text is {size}</p>;
};
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>hello World</h1>
//     </div>
//   );
// }

export default App;
