import friends from './friends.json';
import PropTypes from 'prop-types';
import './friendList.css';

export const FriendList = () => {
  return (
    <>
      <ul className="friend-list">
        {friends.map((friends, key) => {
          return (
            <li className="friend-item" key={friends.id}>
              <span className="status">{friends.isOnline}</span>
              <img
                className="avatar"
                src={friends.avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{friends.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
// FriendListItem.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   isOnline: PropTypes.bool,
// };
