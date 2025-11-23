const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const axiosConfig = {
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`
  }
};
