export function useUserRepos() {
  async function getUserReposData<T = unknown>(userName: string): Promise<T> {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`);
    const data = await res.json();
    return data;
  }

  return {
    getUserReposData,
  };
}
