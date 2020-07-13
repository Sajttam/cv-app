import React from 'react';
import '../index.css';
import '../projects.css';
import './tictactoe.css';
import data from '../data/projectsData.json';
import image1 from 'http://mattiaskallstrom.se/files/simulator.PNG';
import image2 from 'http://mattiaskallstrom.se/files/SolitaireFX.png';
import image3 from 'http://mattiaskallstrom.se/files/platformer.png';

const images = [image1, image2, image3];

function LoadBoxes(props) {
    
    return data.projects.map((proj, n) => {
        const reverese = (n % 2) ? "rowFlexReverse" : "rowFlex";
        return <div className="westSubBox"><div className={reverese}>
            <div className="textInFlow"><h3>{proj.title}</h3>
                {proj.description}
                <p /><a style={{ display: "table-cell" }} href={proj.projectURL} target="_blank">GitHub Repository</a>
            </div>
            <div>
                <img className="imageInFlow" onClick={() => props.onClick(n+1)} src={images[n]} alt="profilePic" />
            </div>
        </div>
        </div>;
    });
}

function ImagePopup(props) {
    return <dialog
        className="dialog"
        style={{ position: "absolute" }}
        open
        onClick={props.onClick}
    >
        <img
            className="image"
            src={images[props.openImage-1]}
            alt="no image"
            onClick={props.onClick}
        />
    </dialog>;
}

class Projects extends React.Component {
    state = { isOpen: null };

    handleShowDialog = (i) => {
        this.setState({ isOpen: i });
        console.log("cliked");
    };

    render() {
        const showBoxes = <LoadBoxes 
            onClick= {(i) => this.handleShowDialog(i)}
        />;
        const popup = this.state.isOpen ? <ImagePopup
            onClick={() => this.handleShowDialog(null)}
            openImage = {this.state.isOpen}
        /> : <div />;

        return (<div><div className="westSubBox">
            <h2>{data.title}</h2>
            {data.description}
            For information about my bachlor thesis please click <a href="/thesis">here</a>
        </div>
            {showBoxes}
            {popup}
        </div>);
    }
}

export default Projects;