export function useUser() {
  async function getUserData<T = unknown>(userName: string): Promise<T> {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    return data;
  }

  return {
    getUserData,
  };
}
