import React from 'react';
import Game from './components/tictactoe'
import './index.css';
import './components/tictactoe.css';
import LinkButton from './components/LinkButton';
import data from './data/cvData.json';
import profilePic from './grafix/0.jpg';
import vechiles from './grafix/FrontpagePic.jpg';
import CV from './components/CVcomponent';
import Projects from './components/Projects'
import CharCheet from './components/CharCheet'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

function EastBox() {
    return <div className="eastBoxInfo">
        <img id="profilePic" src={profilePic} alt="profilePic" />
        <div className="eastSubBox">
            <h3>Key Comptences</h3>
            <ul>{data.KeyComptences.map(skill => { return <li>{skill}</li> })}</ul>
        </div>
        <div className="eastSubBox">
            <h3>Language Skills</h3>
            <ul>{data.LanguageSkill.map(skill => { return <li>{skill.language} ({skill.level})</li> })}</ul>
        </div>
    </div>;
}

function Thesis() {
    return <div className="westSubBox">
        <h1>Vehicle Communication</h1>
        <h2>A study of vehicle communication in a modeled environment</h2>
        <h3>Abstract</h3>
        This report deals with the topic of vehicle communication which includes communication between vehicles and other entities such as infrastructure. The purpose of the report is to modulate a vehicle environment where communication between vehicles and infrastructure can be tested. With studies from both literature and experiments, this report aims to answer the question of how safety, efficiency and environmental impact can be improved with the help of vehicle communication. With the aid of existing hardware and proprietary software, tests have been developed to test vehicle communication. Four applications have been developed for the project, one for the integrated system in the vehicles, one system for the vehicle computers, one system for the infrastructure and finally a debugging software. These systems have made it possible to answer the research questions. The results of the tests show that in the modulated environment it is possible to eliminate collisions from occurring. The tests also show how waiting time and throughput transpires at the intersection based on the application of different algorithms. With a queue algorithm it is possible to get a better flow at the intersection than it does with an algorithm that mimics a traffic light. Conclusions that can be drawn from the project are that vehicle communication can improve road safety and efficiency. Vehicle communication can be implemented in infrastructure so that a significant reduction in accidents occurs. Implementations can also save the environment and be implemented in an ethical way.
        <p /><a href="https://www.overleaf.com/read/dtswbgjfdkkd">Read Thesis</a>
        <p /><img className="westSubBoxImage" src={vechiles} alt="profilePic" />
    </div>;
}

function TicTacToe() {
    return <div><div className="westSubBox">
        <h2>Tic-Tac-Toe</h2>
        <Game /></div>
    </div>;
}

function About() {
    return <div className="westSubBox">
        <h2>About This Site</h2>
        This site was created with React. Techniques used was JavaScript, HTML, CSS and JSON.
        <p /> <a href="https://github.com/">GitHub Project</a>
    </div>;
}

function Contact() {
    return <div className="westSubBox">
        <h2>Contact</h2>
        <p /> <a href="mailto:mattias.kallstrom@live.se">mattias.kallstrom@live.se</a>
    </div>;
}

function Header() {
    return (<div className="header"><div className="nameBox">{data.firstname} {data.lastname}</div>
        <div id="tabHolder"><div class="tab">
            <LinkButton className="tablinks" to='/'>CV</LinkButton>
            <LinkButton className="tablinks" to='/thesis'>Thesis</LinkButton>
            <LinkButton className="tablinks" to='/projects'>Projects</LinkButton>
            <LinkButton className="tablinks" to='/tictactoe'>Tic-Tac-Toe</LinkButton>
            <LinkButton className="tablinks" to='/about'>About Site</LinkButton>
            <LinkButton className="tablinks" to='/contact'>Contact</LinkButton>
        </div></div></div>);
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="main">
                    <Switch>
                        <Route path="/thesis">
                            <Header />
                            <div className="content">
                                <div className="west">
                                    <Thesis />
                                </div>
                                <div className="east">
                                    < EastBox />
                                </div>
                            </div>
                            <div className="footer"></div>
                        </Route>
                        <Route path="/projects">
                            <Header />
                            <div className="content">
                                <div className="west">
                                    <Projects />
                                </div>
                                <div className="east">
                                    < EastBox />
                                </div>
                            </div>
                            <div className="footer"></div>
                        </Route>
                        <Route path="/tictactoe">
                            <Header />
                            <div className="content">
                                <div className="west">
                                    <TicTacToe />
                                </div>
                                <div className="east">
                                    < EastBox />
                                </div>
                            </div>
                            <div className="footer"></div>
                        </Route>
                        <Route path="/about">
                            <Header />
                            <div className="content">
                                <div className="west">
                                <About />
                                </div>
                                <div className="east">
                                    < EastBox />
                                </div>
                            </div>
                            <div className="footer"></div>
                        </Route>
                        <Route path="/contact">
                            
                            <Header />
                            <div className="content">
                                <div className="west">
                                <Contact />
                                </div>
                                <div className="east">
                                    < EastBox />
                                </div>
                            </div>
                            <div className="footer"></div>
                        </Route>
                        <Route path="/CharCheet">
                            <div className="content">
                                <CharCheet />
                            </div>
                        </Route>
                        <Route path="/">                            
                            <Header />
                            <div className="content">
                                <div className="west">
                                <CV />
                                </div>
                                <div className="east">
                                    < EastBox />
                                </div>
                            </div>
                            <div className="footer"></div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;