import * as React from "react";
import { getJson } from "../utils/network";
import CocktailsList from "../components/CocktailsList";

interface SearchState {
  results: Array<Object> | null;
}

export default class Search extends React.Component<{}, SearchState> {
  constructor(props) {
    super(props);
    this.state = {
      results: null
    };
  }
  componentDidMount() {
    const searchQuery = window.location.search.match(/name=(.+)/);
    if (searchQuery && searchQuery[1]) {
      const query = encodeURIComponent(searchQuery[1].replace("%20", " "));
      const data = async () => {
        let value = await getJson(
          `select+*+from+all_drinks+where+strDrink+LIKE+%27%25${query}%25%27`
        );
        this.setState({ results: value.rows });
      };
      data();
    }
  }
  render() {
    if (this.state.results && this.state.results.length > 0) {
      return <CocktailsList data={this.state.results} />;
    }
    return <p>No results</p>;
  }
}
