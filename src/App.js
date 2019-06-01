import React, { Component } from 'react';
// import StoryNav from './StoryNav';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      startState: true,
      selectedStory: 'business',
      active: false
    }
  }

  static defaultProps = {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleStoryChange = (newStory) => {
    console.log('newStory', newStory)
    if (newStory !== this.state.selectedStory) {
      this.setState({ selectedStory: newStory })
    }
  }

  toggleStory = (event) => {
    console.log(event.target.value)
    const currentState = this.state.active;
    event.preventDefault();
    this.setState({
      selectedStory: event.target.value,
      active: !currentState
    })
  }

  switchStory = (value) => {
    console.log(value)
    switch (value) {
      case 'business':
        return <div>
          <p>Business Story Content Here</p>
        </div>;
      case 'healthcare':
        return <div>
          <p>Healthcare Story Content Here</p>
        </div>;
      case 'humanitarian':
        return <div>
          <p>Humanitarian Aid Story Content Here</p>
        </div>;
      case 'education':
        return <div>
          <p>Education Story Content Here</p>
        </div>;
      case 'psychology':
        return <div>
          <p>Psychology Story Content Here</p>
        </div>;
      case 'journalism':
        return <div>
          <p>Journalism Story Content Here</p>
        </div>;
      case 'freedom':
        return <div>
          <p>Freedom of Expression Story Content Here</p>
        </div>;
      default:
        return null;
    }
  }

  render() {

    const { 
      selectedStory, 
      active 
    } = this.state;

    console.log(selectedStory)

    return (
      <div className="App">
        <header className="header">
          <h1>
            AccessNow KeepItOn Shutdown Stories!
          </h1>
        </header>
        <div className="vizArea"></div>
        <div className="storyArea">
          <div className="storyNav">
            <button onClick={this.toggleStory} value="business" className="storyButton">Business</button>
            <button onClick={this.toggleStory} value="healthcare" className="storyButton">Healthcare</button>
            <button onClick={this.toggleStory} value="humanitarian" className="storyButton">Humanitarian Aid</button>
            <button onClick={this.toggleStory} value="education" className="storyButton">Education</button>
            <button onClick={this.toggleStory} value="psychology" className="storyButton">Psychology</button>
            <button onClick={this.toggleStory} value="journalism" className="storyButton">Journalism</button>
            <button onClick={this.toggleStory} value="freedom" className="storyButton">Freedom of Expression</button>
          </div>
          {this.switchStory(selectedStory)}
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
