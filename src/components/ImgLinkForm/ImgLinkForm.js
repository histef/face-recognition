import React from 'react';
import './ImgLinkForm.css';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 10
    },
    color: {
      value: ['#d5d1b7']
    },
    shape: {
      stroke: {
        width: 8,
        color: '#d5d1b7'
      }
    },
    line_linked: {
      opacity: 0,
      color: '#fff',
      width: 0.6,
      enable_auto: false
    }
  },
  interactivity: {
    "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
}
}

const ImgLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className='f3 center'>
        {'Load a photo and watch the AI detect the faces'}
      </p>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70' type='text' onChange={e => onInputChange(e)}/>
          <button className='w-30 grow f4 link ph3 pv2 dib' onClick={onSubmit}>
            <Particles
              className='particles'
              params={particlesOptions}
            />
            Detect Face
          </button>
        </div>
    </div>

  )
}

export default ImgLinkForm;