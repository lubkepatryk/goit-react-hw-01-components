import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendListItem({ friend }) {
    const statusClass = friend.isOnline ? css.online : css.offline;
  
    return (
      <li className={css.friendItem}>
        <span className={`${css.status} ${statusClass}`}></span>
        <img
          className={css.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    );
  }

  FriendListItem.propTypes = {
    friend: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  };