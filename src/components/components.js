import React from 'react';
import Home from './Home.js';
import Props from './Props.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function CComponent() { return (
  <>
  <header>
          <a href="/">Home</a><br/>
          <a href="/props">Props</a>
  </header>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/props" element={<Props name="prop2"/>}/>
      </Routes>
    </>
) }
