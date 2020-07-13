import React from 'react';
import '../index.css';
import './tictactoe.css';
import data from '../data/cvData.json';

function valueToMonth(value) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    return months[value - 1];
}

function EmploymentShow(emp) {
    return <div>
        <h3>{emp.titel}, {emp.company}</h3>
        {emp.startYear} {valueToMonth(emp.startMonth)} - {emp.endYear} {valueToMonth(emp.endMonth)}
        <ul>{emp.description.map(des => { return <li>{des}</li> })}</ul>
    </div>
}

function Employment(props) {
    let employmentsShow;
    const buttonText = props.open ? "Contract" : "Expand";

    if (props.open) {
        employmentsShow = data.Employment.map((emp) => {
            return EmploymentShow(emp);
        })
    }
    else {
        employmentsShow = EmploymentShow(data.Employment[0]);
    }

    return <div className="westSubBox"><h2>Employment</h2>
        {employmentsShow}
        <button onClick={props.onClick}>{buttonText}</button>
    </div>;
}

function EducationShow(edu) {
    return <div>
        <h3>{edu.degree}, {edu.school}</h3>
        {edu.startYear}  - {edu.endYear} <p />
        {edu.description}
    </div>
}

function Education(props) {
    let show;
    const buttonText = props.open ? "Contract" : "Expand";
    if (props.open) {
        show = data.Education.map((edu) => {
            return EducationShow(edu);
        })
    }
    else {
        show = EducationShow(data.Education[0]);
    }

    return <div className="westSubBox"><h2>Education</h2>
        {show}
        <button onClick={props.onClick}>{buttonText}</button>
    </div>;
}

function VolunteerWork(props) {
    return <div className="westSubBox"><h2>Volunteer Work</h2>
        {
            data.VolunteerWork.map(vol => {
                return <div><h3>{vol.Title}, {vol.Union}</h3>
                    {vol.startYear} {valueToMonth(vol.startMonth)} - {vol.endYear} {valueToMonth(vol.endMonth)}
                    <ul>{vol.Event.map(event => {
                        return <li>{event.venue}<ul>
                            <li>{event.startYear} {valueToMonth(event.startMonth)} - {event.endYear} {valueToMonth(event.endMonth)}</li>
                        </ul></li>
                    })}</ul>
                </div>
            })
        }
    </div>
}

class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employmentOpen: false,
            educationOpen: false,
            volunteerOpen: false,
        }
    }

    toggleEmployment() {
        this.setState({
            employmentOpen: (!this.state.employmentOpen),
        })
    }

    toggleEducation() {
        this.setState({
            educationOpen: (!this.state.educationOpen),
        })
    }
    render() {
        return <div>
            <div className="westSubBox">
                <h1>CV</h1>
                <h2>Profile</h2>
                {data.profile}
            </div>
            <Employment
                open={this.state.employmentOpen}
                onClick={() => this.toggleEmployment()}
            />
            <Education
                open={this.state.educationOpen}
                onClick={() => this.toggleEducation()}
            />
            <VolunteerWork />
        </div>;
    }
}

export default CV;