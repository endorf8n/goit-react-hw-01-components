import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { StyledFriendList } from './friendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(friend => (
        <FriendListItem {...friend} key={friend.id} />
      ))}
    </StyledFriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
