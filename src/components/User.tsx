import { Link } from 'react-router-dom';
import { UserProps } from '../types/user';
import { MdLocationPin } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import classes from './User.module.css';

const User = ({
  avatar_url,
  bio,
  html_url,
  location,
  login,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <div className={classes.divLogin}>
        <h2>{login}</h2>
        <Link className={classes.loginUrl} to={html_url}>
          Ir para o perfil
        </Link>
      </div>
      {location && (
        <p>
          <MdLocationPin />
          <span className={classes.location}>{location}</span>
        </p>
      )}
      <div className={classes.follow}>
        <div>
          <p>Seguidores</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo</p>
          <p>{following}</p>
        </div>
      </div>
      {bio && <div className={classes.bio}>{bio}</div>}
      <span>-</span>
      <Link className={classes.projects} to={`/repos/${login}`}>
        <BsSearch />
        <span>Últimos projetos</span>
      </Link>
    </div>
  );
};

export default User;
