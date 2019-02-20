import "firebase/auth";
import "firebase/database";
import * as firebase from "firebase/app";

const getUserStatus = (): Promise<firebase.User | false> => {
  return new Promise(function(resolve, reject) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      }
      return resolve(false);
    });
  });
};

export default getUserStatus;
