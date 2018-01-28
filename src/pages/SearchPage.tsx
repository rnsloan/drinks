import * as React from "react";
import { StyleSheet, css } from "aphrodite/no-important";
import { getJson } from "../utils/network";
import CocktailsList from "../components/CocktailsList";
import { CocktailInterface } from "../components/Cocktail";
import Loader, { wrapper } from "../components/Loader";

const styles = StyleSheet.create({
  loaderWrapper: wrapper
});

interface SearchState {
  results: Array<CocktailInterface> | null;
  isLoading: Boolean;
}

export default class Search extends React.Component<{}, SearchState> {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      isLoading: false
    };
  }
  componentDidMount() {
    const searchQuery = window.location.search.match(/name=(.+)/);
    if (searchQuery && searchQuery[1]) {
      this.setState({ isLoading: true });
      const query = encodeURIComponent(searchQuery[1].replace("%20", " "));
      const data = async () => {
        let value = await getJson(
          `select+*+from+all_drinks+where+strDrink+LIKE+%27%25${query}%25%27`
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
      return <CocktailsList data={this.state.results} />;
    }
    return <p>No results</p>;
  }
}
