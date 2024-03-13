import React, { useState } from 'react';

function Help () {
  // const [reportProblems, setreportProblems] = useState([]);
  const [newProblem, setNewProblem] = useState('');
  const [sendSupport, setSendSupport] = useState([]);
  // const [newSupport, setNewSupport] = useState('');
  const [showNotification1, setShowNotification1] = useState(false);
  const [showNotification2, setShowNotification2] = useState(false);
  
  // const handleReportProblems = () => {
  //   if (newProblem.trim() !== '') {
  //     setreportProblems((prevProblems) => [...prevProblems, newProblem.trim()]);
  //     setreportProblems('');
  //   }
  // }

  // const handleSendSupport = () => {
  //   if (sendSupport.trim() !== '') {
  //     setSendSupport((prevSupport) => [...prevSupport, sendSupport.trim()]);
  //     setSendSupport('');
  //   }
  // }

  const handleSendSupportClick = () => {
    setShowNotification2(true);
  };

  const handleReportClick = () => {
    setShowNotification1(true);
  };

  const handleOkay = () => {
    setShowNotification1(false);
    setShowNotification2(false);
  };

    return (
      <div className="help">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
        </style>
        {showNotification1 && (
        <div className="modal-overlay">
          <div className="notification">
            <p>Your report has been sent!</p>
            <div className="notification-buttons">
              <button onClick={handleOkay}>Ok</button>
            </div>
          </div>
        </div>
        )}
        {showNotification2 && (
        <div className="modal-overlay">
          <div className="notification">
            <p>Your support request has been sent!</p>
            <div className="notification-buttons">
              <button onClick={handleOkay}>Ok</button>
            </div>
          </div>
        </div>
        )}
      
        <h1>Help options</h1>
        <div className="report-problem"></div>
        <label>
          <textarea
            id="report-problem"
            placeholder="Enter a problem to report"
            type="text"
            value={newProblem}
            onChange={(e) => setNewProblem(e.target.value)}
          />
        </label>
        <button onClick={handleReportClick}>Report</button>
        <div className="send-support"></div>
        <label>
          <textarea
            id="send-support"
            placeholder="Enter your support request here"
            type="text"
            value={sendSupport}
            onChange={(e) => setSendSupport(e.target.value)}
          />
        </label>
        <button onClick={handleSendSupportClick}>Send</button>

        <div className="contact-support">
          <h1>Contact Support</h1>
          <h2>For any other questions or concerns, please contact:</h2>
          <div className="support-icons">
            <p>Phone: xxx-xxx-xxx </p>
            <p>Email: example@AMACENsupport.com</p>
            <div className="divider-help"></div>
            <h2>Or you can tag us here:</h2>
            <p>Twitter: @AMACENweb</p>
            <p>Facebook: @AMACENweb</p>
            <p>Instagram: @AMACENweb</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Help;