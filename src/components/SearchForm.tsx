import * as React from "react";
import { withRoute } from "react-router5";
import { Router } from "router5";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  form: {
    textAlign: "center"
  },
  input: {
    width: "80%",
    borderRadius: "30px",
    border: "none",
    padding: "10px",
    ":focus": {
      outline: "none"
    },
    fontSize: "14px"
  }
});

interface SearchFormProps {
  router: Router;
}

interface SearchFormState {
  search: string;
}

class SearchForm extends React.Component<SearchFormProps, SearchFormState> {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.search === "") return;
    this.props.router.navigate("search", {
      name: this.state.search
    });
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ search: e.currentTarget.value });
  };

  render() {
    return (
      <form className={css(styles.form)} onSubmit={this.handleSubmit}>
        <input
          aria-label="Search by cocktail name"
          className={css(styles.input)}
          type="search"
          placeholder="Enter cocktail name e.g. Bloody Mary"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default withRoute(SearchForm);
