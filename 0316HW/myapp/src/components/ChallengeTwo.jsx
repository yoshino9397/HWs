import React, { Component } from "react";

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
  constructor(props) {
    super(props);
    this.state = { studentList: [] };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        studentList,
      });
    }, 3000);
  }

  //random button handler
  randomize = () => {
    let newStudentList = studentList;
    for (let i = newStudentList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newStudentList[i];
      newStudentList[i] = newStudentList[j];
      newStudentList[j] = temp;
      this.setState({ studentList: newStudentList });
    }
  };
  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {this.state.studentList.map((student, id) => (
              <li key={id}>{student}</li>
            ))}
          </ul>
        </div>
        <button className="btn large" onClick={this.randomize}>
          Randomize
        </button>
      </>
    );
  }
}
