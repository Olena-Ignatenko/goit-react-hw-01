import PropTypes from 'prop-types';
import FriendListItem from '../components/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <li key={friend.id} className={css['friend-list-item']}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;