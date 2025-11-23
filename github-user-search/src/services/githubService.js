export async function getGithubUser(username) {
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "User not found");
  }

  return response.json();
}
