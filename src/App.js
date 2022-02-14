
// import './App.css';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import {Navbar} from './Components/Navbar';
import {Home} from "./Components/Home";
import {Footer} from "./Components/Footer";
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
     <Footer/>
     </Router>
    
    </div>
  );
}

export default App;
