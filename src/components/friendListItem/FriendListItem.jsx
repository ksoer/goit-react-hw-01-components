import PropTypes from 'prop-types'
import st from '../friendList/friendList.module.css'

function FriendListItem({avatar, name, isOnline}){
    return(
            <li className={st.item}>
                 <span
                    className={
                        isOnline ? st.statusOnline : st.statusOffline
                    }
                />
                <img className={st.avatar} src={avatar} alt={name} width="48" />
                <p className={st.name}> {name}</p>
            </li>
        )}


FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })),
};

export default FriendListItem 