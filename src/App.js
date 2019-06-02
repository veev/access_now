import React, { Component } from 'react';
// import StoryNav from './StoryNav';
import StorySection from './StorySection';
import './App.css';
// this.apiKey = 'AIzaSyBUBK5P7PcU01Hr7SyaeokLdg2GrqHBLzY';
// this.spreadsheetId = '1YHLE__OnhOdZsnDtJFsxhc8c80GLrzzCnMX-0QvaN0o';
// const baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      startState: true,
      incidents: null,
      stories: null,
      selectedStory: 'business',
      active: false
    }
  }

  static defaultProps = {
    apiKey: 'AIzaSyBUBK5P7PcU01Hr7SyaeokLdg2GrqHBLzY',
    spreadsheetId: '1YHLE__OnhOdZsnDtJFsxhc8c80GLrzzCnMX-0QvaN0o',
    spreadsheetName: 'Cleaned_data',
    storySpreadsheetId: '107iIggs81QR7MofT4wlxxrC5JDKAU04dRJrS8PWzpmE',
    storySpreadsheetName: 'Copy_Story_Instance_Map',
    baseUrl: 'https://sheets.googleapis.com/v4/spreadsheets'
  }

  async componentDidMount() {
    // get macro incident data
    try {
      const response = await fetch(`${this.props.baseUrl}/${this.props.spreadsheetId}/values:batchGet?ranges=${this.props.spreadsheetName}&majorDimension=ROWS&key=${this.props.apiKey}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ incidents: this.makeObject(json) });
    } catch (error) {
      console.log(error);
    }

    // get story data
    try {
      const storyResponse = await fetch(`${this.props.baseUrl}/${this.props.storySpreadsheetId}/values:batchGet?ranges=${this.props.storySpreadsheetName}&majorDimension=ROWS&key=${this.props.apiKey}`);
      if (!storyResponse.ok) {
        throw Error(storyResponse.statusText);
      }
      const storyJson = await storyResponse.json();
      this.setState({ stories: this.makeObject(storyJson) });
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {

  }

  makeObject = (data) => {
    // console.log(data)
    const batchRowValues = data['valueRanges'][0]['values']
    // TO DO Clean up this function to be ES6
    const rows = [];
    for (let i=1; i<batchRowValues.length; i++) {
      const rowObject = {}
      for (let j=0; j<batchRowValues[i].length; j++) {
        rowObject[batchRowValues[0][j]] = batchRowValues[i][j]
      }
      rows.push(rowObject)
    }
    return rows
  }

  makeStoryObject = (data) => {
    const formatted = this.makeObject(data)
    console.log(formatted)

    const storyObject = formatted.reduce( (obj, story, i) => {

    }, {})
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
        // return <div>
        //   <p>Business Story Content Here</p>
        // </div>;
        return <StorySection stories={this.state.stories} selectedStory={this.state.selectedStory} />
      case 'healthcare':
        // return <div>
        //   <p>Healthcare Story Content Here</p>
        // </div>;
        return <StorySection />
      case 'humanitarian':
        // return <div>
        //   <p>Humanitarian Aid Story Content Here</p>
        // </div>;
        return <StorySection />
      case 'education':
        // return <div>
        //   <p>Education Story Content Here</p>
        // </div>;
        return <StorySection />
      case 'psychology':
        // return <div>
        //   <p>Psychology Story Content Here</p>
        // </div>;
        return <StorySection />
      case 'journalism':
        // return <div>
        //   <p>Journalism Story Content Here</p>
        // </div>;
        return <StorySection />
      case 'freedom':
        // return <div>
        //   <p>Freedom of Expression Story Content Here</p>
        // </div>;
        return <StorySection />
      default:
        return null;
    }
  }

  render() {

    const {
      incidents,
      stories,
      selectedStory, 
      active
    } = this.state;

    console.log(incidents)
    // console.log(stories)
    console.log(selectedStory)

    return (
      <div className="App">
        <header className="header">
          <h1>
            AccessNow KeepItOn Shutdown Stories!
          </h1>
        </header>
        <div className="vizArea">
          <div className="vizCanvas"></div>
        </div>
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
          <StorySection stories={this.state.stories} selectedStory={this.state.selectedStory} />
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
