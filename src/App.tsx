import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Bookmarks from "./components/bookmarks/bookmarks";
import Cloud from "./components/cloud/cloud";
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
        <div>
            <Menu/>
            <Route path='/cloud' render={() => <Cloud/>}/>
            <Route path='/bookmarks' render={() => <Bookmarks/>}/>
        </div>
            </BrowserRouter>
    );
}

export default App;
