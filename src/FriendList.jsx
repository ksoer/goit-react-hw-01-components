import PropTypes from 'prop-types'

function Friends({friends}){
    return(
    <ul class="friend-list">
        {friends.map(item=>(
            <li class="item" key = {item.id}>
                 <span class="status">{item.isOnline}</span>
                <img class="avatar" src={item.avatar} alt={item.name} width="48" />
                <p class="name">{item.name}</p>
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