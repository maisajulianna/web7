import { Outlet, Link } from 'react-router-dom';
import React, { useState } from 'react';


function Blocked () {
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [blockedWords, setBlockedWords] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [newWord, setNewWord] = useState('');

  const handleBlockUser = () => {
    if (newUser.trim() !== '') {
      setBlockedUsers((prevUsers) => [...prevUsers, newUser.trim()]);
      setNewUser('');
    }
  };

  const handleBlockWord = () => {
    if (newWord.trim() !== '') {
      setBlockedWords((prevWords) => [...prevWords, newWord.trim()]);
      setNewWord('');
    }
  };

    return (
      <div className="blocked">
        <h1>Blocked users</h1>
        <label>
          <input           
          id="block-user"
          placeholder="Enter a username to block"
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        </label>
        <button onClick={handleBlockUser}>Block</button>
        <h2>Blocked Usernames:</h2>
      <ul>
        {blockedUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <h1>Blocked content</h1>
      <label>
        <input
          id="block-word"
          placeholder="Enter a word to block"
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />
      </label>
      <button onClick={handleBlockWord}>Block</button>
      <h2>Blocked Words:</h2>
      <ul>
        {blockedWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default Blocked;