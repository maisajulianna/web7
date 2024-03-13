import React, { useState } from 'react';

function Privacy() {
  // Define separate state values for each slider
  const [sliderValue1, setSliderValue1] = useState(50);
  const [sliderValue2, setSliderValue2] = useState(50);
  const [sliderValue3, setSliderValue3] = useState(50);

  // Function to handle slider value change for the first slider
  const handleSliderChange1 = (event) => {
    setSliderValue1(parseInt(event.target.value));
  };

  // Function to handle slider value change for the second slider
  const handleSliderChange2 = (event) => {
    setSliderValue2(parseInt(event.target.value));
  };

  const handleSliderChange3 = (event) => {
    setSliderValue3(parseInt(event.target.value));
  };

  const getDisplayText = (sliderValue) => {
    return sliderValue === 1 ? "No" : "Yes";
  };

  // Function to render a slider with its corresponding display text
  const renderSlider = (sliderValue, handleSliderChange) => {
    return (
      <div>
        <div className="slider-value">{getDisplayText(sliderValue)}</div>
        <input 
          type="range" 
          min="1" 
          max="2" 
          value={sliderValue} 
          onChange={handleSliderChange} 
          className="slider" 
        />
      </div>
    );
  };

  return (
    <div className="privacy">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
      </style>
      <div>
        <h1>Privacy and Security settings</h1>
        <div className="on-off-priv">
          <div className="priv-info">
            <h2> Use data to improve <br /> AMACEN</h2>
            <p>Help improve AMACEN by automatically sending usage, <br /> performance, and crash reports to AMACEN.</p>
          </div>
          <div className="slidecontainer">
            {renderSlider(sliderValue1, handleSliderChange1)}
          </div>
        </div>
        <div className="on-off-priv">
          <div className="priv-info">
            <h2> Use data to customize <br /> AMACEN experience</h2>
            <p>Use data from AMACEN to provide a better and more <br /> personalized experience.</p>
          </div>
          <div className="slidecontainer">
            {renderSlider(sliderValue2, handleSliderChange2)}
          </div>
        </div>
        <div className="on-off-priv">
          <div className="priv-info">
            <h2> Use data for third-party <br /> ads</h2>
            <p>Allow AMACEN to use data to show you more relevant <br />ads.</p>
          </div>
          <div className="slidecontainer">
            {renderSlider(sliderValue3, handleSliderChange3)}
          </div>
        </div>
        <div className="on-off-priv">
        <div className="priv-info">
            <h2> Use data to make <br /> AMACEN work</h2>
            <p>We need to store some data in order to provide you the basic AMACEN service.<br></br>
            By using AMACEN, you allow us to provide this basic service.</p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Privacy;