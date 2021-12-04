import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { Button } from 'semantic-ui-react';

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function Logout() {
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully ✌');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <Button onClick={signOut} className="button">
      <i className="google icon"></i>
      <span className="buttonText">Sign out</span>
    </Button>
  );
}

export default Logout;