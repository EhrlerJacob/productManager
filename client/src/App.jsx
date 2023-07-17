import { useState } from 'react'
import Header from './components/Header';
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from '../views/Main';
import DisplayProduct from './components/DisplayProduct';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route element={<Main/>} path="/" default/>
                    <Route element={<DisplayProduct/>} path="/products/:id"/>
                </Routes>
            </BrowserRouter>
        </div>
        
    );
}


export default App;
