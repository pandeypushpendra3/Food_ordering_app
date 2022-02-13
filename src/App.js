
// import './App.css';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import {Navbar} from './Components/Navbar';
import {Home} from "./Components/Home"
function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
     <Switch>
       <Route exact path="/" >
       <Home/>
       </Route>
     </Switch>
     </Router>
    
    </div>
  );
}

export default App;
