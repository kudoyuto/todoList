import logo from './logo.svg';
import './App.css';
import TodoList from './features/todos/components/TodoList';
import DoneItems from './features/todos/components/DoneItems';

import {Route, Link, BrowserRouter, Switch, HashRouter} from "react-router-dom"

import { Menu } from 'antd';
import { PlusSquareOutlined , CheckSquareOutlined } from '@ant-design/icons';





function App() {
  
  return (
    
    <div className="App">
      
      <header>
        <BrowserRouter>
          <Menu mode="horizontal">
            <Menu.Item icon={<PlusSquareOutlined />}><Link to="/">Add Task</Link></Menu.Item>
            <Menu.Item icon ={<CheckSquareOutlined />}><Link to="/done">Completed Tasks</Link></Menu.Item>
          </Menu >
          <Switch>
            <Route exact path="/" component={TodoList}></Route>
            <Route path="/done" component={DoneItems}></Route>
          </Switch>
        </BrowserRouter>
        
      </header>
 
    
     
      
      
    </div>
    
   
  );
}

export default App;
