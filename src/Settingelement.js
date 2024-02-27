import React from 'react';


function Settingelement() {
  const websiteUrl = 'https://www.youtube.com/';

  return (
    <div>
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        Visit YouTube
      </a>
    </div>
  );
}

export default Settingelement;
