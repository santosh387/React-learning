import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div style={{backgroundColor:'green',textAlign:'center',fontSize:'30px'}}>
            <h1>This is Slider</h1>
            <ul>
                <li>ReactJs</li>
                <li>Html</li>
                <li>Css</li>
                <li>BootStrap</li>
            </ul>
            </div>
        )
    }
}

export default Header