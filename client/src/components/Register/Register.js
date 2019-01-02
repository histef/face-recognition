import React, { Component } from 'react';

class Register extends Component {

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
    })
  }

  render() {

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
      </article>
    )
  }
}

export default Register;