export async function getGithubUser(username) {
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    throw error;
  }
}
