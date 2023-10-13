import moment from 'moment/moment';
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { authentication } from '.';

const fbAuthProvider = new FacebookAuthProvider();
const ggAuthProvider = new GoogleAuthProvider();

const getUserData = async (authProvider) => {
  const res = await signInWithPopup(authentication, authProvider);

  const {
    uid,
    accessToken,
    displayName,
    email,
    photoURL,
    metadata: { createdAt },
  } = res.user;

  const dateFormat = moment(Number(createdAt)).format('YYYY-MM-DDTHH:mm:ssZ');

  return {
    id: uid,
    token: accessToken,
    fullName: displayName,
    email: email,
    avatar: photoURL,
    createdAt: dateFormat,
  };
};

export const FacebookAuth = async () => {
  return await getUserData(fbAuthProvider);
};

export const GoogleAuth = async () => {
  return await getUserData(ggAuthProvider);
};
