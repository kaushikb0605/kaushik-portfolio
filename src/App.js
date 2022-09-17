import './App.css';
import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from  './components/Project' ;
import NavBar from './components/NavBar';

import styled from "styled-components";
import Background from "./components/Background";



export default function App() {
  return (
    <Wrapper className="App">
      
    <BrowserRouter>
    <NavBar/>
    <Background />

      <div>
      <Routes>
        <Route element={<Home/>} path="/" exact/>
        <Route element={<About/>} path="/about"/>
        <Route element={<SinglePost/>} path="/post/:slug"/>
        <Route element={<Post/>} path="/post"/>
        <Route element={<Project/>} path="/project"/>
      </Routes>
      </div>
    </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas{
    height:500px;
  }
`;