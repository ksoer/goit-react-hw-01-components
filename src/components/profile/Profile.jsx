
import st from './profile.module.css'
import PropTypes from 'prop-types'

function Profile({name, tag, location, avatar, stats}) {
  return (
    <div className={st.profile}>
      <div className={st.description}>
        <img
          src={avatar}
          alt={name}
          className={st.avatar}
        />
        <p className={st.name}>{name}</p>
        <p className={st.tag}>@{tag}</p>
          <p className={st.location}>{location}</p>
      </div>

    <ul className={st.stats}>
      <li class={st.list}>
        <span className={st.label}>Followers</span>
        <span className={st.quantity}>{stats.followers}</span>
      </li>
      <li className={st.list}>
        <span className={st.label}>Views</span>
        <span className={st.quantity}>{stats.views}</span>
      </li>
      <li className={st.list}>
        <span className={st.label}>Likes</span>
        <span className={st.quantity}>{stats.likes}</span>
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
