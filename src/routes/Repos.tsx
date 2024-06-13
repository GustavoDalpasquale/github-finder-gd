import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserReposProps } from '../types/userRepos';
import { useUserRepos } from '../hooks/useUserRepos';
import Error from '../components/Error';
import UserRepos from '../components/UserRepos';

const Repos = () => {
  const { userLogin } = useParams<string>();
  const [userReposData, setUserReposData] = useState<UserReposProps[]>([]);
  const [error, setError] = useState(false);

  const loadUserRepos = async (userName: string) => {
    setError(false);
    setUserReposData([]);

    const useUserReposHook = useUserRepos();

    const userReposDataApiReturned: any =
      await useUserReposHook.getUserReposData(userName);

    userReposDataApiReturned.forEach((repo: any) => {
      const {
        created_at,
        description,
        homepage,
        html_url,
        id,
        language,
        name,
        updated_at,
      } = repo;
      const newUserReposData: UserReposProps = {
        created_at,
        description,
        homepage,
        html_url,
        id,
        language,
        name,
        updated_at,
      };
      setUserReposData((userReposData) => [...userReposData, newUserReposData]);
    });
  };

  useEffect(() => {
    if (userLogin) loadUserRepos(userLogin);
    else setError(true);
  }, [userLogin]);

  return (
    <div>
      {userReposData && (
        <div>
          <h1>
            {userLogin?.toUpperCase()} possui {userReposData.length} projetos!
          </h1>
          {userReposData.map((repo) => (
            <UserRepos key={repo.id} userReposDataShow={repo} />
          ))}
        </div>
      )}
      {error && <Error />}
    </div>
  );
};

export default Repos;
