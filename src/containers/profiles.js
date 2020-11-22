import React from 'react';
import Header from '../components/header';
import Profiles from '../components/profiles';
import logo from '../logo.svg';
function ProfileSelectContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to="/" src={logo} alte="Netflix" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>who's watching now !</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture
              src={user.photoURL}
              onClick={() => {setProfile({displayName:user.displayName, photoURL:user.photoURL})}}
              alt="profile"
            />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}

export default ProfileSelectContainer;
