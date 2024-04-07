import PropTypes from 'prop-types'
import css from './Profile.module.css'

export const Profile = (props) => {

    return (
        <>
            <div className={css.profile}>
                <div className={css.description}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                        alt="User avatar"
                        className={css.avatar}
                    />
                    <p className={css.name}>{props.username}</p>
                    <p className={css.tag}>@{props.tag}</p>
                    <p className={css.location}>{props.location}</p>
                </div>
                <ul className={css.stats}>
                    <li>
                        <span className={css.label}>Followers: </span>
                        <span className={css.quantity}>{props.stats.followers}</span>
                    </li>
                    <li>
                        <span className={css.label}>Views: </span>
                        <span className={css.quantity}>{props.stats.views}</span>
                    </li>
                    <li>
                        <span className={css.label}>Likes: </span>
                        <span className={css.quantity}>{props.stats.likes}</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};