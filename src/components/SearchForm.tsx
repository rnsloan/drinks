import * as React from "react";
import { withRoute } from "react-router5";
import { Router } from "router5";

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
      <form onSubmit={this.handleSubmit}>
        <input
          type="search"
          placeholder="Enter cocktail name e.g. Bloody Mary"
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default withRoute(SearchForm);
