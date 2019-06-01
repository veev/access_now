import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      startState: true,
      story: "Business"
    }
  }

  static defaultProps = {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleStoryChange = (newStory) => {
    if (newStory !== this.state.story) {
      this.setState({ story: newStory })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>
            AccessNow KeepItOn Shutdown Stories!
          </h1>
        </header>
        <div className="vizArea"></div>
        <div className="storyArea">
          <div className="storyNav" onClick={this.handleStoryChange}>
            <button id="business" className="storyButton">Business</button>
            <button id="healthcare" className="storyButton">Healthcare</button>
            <button id="humanitarian" className="storyButton">Humanitarian Aid</button>
            <button id="education" className="storyButton">Education</button>
            <button id="psychology" className="storyButton">Psychology</button>
            <button id="journalism" className="storyButton">Journalism</button>
            <button id="freedom" className="storyButton">Freedom of Expression</button>
          </div>
        </div>
        <footer className="footer">
          <p>
            Footer info goes here.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
