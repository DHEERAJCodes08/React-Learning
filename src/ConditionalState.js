import React, { useState } from 'react';

function ShowHideText() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>This is some text!</p>}
    </div>

    
  );
}

export default ShowHideText;
