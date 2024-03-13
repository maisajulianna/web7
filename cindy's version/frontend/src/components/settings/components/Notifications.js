import React, { useState } from 'react';


function Notifications() {
  // State to manage the slider value
  const [sliderValue, setSliderValue] = useState(50);

  // Function to handle slider value change
  const handleSliderChange = (event) => {
    // Update the slider value in state
    setSliderValue(parseInt(event.target.value));
  };

  const getDisplayText = () => {
    return sliderValue === 2 ? "On" : "Off";
  };


  return (
    <div className="notifs">
      
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
        </style>
      <h1>Notifications settings</h1>
      <div className="on-off">
        <div className="notifications">
          <h2> Notifications</h2>
        </div>
      <div className="slidecontainer">
      <div className="slider-value">{getDisplayText()}</div>
        <input 
          type="range" 
          min="1" 
          max="2" 
          value={sliderValue} // Bind value to state
          onChange={handleSliderChange} // Handle value change
          className="slider" 
          id="myRange" 
        />
        
        </div>
      </div>
      <div className="divider"></div>
      <div className="specified-notifs">
      
        <div className="notif-options">
          
          <div className="notif-option">
            <label for="notif1">New messages</label>
            <input type="checkbox" id="notif1" name="notif1" value="notif1" className="custom-checkbox"/>
          </div>
          <div className="notif-option">
          <label for="notif3">New likes</label>
            <input type="checkbox" id="notif3" name="notif3" value="notif3" className="custom-checkbox"/>
          </div>
          <div className="notif-option">
          <label for="notif6">New comments</label>
            <input type="checkbox" id="notif6" name="notif6" value="notif6" className="custom-checkbox"/>
          </div>
          <div className="notif-option">
          <label for="notif7">New posts</label>
            <input type="checkbox" id="notif7" name="notif7" value="notif7" className="custom-checkbox"/>
          </div>
          <div className="notif-option">
          <label for="notif8">New events</label>
            <input type="checkbox" id="notif8" name="notif8" value="notif8" className="custom-checkbox"/>
          </div>
          <div className="notif-option">
          <label for="notif9">New groups</label>
            <input type="checkbox" id="notif9" name="notif9" value="notif9" className="custom-checkbox"/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Notifications;