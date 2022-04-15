import './App.css';
import ListPage from '../pages/ListPage';
import {Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/listpage' component={ListPage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;