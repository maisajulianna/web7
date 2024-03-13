import { useState } from 'react';

function Account () {
  const [showNotification, setShowNotification] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileData, setProfileData] = useState({
    profilePicture: '',
    header: '',
    username: '',
    email: ''
  });

  const handleDeactivateClick = () => {
  
    // Show the notification
    setShowNotification(true);
  };

  const handleCancel = () => {
    // Hide the notification
    setShowNotification(false);
  };

  const handleConfirmDeactivate = () => {
    // TODO: Add logic to deactivate the account
    // Hide the notification after processing
    setShowNotification(false);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordChange = () => {
    // Add logic to handle password change
    if (newPassword === confirmPassword) {
      // Passwords match, proceed with the password change logic
      console.log('Password change logic here');
    } else {
      // Passwords don't match, display an error or take appropriate action
      console.error('Passwords do not match');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
  
    if (!file) {
      return;
    }
    // Read the file and convert it into a data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData(prevState => ({
        ...prevState,
        profilePicture: reader.result // Save the data URL in the state
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleHeaderPictureChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input
    if (!file) {
      return;
    }
    
    // Read the file and convert it into a data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileData(prevState => ({
        ...prevState,
        header: reader.result // Save the data URL in the state
      }));
    };
    reader.readAsDataURL(file);
  };

  // const handleProfileUpdate = () => {
  //   // Add logic to update profile information
  //   console.log('Updated profile data:', profileData);
  //   // Also, you can upload the file to your server here
  // };
  return (
    <div className="account">
            {showNotification && (
        <div className="modal-overlay">
          <div className="notification">
            <p>Are you sure you want to deactivate your account?</p>
            <div className="notification-buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleConfirmDeactivate}>Deactivate</button>
            </div>
          </div>
        </div>
      )}
       <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
        </style>
      <div className="account-settings">
      <h1>Account settings</h1>
        <div>
        <div className="account-settings-section">
          <h2>Profile</h2>
          <p>Update your profile picture, name, and email address.</p>
          <label>Profile Picture:</label>
          <input
          className="profile-picture-input"
          placeholder='Upload a new profile picture'
          type="file"
          accept="image/*"
          name="profilePicture"
          onChange={handleProfilePictureChange}
        />
        <label>Header Picture:</label>
        <input
          className="header-picture-input"
          placeholder='Upload a new header picture'
          type="file"
          accept="image/*"
          name="headerPicture"
          onChange={handleHeaderPictureChange}
        />
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder='Enter your username'
          value={profileData.username}
          onChange={handleInputChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder='Enter your email'
          value={profileData.email}
          onChange={handleInputChange}
        />
        </div>
          {/* Light-colored line */}
        <div className="divider"></div>
        <div className="account-settings-section">
        <h2>Password</h2>
        <p>Change your password.</p>
        <label className="new-password">New Password:</label>
        <input
          className="new-password"
          type="password"
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
        <label className="new-password">Confirm Password:</label>
        <input
          type="password"
          className="new-password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <button onClick={handlePasswordChange}>Change password</button>
        </div>
          {/* Light-colored line */}
          <div className="divider"></div>
        <div className="account-settings-section">
          <h2>Authentication</h2>
          <p>Choose your authentication method</p>
          <button>Change method</button>
        </div>
        {/* Light-colored line */}
        <div className="divider"></div>
        <div className="account-settings-section">
        <h2>Deactivate account</h2>
        <p>
          Deactivate your account. After pressing the button,
          you can't recover your account information.
        </p>
        <button className="deactivate" onClick={handleDeactivateClick}>
          Deactivate account
        </button>
      </div>

      {/* Modal Overlay and Notification */}
      </div>
    </div>
    <div className="profile-preview">
        {profileData.profilePicture ? (
          <img src={profileData.profilePicture} alt="Profile" className="profile-pic" />
        ) : (
          <div className="placeholder">Your profile picture will apear here</div>
        )}
        {profileData.header ? (
          <img src={profileData.header} alt="Header" className="profile-header" />
        ) : (
          <div className="placeholder">Your header will appear here</div>
        )}
        <h3 className="set-username" >{profileData.username ? profileData.username : 'Your username'}</h3>
        <p className="set-email">{profileData.email ? profileData.email : 'Your email'}</p>
        <div className="set-post">
          <p className="post-appear">Your posts appear here</p>
        </div>
</div>
  </div>
  );
}

export default Account;