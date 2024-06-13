import { UserProps } from '../types/user';
import { useState } from 'react';
import Search from '../components/Search';
import User from '../components/User';
import Error from '../components/Error';
import { useUser } from '../hooks/useUser';

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    const useUserHook = useUser();
    setError(false);
    setUser(null);

    const userDataReturnApi: any = await useUserHook.getUserData(userName);

    if (userDataReturnApi.status === '404') {
      setError(true);
      return;
    }

    const { avatar_url, bio, followers, following, html_url, location, login } =
      userDataReturnApi;

    const userData: UserProps = {
      avatar_url,
      bio,
      followers,
      following,
      html_url,
      location,
      login,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
