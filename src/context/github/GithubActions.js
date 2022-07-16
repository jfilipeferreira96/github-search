const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Get initial users (testing purposes)
export const searchUsers = async () => {
  const response = await fetch(`${GITHUB_URL}/users`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();

  return data;
};

// Get a single User plus it's repositories
export const getUserAndRepos = async (username) => {
  const urls = [
    `${GITHUB_URL}/users/${username}`,
    `${GITHUB_URL}/users/${username}/repos`,
  ];

  const options = {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  };

  const [user, repos] = await Promise.all(
    urls.map((url) => fetch(url, options).then((resp) => resp.json()))
  );

  return { user, repos };
};
