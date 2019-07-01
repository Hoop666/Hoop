import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import updateUser from '../static/updateUser.png';
import logoHoop from '../static/logoHoop.png';
import backgroundTriangle from '../static/backgroundTriangle.png';
import About from './About';
import './index.css';
import 'babel-core/register';
import 'babel-polyfill';

class Home extends Component {

    constructor() {
        super()

        this.state = {
            remainTimeDate: "",
            ipClient: "",
            userTotal: "",
        }

    }

    componentWillMount() {


        const timeUpdate = setInterval(() => {

            let { remainTime,
                remainSeconds,
                remainMinutes,
                remainHours,
                remainDays } = this.getRemainTime('Jul 30 2019 18:26:47 GMT-0500');

            this.setState({ remainTimeDate: `${remainDays} : ${remainHours} : ${remainMinutes} : ${remainSeconds}` });

            if (remainTime <= 1) {
                clearInterval(timeUpdate);
            }

        }, 1000);


    }

    async componentDidMount() {


        await axios.get('https://api.ipify.org/?format=json').then((res) => this.setState({ ipClient: res.data.ip }));

        await axios.get('https://hoop666.herokuapp.com/api/user').then((res) => this.setState({ userTotal: res.data.users }));

        await axios.post('https://hoop666.herokuapp.com/api/user/create', { ip: this.state.ipClient });

    }


    getRemainTime = deadline => {

        let now = new Date(),
            remainTime = (new Date(deadline) - now + 1000) / 1000,
            remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
            remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
            remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
            remainDays = Math.floor(remainTime / (3600 * 24));

        return {
            remainTime,
            remainSeconds,
            remainMinutes,
            remainHours,
            remainDays
        }

    }

    render() {
        return (


            <div className="d-flex flex-column justify-content-between" style={{ background: '#0C0C0C', height: '100vh', backgroundImage: `url(${backgroundTriangle}) ,linear-gradient(180deg,rgb(0, 0, 0),rgb(200,200,0))`, backgroundSize: '50%' }}>


                <div className="d-flex justify-content-center align-items-center h-100">



                    <div className="col-lg-5 border rounded border-warning d-flex align-items-center justify-content-center" style={{ height: 100 }}>

                        <h2 className="text-white text-center font-weight-light" id="remainTime" style={{ fontSize: '4em' }}>{this.state.remainTimeDate}</h2>

                    </div>
                </div>




                <div className="d-flex" style={{ background: '#111111', height: 60 }}>
                    <div className="col-md-6 d-flex align-items-center h-100 justify-content-start">

                        <img src={updateUser} style={{ height: 25 }} />

                        <h4 className="ml-3 mt-2 " style={{ color: "#828282" }}>{this.state.userTotal} : Users</h4>


                    </div>

                    <div className="col-md-6 d-flex align-items-center justify-content-end">

                        <Link to="/Hoop/about"><img src={logoHoop} style={{ height: 40 }} /></Link>

                    </div>

                </div>
            </div>



        );
    }
}

export default Home;