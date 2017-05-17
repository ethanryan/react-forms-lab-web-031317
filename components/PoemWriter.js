import React from 'react';

export default class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poem: '', //adding this
    };

    this.handleChange = this.handleChange.bind(this); //adding this
  }

  // The poem has three lines.
  // The first line has five words.
  // The second line has three words.
  // The third line has five words.

  validLine(line, index) {
    let wordCount = line.split(' ').filter(word => word !== '').length
    return index % 2 === 0 ? wordCount === 3 : wordCount === 5
  }

  validPoem(poem) {
    return poem.split('\n').filter((line, index) => this.validLine(line, index + 1)).length === 3
  }

  handleChange(event) { //adding this
    this.setState({
      poem: event.target.value
    });
  }

  poemError() {
    if (!this.validPoem(this.state.poem)) {
      return (
        <div id="poem-validation-error" style={ {color: 'red'} } >
          This poem is not written in the right structure!
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        { this.poemError() }
      </div>
    );
  }
}
