import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [query, setQuery] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); // <-- error state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // reset error
        setUser(null);

        try {
            const data = await fetchUserData(query);
            setUser(data);
        } catch (err) {
            setError("Looks like we can't find the user"); // <-- set error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search GitHub user..."
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p style={{ color: "red" }}>{error}</p>} {/* <-- render error */}

            {user && (
                <div>
                    <img src={user.avatar_url} alt={user.login} width={100} />
                    <h3>{user.login}</h3>
                </div>
            )}
        </div>
    );
};

export default Search;
