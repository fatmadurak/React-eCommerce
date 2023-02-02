import {BrowserRoutes as Router,Switch,Route} from "react-router-dom"
import './App.css';


function App() {
  return (
  <Router>
    <div>
      
    <switch>

    <Route path="/" exact component={Home}/>



    </switch>



    </div>





  </Router>
  );
}

function Home(){

  return
  <h2>Home</h2>
 
 }
 
export default App;


