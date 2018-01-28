import * as React from "react";
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
      const data = async () => {
        let value = await getJson(
          `select+*+from+all_drinks+where+idDrink%3D${drinkId}`
        );
        this.setState({ result: value.rows[0], isLoading: false });
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
    if (!this.state.result) {
      return <p>Unable to find drink</p>;
    }
    return <Drink data={this.state.result} />;
  }
}

export default withRoute(DrinkPage);
