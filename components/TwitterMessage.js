import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor(props) { //adding props
    super(props); //adding props

    this.handleChange = this.handleChange.bind(this); //adding this

    this.state = {
      value: '', //adding this
      //secondsLeft: props.initialCount, //initialCount set in index.js
      //maxChars: 140,
      maxChars: this.props.maxChars,
    }
  }

  handleChange(event) { //adding this
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    //console.log(this.props)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <br></br>
        <strong>Length of chars typed:</strong>{this.state.value.length}
        <br></br>
        <strong>Max Chars:</strong>{this.state.maxChars-this.state.value.length}
      </div>
    );
  }
}
