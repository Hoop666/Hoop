import React, { Component } from 'react'
import backgroundTriangle from '../static/backgroundTriangle.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class About extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ background: '#0C0C0C', height: '100vh', backgroundImage: `url(${backgroundTriangle}),linear-gradient(180deg,rgb(0, 0, 0),rgb(200,200,0))`, backgroundSize: '50%' }}>

                <div className="col-md-6 justify-content-center" style={{  fontSize: '48px' }}>
                    <h1 className="text-white text-center">Hoop is a altcoin, secure</h1>
                    <h1 className="text-white text-center mb-4">public blockchain platform</h1>

                    <p className="text-center text-white font-weight-light" style={{ fontSize: 20 }}>It's a blockchain that aims to create a video game to win or lose tokens. but equally if you run out of
                     chips you can recover by watching ads or by making captchas <Link to="/Hoop/">go back</Link></p>


                </div>

            </div>
        )
    }
}
