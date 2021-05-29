import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import IndiaDashboard from './components/IndiaDashboard';
import WorldDetails from './components/WorldDetails';
import IndiaDetails from './components/IndiaDetails';
function App() {
  return (

    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <>
            <IndiaDashboard />
            <IndiaDetails />
          </>
        </Route>
        <Route path='/india'>
          <>
            <IndiaDashboard />
            <IndiaDetails />
          </>
        </Route>
        <Route path='/world'>
          <WorldDetails />
        </Route>
      </Switch>
    </Router >

  );
}

export default App;

//Header
//India Page
    //India DAshboard
    //State counts
//World Page