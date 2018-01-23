import * as React from "react";
import { withRoute, InjectedRoute } from "react-router5";
import { getJson } from "../utils/network";
import Cocktail, { CocktailInterface } from "../components/Cocktail";

interface SearchState {
  result: CocktailInterface | null;
  isLoading: Boolean;
}

class CocktailPage extends React.Component<InjectedRoute, SearchState> {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      isLoading: false
    };
  }
  componentDidMount() {
    const cocktailId = this.props.route.path.match(/[0-9]+/);
    if (cocktailId) {
      this.setState({ isLoading: true });
      const data = async () => {
        let value = await getJson(
          `select+*+from+all_drinks+where+idDrink%3D${cocktailId}`
        );
        this.setState({ result: value.rows[0], isLoading: false });
      };
      data();
    }
  }
  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    if (!this.state.result) {
      return <p>Unable to find cocktail</p>;
    }
    return <Cocktail data={this.state.result} />;
  }
}

export default withRoute(CocktailPage);
