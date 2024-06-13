import classes from './UserRepos.module.css';
import { Link } from 'react-router-dom';
import { VscCode } from 'react-icons/vsc';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

const UserRepos = ({ userReposDataShow }: any) => {
  return (
    <section className={classes.userRepos}>
      <div className={classes.container}>
        <div className={classes.name}>
          <h2>{userReposDataShow.name}</h2>
          {userReposDataShow.homepage && (
            <Link to={userReposDataShow.homepage}>
              <TbWorld className={classes.imgHomepage} /> Página
            </Link>
          )}
        </div>

        <div className={classes.infosContainer}>
          {userReposDataShow.description && (
            <p className={classes.description}>
              {userReposDataShow.description}
            </p>
          )}

          {userReposDataShow.created_at && (
            <p>Criado em: {userReposDataShow.created_at}</p>
          )}
          {userReposDataShow.updated_at && (
            <p>Atualizado em: {userReposDataShow.updated_at}</p>
          )}

          {userReposDataShow.language && (
            <div className={classes.language}>
              <VscCode />
              <p>{userReposDataShow.language}</p>
            </div>
          )}
          <Link to={userReposDataShow.html_url}>
            <FaGithub className={classes.img} />
            Projeto
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserRepos;
