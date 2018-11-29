import React from 'react';
import './ImgLinkForm.css';

const ImgLinkForm = () => {
  return (
    <div>
      <p className='f3 center'>
        {'Load a photo and watch the AI detect the faces'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='text' />
          <button className='w-30 grow f4 link ph3 pv2 dib bg-dark'>Detect Face</button>
        </div>
      </div>
    </div>

  )
}

export default ImgLinkForm;