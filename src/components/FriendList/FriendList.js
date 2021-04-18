import PropTypes from "prop-types";
import imageUser from '../../images/user.svg'
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <ul className= {css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                console.log(isOnline);
                const green = `rgb(0, 128, 0)`;
                const red = `rgb(255, 0, 0)`;
                return (
                    <li key={id} className={css.item}>
                        <span className= {css.status} style={isOnline ? { backgroundColor: green} : { backgroundColor: red }}></span>
                        <img className={css.avatar} src={avatar} alt={name} width="48" />
                        <p class="name">{name}</p>
                    </li>
                )
            })}
        </ul>
    )
};

FriendList.defaultProps = {
    avatar: imageUser,
};

FriendList.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default FriendList;


