import PropTypes from 'prop-types'
import st from './friendList.module.css'

function FriendListItem({friends}){
    return(
    <ul className={st.friend_list}>
        {friends.map(item=>(
            <li className={st.item} key = {item.id}>
                 <span
                    className={
                        item.isOnline ? st.statusOnline : st.statusOffline
                    }
                ></span>
                <img className={st.avatar} src={item.avatar} alt={item.name} width="48" />
                <p className={st.name}> {item.name}</p>
            </li>
        ))}

    </ul>)
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })),
    }

export default FriendListItem