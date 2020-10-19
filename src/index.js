import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';

const tag =(
  <div>
    {new Date().toLocaleDateString()} {" "}
    {new Date().toLocaleTimeString()}
    <Header/>
    <Slider/>
    <Footer/>
  </div>
)

ReactDOM.render(tag,document.getElementById("root"))
