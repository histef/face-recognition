import React, { Component } from 'react';

class Register extends Component {

<<<<<<< HEAD
  state = {
    email: '',
    password: '',
    name: ''
  }
  
  onNameChange = e =>{
    this.setState({
      name: e.target.value
    })
  }
  
  onEmailChange = e => {
    this.setState({
      email: e.target.value
    })
  }

  onPasswordChange = e => {
    this.setState({
      password: e.target.value
=======
  state= {
    regEmail: '',
    regPassword: '',
    regName: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitRegistration = (e) => {
    e.preventDefault();
    //REMEMBER: header accepts an object, send it in JSON format
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.regEmail,
        password: this.state.regPassword,
        name: this.state.regName
      })
    })
    .then(resp => resp.json())
    .then(user => {
      if(user) {
        this.props.loadUser(user);
        this.props.onRouteChange('homepage');
      }
>>>>>>> 4ffa44539e3f04bf3a5ed0222ae03bf8ac21b4d6
    })
  }

  render() {
<<<<<<< HEAD
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange('homepage')}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange('signin')}
              className="f6 link dim black db pointer">Back to Sign In</p>
          </div>
        </form>
      </main>
=======
    const { onRouteChange } = this.props;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="regName"
                  id="name"
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="regEmail"
                  id="email-address"
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="regPassword"
                  id="password"
                  onChange={e => this.onChange(e)}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={e => this.onSubmitRegistration(e)}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange('signin')}
                className="f6 link dim black db pointer">Back to Sign In</p>
            </div>
          </form>
        </main>
>>>>>>> 4ffa44539e3f04bf3a5ed0222ae03bf8ac21b4d6
      </article>
    )
  }
}

export default Register;