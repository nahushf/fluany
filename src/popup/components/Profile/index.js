import React from 'react'
import { connect } from 'react-redux'
import { toggleActiveProfile } from 'actions/flags'

const ProfileContainer = () => (
    <div className="profile-menu">
        <div className="profile-menu__hello">
            <h4>Hello, Fulano</h4>
            <p>What do you want to do?</p>
        </div>
        <a href="#" className="profile-menu__item">
            <svg className="bug-icon" >
                <use xlinkHref="#icon-bug"/>
            </svg>
            Report a bug
        </a>
        <a href="#" className="profile-menu__item">
            <svg className="logout-icon" >
                <use xlinkHref="#icon-logout"/>
            </svg>
            Logout
        </a>
    </div>
)

const handleClick = () => {
    console.log('clicked')
 chrome.tabs.create({'url': chrome.extension.getURL('../../../login/index.html')}, function(tab) {
     console.log('hahaah')
  });
}

const Profile = ({
  onToggleActiveProfile,
  profileToggle
}) => (
  <div className="profile" onClick={handleClick}>
    <img className="profile-image" src="http://via.placeholder.com/50x50"></img>
    { profileToggle && <ProfileContainer /> }
  </div>
)

const mapStateToProps = (
    state
) => {
  return {
    profileToggle: state.flags.profileToggle,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleActiveProfile: (...props) => dispatch(toggleActiveProfile(...props))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
