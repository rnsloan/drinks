import * as React from "react";
import { Helmet } from "react-helmet";
import { StyleSheet, css } from "aphrodite/no-important";
import * as queryString from "query-string";
import { getJson } from "../utils/network";
import DrinksList from "../components/DrinksList";
import { DrinkInterface } from "../components/Drink";
import Loader, { wrapper } from "../components/Loader";

const styles = StyleSheet.create({
  loaderWrapper: { ...wrapper },
  query: {
    fontStyle: "italic"
  }
});

interface SearchState {
  results: Array<DrinkInterface> | null;
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
    const searchQuery = queryString.parse(window.location.search);
    if (searchQuery.name || searchQuery.category) {
      if (searchQuery.name) {
        const query = searchQuery.name.replace("%20", " ");
        const url = `select+*+from+all_drinks+where+strDrink+LIKE+%27%25${encodeURIComponent(
          query
        )}%25%27`;
        this.setState({ isLoading: true, query });
      }

      if (searchQuery.category) {
        const query = searchQuery.category;
        const url = `select+*+from+all_drinks+where+strCategory%3D%27${query}%27`;
        this.setState({ isLoading: true });
      }

      const data = async () => {
        let value = await getJson(url);
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
          <Helmet>
            <title>Drinks | Search results for {this.state.query}</title>
            <meta
              name="description"
              content={`Search results for ${this.state.query}`}
            />
          </Helmet>
          {this.state.query && (
            <h2>
              Results for{" "}
              <small className={css(styles.query)}>
                &lsquo;{this.state.query}&rsquo;
              </small>
            </h2>
          )}
          <DrinksList data={this.state.results} />
        </div>
      );
    }
    return <p>No results</p>;
  }
}
