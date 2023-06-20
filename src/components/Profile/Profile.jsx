import PropTypes from 'prop-types';
import {
  Location,
  Name,
  ProfileContainer,
  Tag,
  Avatar,
  UserDescr,
  List,
  Label,
  Quantity,
  ListItem,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <UserDescr>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </UserDescr>

      <List>
        <ListItem>
          <Label>Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </ListItem>
      </List>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
