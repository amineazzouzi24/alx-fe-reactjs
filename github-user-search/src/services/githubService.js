// src/services/githubService.js
import axios from 'axios';

// دالة البحث الأساسي عن مستخدم واحد
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// دالة البحث المتقدم عن مستخدمين متعددين
export const fetchUsersAdvanced = async ({ username, location, minRepos }) => {
  let query = '';
  if (username) query += username;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // مصفوفة المستخدمين
  } catch (error) {
    throw error;
  }
};
