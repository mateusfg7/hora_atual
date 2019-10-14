import React, { Component } from 'react'

import './styles.css';

export default class Section extends Component {

    constructor(probs) {
        super(probs);
        this.state = { time: this.startTime() }
    }

    change() {
        this.setState({ time: this.startTime() });
    }
    

    checkTime = (i) => {
        if (i<10) {
            i="0" + i;
        }
        return i;
    }
    startTime = () => {
       const today = new Date();
       const h = today.getHours();
       let m=today.getMinutes();
       let s=today.getSeconds(); 
       // add a zero in front of numbers<10
       m = this.checkTime(m);
       s = this.checkTime(s);
       const retorno = h+':'+m+':'+s;
       return retorno;
    }


   temp = () => setInterval(() => this.change(), 1000)

    render() {
        return (
            <div className="main_section">
                <p>{this.state.time}</p>
                <div className="id">{this.temp()}</div>
            </div>
        )
    }
}