import * as React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { getJson } from "../utils/network";
import CocktailsList from "../components/CocktailsList";
import { CocktailInterface } from "../components/Cocktail";
import Loader, { wrapper } from "../components/Loader";

const styles = StyleSheet.create({
  loaderWrapper: { wrapper },
  query: {
    fontStyle: "italic"
  }
});

interface SearchState {
  results: Array<CocktailInterface> | null;
  isLoading: Boolean;
  query: String;
}

export default class Search extends React.Component<{}, SearchState> {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      isLoading: false,
      query: ""
    };
  }
  componentDidMount() {
    const searchQuery = window.location.search.match(/name=(.+)/);
    if (searchQuery && searchQuery[1]) {
      const query = searchQuery[1].replace("%20", " ");
      this.setState({ isLoading: true, query });
      const data = async () => {
        let value = await getJson(
          `select+*+from+all_drinks+where+strDrink+LIKE+%27%25${encodeURIComponent(
            query
          )}%25%27`
        );
        this.setState({ results: value.rows, isLoading: false });
      };
      data();
    }
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div className={css(styles.loaderWrapper)}>
          <Loader />
        </div>
      );
    }
    if (this.state.results && this.state.results.length > 0) {
      return (
        <div>
          <h2>
            Results for{" "}
            <small className={css(styles.query)}>
              &lsquo;{this.state.query}&rsquo;
            </small>
          </h2>
          <CocktailsList data={this.state.results} />
        </div>
      );
    }
    return <p>No results</p>;
  }
}
