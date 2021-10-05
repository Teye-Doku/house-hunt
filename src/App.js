import './App.css';
import DetailsHome from './components/HomeMain/DetailsHome/DetailsHome';
import Home from './components/HomeMain/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/rentDetails">
          <DetailsHome></DetailsHome>
        </Route>
        <Route exact path="/">
            <Home />
        </Route>        
      </Switch>
    </Router>
  );
}

export default App;
