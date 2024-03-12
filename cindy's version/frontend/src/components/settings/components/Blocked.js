
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

  const handleUnblockUser = (index) => {
    const updatedUsers = [...blockedUsers];
    updatedUsers.splice(index, 1);
    setBlockedUsers(updatedUsers);
  };

  const handleUnblockWord = (index) => {
    const updatedWords = [...blockedWords];
    updatedWords.splice(index, 1);
    setBlockedWords(updatedWords);
  };


    return (
      <div className="blocked">
        <div className="block-users"> 
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
        </style>
        <h1>Blocked Users</h1>
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

        <h3>Usernames you have Blocked:</h3>
        <ul className="all-users">
          {blockedUsers.map((user, index) => (
            <li key={index}>
              {user}{' '}
              <button onClick={() => handleUnblockUser(index)}>Unblock</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="block-words">
        <h1>Blocked Content</h1>
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
        <h3>Words you have blocked:</h3>
        <ul className="all-words">
          {blockedWords.map((word, index) => (
            <li key={index}>
              {word}{' '}
              <button onClick={() => handleUnblockWord(index)}>Unblock</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default Blocked;