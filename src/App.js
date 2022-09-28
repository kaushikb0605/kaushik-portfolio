import './App.css';
import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from  './components/Project' ;
import NavBar from './components/NavBar';
import ComingSoon from './components/ComingSoon';

import styled from "styled-components";
import Background from "./components/Background";
import Places from './components/Places';
// import Food from './components/Food';



export default function App() {
  return (
    <Wrapper className="App">
      
    <BrowserRouter>
    <NavBar/>
    <Background />

      <>
      <Routes>
        <Route element={<Home/>} path="/" exact/>
        <Route element={<About/>} path="/about"/>
        <Route element={<SinglePost/>} path="/post/:slug"/>
        <Route element={<Post/>} path="/post"/>
        <Route element={<ComingSoon/>} path="/coming-soon"/>
        <Route element={<Places />} path="/places"/>
        {/* <Route element={<Food />} path="/food"/> */}
        <Route element={<Project/>} path="/project"/>
      </Routes>
      </>
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
  canvas2{
    height:1000px;
  }
`;