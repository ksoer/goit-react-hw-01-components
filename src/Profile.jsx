
import st from './profile.module.css'
import PropTypes from 'prop-types'

function Profile({name, tag, location, avatar, statsFollowers, statsViews, statsLikes}) {
  return (
    <div class={st.profile}>
      <div class={st.description}>
        <img
          src={avatar}
          alt={name}
          class={st.avatar}
        />
        <p class={st.name}>{name}</p>
        <p class={st.tag}>@{tag}</p>
          <p class={st.location}>{location}</p>
      </div>

    <ul class={st.stats}>
      <li class={st.list}>
        <span class={st.label}>Followers</span>
        <span class={st.quantity}>{statsFollowers}</span>
      </li>
      <li class={st.list}>
        <span class={st.label}>Views</span>
        <span class={st.quantity}>{statsViews}</span>
      </li>
      <li class={st.list}>
        <span class={st.label}>Likes</span>
        <span class={st.quantity}>{statsLikes}</span>
      </li>
    </ul>
</div>
  );

 
}
    Profile.propTypes = {
      name: PropTypes.string,
      tag: PropTypes.string,
      location: PropTypes.string,
      avatar: PropTypes.string,
      statsFollowers: PropTypes.number,
      statsViews: PropTypes.number,
      statsLikes: PropTypes.number,
    }
  

export default Profile;
