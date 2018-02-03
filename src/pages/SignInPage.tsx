import * as React from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import Helmet from "react-helmet";
import { StyleSheet, css } from "aphrodite/no-important";
import Loader from "../components/Loader";

const styles = StyleSheet.create({
  button: {
    direction: "ltr",
    minHeight: "40px",
    padding: "8px 16px",
    fontSize: "16px"
  }
});

interface SearchFormState {
  user: string;
  loading: boolean;
}

export default class SignInPage extends React.Component<{}, SearchFormState> {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      loading: false
    };
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        this.setState({
          user: firebase.auth().currentUser.displayName
        });
      }
      this.setState({
        loading: false
      });
    });
  }

  signIn(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    const provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  signOut(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();

    this.setState({
      loading: true
    });

    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          user: "",
          loading: false
        });
      })
      .catch(function(error) {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    let result = (
      <div>
        <p>You are not signed in.</p>
        <button className={css(styles.button)} onClick={this.signIn}>
          Sign in via Google Account
        </button>
      </div>
    );
    if (this.state.user) {
      result = (
        <div>
          {this.state.user && (
            <div>
              <h2>User</h2>
              <p>
                Signed in as: <strong>{this.state.user}</strong>
              </p>
              <p>Your favourite drinks are visible on the home page</p>
            </div>
          )}
          <div>
            <button className={css(styles.button)} onClick={this.signOut}>
              Sign out
            </button>
          </div>
        </div>
      );
    }
    if (this.state.loading) {
      result = <Loader />;
    }
    return (
      <div>
        <Helmet>
          <title>Drinks | Sign in / Sign out</title>
          <meta name="description" content="Sign in / Sign out" />
        </Helmet>
        {result}
      </div>
    );
  }
}
