// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    // Throw a meaningful error
    throw new Error(
      error.response?.data?.message || "Error fetching GitHub user"
    );
  }
}
