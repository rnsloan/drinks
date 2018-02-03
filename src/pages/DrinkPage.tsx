import * as React from "react";
import { Helmet } from "react-helmet";
import { StyleSheet, css } from "aphrodite/no-important";
import { withRoute, InjectedRoute } from "react-router5";
import { getJson } from "../utils/network";
import Drink, { DrinkInterface } from "../components/Drink";
import Loader, { wrapper } from "../components/Loader";

const styles = StyleSheet.create({
  loaderWrapper: wrapper
});

interface SearchState {
  result: DrinkInterface | null;
  isLoading: Boolean;
}

class DrinkPage extends React.Component<InjectedRoute, SearchState> {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      isLoading: false
    };
  }
  componentDidMount() {
    const drinkId = this.props.route.path.match(/[0-9]+/);
    if (drinkId) {
      this.setState({ isLoading: true });
      (async () => {
        try {
          let value = await getJson(
            `select+*+from+all_drinks+where+idDrink%3D${drinkId}`
          );
          this.setState({ result: value.rows[0], isLoading: false });
        } catch (e) {}
      })();
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
    if (!this.state.result) {
      return <p>Unable to find drink</p>;
    }
    return (
      <div>
        <Helmet>
          <title>Drinks | {this.state.result.strDrink}</title>
          <meta name="description" content={this.state.result.strDrink} />
        </Helmet>
        <Drink data={this.state.result} />
      </div>
    );
  }
}

export default withRoute(DrinkPage);
