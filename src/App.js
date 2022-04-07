import logo from './logo.svg';
import './App.scss';
import HomePage from './Components/UseContext/HomePage';
import {UserContext} from './Components/UseContext/UserContext';
import Index from './Components/UseRef/Index';
function App() {
  // const user = { name: "Son", loggedIn: true}
  
  return (
  
    //Tag Provider de gan gia tri cho the con(HomePage)
  // <UserContext.Provider value={user} >
    // <HomePage />
  // </UserContext.Provider>
  <div className='app'>
    <Index />
    {/* <h1> Hello World </h1> */}
  </div>
 
  );
}

export default App;
