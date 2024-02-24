import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css['friend-item']}>
      <img src={avatar} alt={`Avatar of ${name}`} width="48" />
      <p className={css['friend-name']}>{name}</p>
      <p className={isOnline ? css['friend-status-online'] : css['friend-status-offline']}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;