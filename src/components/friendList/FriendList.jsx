import PropTypes from 'prop-types'
import st from './friendList.module.css'
import FriendListItem from '../friendListItem/FriendListItem';


function FriendList({friends}){
    return(
        <ul className={st.friend_list}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                < FriendListItem
                 key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
          /> 
            ))}
    </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })),
    }

export default FriendList