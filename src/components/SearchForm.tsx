import * as React from "react";
import { withRoute } from "react-router5";
import { Router } from "router5";
import { StyleSheet, css } from "aphrodite/no-important";

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
    "-webkit-appearance": "textfield",
    fontSize: "14px"
  }
});

const SearchForm: React.FunctionComponent<{ router: Router }> = (props) => {
  const [search, setSearch] = React.useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search === "") return;
    props.router.navigate("search", {
      name: search
    });
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <form className={css(styles.form)} onSubmit={handleSubmit}>
      <input
        aria-label="Search by drink name"
        className={css(styles.input)}
        type="search"
        placeholder="e.g. old fashioned"
        onChange={handleChange}
      />
    </form>
  );
}

export default withRoute(SearchForm);
