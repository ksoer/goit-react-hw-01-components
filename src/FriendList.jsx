import PropTypes from 'prop-types'
import st from './friendList.module.css'

function Friends({friends}){
    return(
    <ul class={st.friend_list}>
        {friends.map(item=>(
            <li class={st.item} key = {item.id}>
                 <span
                    class={
                        item.isOnline ? st.statusOnline : st.statusOffline
                    }
                ></span>
                <img class={st.avatar} src={item.avatar} alt={item.name} width="48" />
                <p class={st.name}> {item.name}</p>
            </li>
        ))}

    </ul>)
}

    Friends.propTypes = {
        friends: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
          }),
        ),
}

export default Friends