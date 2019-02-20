import * as React from "react";
import { Helmet } from "react-helmet";
import { StyleSheet, css } from "aphrodite/no-important";
import { useAsyncEffect } from "use-async-effect";
import * as queryString from "query-string";
import { getJson } from "../utils/network";
import DrinksList from "../components/DrinksList";
import { IDrink } from "../components/Drink";
import Loader, { wrapper } from "../components/Loader";

const styles = StyleSheet.create({
  loaderWrapper: { ...wrapper },
  query: {
    fontStyle: "italic"
  }
});

const Search: React.FunctionComponent<{}> = props => {
  const [isLoading, setLoading] = React.useState(true);
  const [results, setResults] = React.useState<IDrink[] | null>(null);
  const [query, setQuery] = React.useState("");

  const searchQuery = queryString.parse(window.location.search);
  useAsyncEffect(
    async () => {
      let q: string;
      let url = "";
      if (searchQuery.name) {
        q = searchQuery.name.replace("%20", " ");
        url = `select+*+from+all_drinks+where+strDrink+LIKE+%27%25${encodeURIComponent(
          q
        )}%25%27`;
      } else {
        q = searchQuery.category;
        url = `select+*+from+all_drinks+where+strCategory%3D%27${q}%27`;
      }
      setQuery(q);
      const value = await getJson(url);
      setResults(value.rows);
      setLoading(false);
    },
    () => {},
    [searchQuery.name, searchQuery.category]
  );

  if (isLoading) {
    return (
      <div className={css(styles.loaderWrapper)}>
        <Loader />
      </div>
    );
  }
  if (results && results.length > 0) {
    return (
      <div>
        <Helmet>
          <title>Drinks | Search results for {query}</title>
          <meta name="description" content={`Search results for ${query}`} />
        </Helmet>
        {query && (
          <h2>
            Results for{" "}
            <small className={css(styles.query)}>&lsquo;{query}&rsquo;</small>
          </h2>
        )}
        <DrinksList data={results} />
      </div>
    );
  }
  return <p>No results</p>;
};

export default Search;
