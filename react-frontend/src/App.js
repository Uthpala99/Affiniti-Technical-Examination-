import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ListPersonComponent from './components/ListPersonComponent';
import HeaderComponent from './components/HeaderComponent';
import CreatePersonComponent from './components/CreatePersonComponent';
import UpdatePersonComponent from './components/UpdatePersonComponent';
import ListBankComponent from './components/ListBankComponent';
import AddBankComponent from './components/AddBankComponent';
import UpdateBankComponent from './components/UpdateBankComponent';

function App() {
  return (
    <div className="App">
        <Router forceRefresh={true}>
            <HeaderComponent/>
              <div className='container'>
                <Switch>
                  <Route path="/" exact component={ListPersonComponent}></Route>
                  <Route path="/persons"  component={ListPersonComponent}></Route>
                  <Route path="/add-person"  component={CreatePersonComponent}></Route>
                  <Route path="/update-person/:id"  component={UpdatePersonComponent}></Route>
                  <Route path="/banks" exact component={ListBankComponent}></Route>
                  <Route path="/add-bank"  component={AddBankComponent}></Route>
                  <Route path="/update-bank/:id"  component={UpdateBankComponent}></Route>
                </Switch>
              </div>
        </Router>
    </div >
  );
}

export default App;
