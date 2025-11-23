import { useState } from "react";
import { getGithubUser } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await getGithubUser(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter GitHub username"
        className="border p-2 w-full mb-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Search
      </button>

      {loading && <p className="mt-3">Loading...</p>}
      {error && <p className="mt-3 text-red-500">{error}</p>}

      {userData && (
        <div className="mt-4 border p-4 rounded">
          <img src={userData.avatar_url} className="w-20 rounded-full" />
          <h2 className="text-xl font-bold mt-2">{userData.login}</h2>
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers}</p>
          <a
            href={userData.html_url}
            target="_blank"
            className="text-blue-600 underline"
          >
            Visit Profile
          </a>
        </div>
      )}
    </div>
  );
}
