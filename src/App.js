import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList';
import DoneItems from './features/todos/components/DoneItems';

import {Route, Link, BrowserRouter, Switch, HashRouter} from "react-router-dom"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <Link to="/">go the the todoList</Link>
        <br/>
        <Link to="/done">go the the done list page</Link>
      </ul>
      <Switch>
      <Route exact path="/" component={TodoList}></Route>
      <Route exact path="/done" component={DoneItems}></Route>
      </Switch>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
