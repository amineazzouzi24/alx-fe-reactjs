// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUsersAdvanced } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData([]);

    try {
      const data = await fetchUsersAdvanced({ username, location, minRepos });
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-24"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {!loading && userData.length === 0 && <p>No users found</p>}

      {userData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userData.map(user => (
            <div key={user.id} className="p-4 border rounded shadow flex flex-col items-center">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-2" />
              <h3 className="font-bold">{user.login}</h3>
              {user.location && <p>Location: {user.location}</p>}
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-1">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
