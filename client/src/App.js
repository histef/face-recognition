import React, { Component } from 'react';
import Clarifai from 'clarifai';

import SignOut from './components/SignOut/SignOut';
import Logo from './components/logo/Logo';
import Rank from './components/Rank/Rank';
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm';
import FaceRecog from './components/FaceRecog/FaceRecog';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import API_Key from './config.js';

import './App.css';

const app = new Clarifai.App({
 apiKey: API_Key
});


class App extends Component {
  state = {
    input: '',
    imageUrl: '',
    box: {},
    route: 'signin',
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined:''
    }
  }

//only for testing server connection
  // componentDidMount() {
  //   fetch('http://localhost:3000')
  //   .then(resp => resp.json())
  //   .then(console.log)
  // }

  loadUser = (data) => {
    this.setState({user: {
      id:  data.id,
      name:  data.name,
      email:  data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  getFaceLocations = data => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);

    return { //returns object with points to corners on face
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = box => {
    console.log(box);
    this.setState({ box });
  }

  handleInputChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  //for buttons, always need an onSubmit function
  handleSubmit = () => {
    // the image url should get displayed on submit
    this.setState({
      imageUrl: this.state.input
    }, () => {
      //to use imageUrl, need to use cb in setState so when imageUrl ahs value THEN FACE_DETECT will start
      app.models.predict(
        Clarifai.FACE_DETECT_MODEL, this.state.imageUrl)
      .then(response => {
          this.displayFaceBox(this.getFaceLocations(response))
      })
      .catch (err => console.log(`[Error]: ${err}`))
    })
  }

  onRouteChange = (route) => {
    this.setState({ route });
  }

  render() {
    return (
      <div className="App">
        {this.state.route === 'homepage'
        ? <div>
            <SignOut
              onRouteChange={this.onRouteChange}
            />
            <Logo />
            <Rank />
            <ImgLinkForm
              onInputChange={this.handleInputChange}
              onSubmit={this.handleSubmit}
            />
            <FaceRecog
              imageUrl={this.state.imageUrl}
              box={this.state.box}
            />
          </div>
        : (
            this.state.route === 'signin'
            ? <SignIn onRouteChange={this.onRouteChange}/>
            : <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}/>
          )
      }
      </div>
    );
  }
}

export default App;
