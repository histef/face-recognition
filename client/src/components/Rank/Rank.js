import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='f3 center' style ={{color: '#403326'}}>
        {`<Name>, your current rank is...`}
      </div>
      <div className='f1 center' style ={{color: '#403326'}}>
        {entries}
      </div>
    </div>
  )
}

export default Rank;