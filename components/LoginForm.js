import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //value: '', //adding this
      username: '', //adding this
      password: '', //adding this
    };

    this.handleChange = this.handleChange.bind(this); //adding this
    this.handleSubmit = this.handleSubmit.bind(this); //adding this
  }

  handleChange(field, event) { //adding this
    this.setState({
      [field]: event.target.value
    });
  }

  handleSubmit(event) {
      alert('A name was submitted: ' + this.state.username);
      event.preventDefault();
      var {username, password} = this.state
      if (username === '' || password === '') {return console.log('invalid input, username and password are required')} //return ends the function if username or password are empty
      this.props.onSubmit({username, password})
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChange.bind(this, 'username')} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
