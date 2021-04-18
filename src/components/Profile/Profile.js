import PropTypes from "prop-types";
import imageUser from '../../images/user.svg'
import css from './Profile.module.css'

const ProfileItem = ({ name, tag, location, avatar, stats }) => {
    return (
    <div className={css.container}>
      <div className={css.description}>
            <img
            src={avatar}
            alt="Аватар пользователя"
            />
            <div className= {css.userInfo}> 
                <p>Name: {name}</p>
                <p>Tag: {tag}</p>
                <p>Location: {location}</p>
            </div>   
      </div>

      <ul className= {css.stats}>
            <li>
              <span>Followers</span>
              <span>{stats.followers}</span>
            </li>
            <li>
              <span>Views</span>
              <span>{stats.views}</span>
            </li>
            <li>
              <span>Likes</span>
              <span>{stats.likes}</span>
            </li>
      </ul>
    </div> 
    )
}

ProfileItem.defaultProps = {
    avatar: imageUser,
};

ProfileItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default ProfileItem;


