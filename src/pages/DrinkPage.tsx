import * as React from "react";
import { Helmet } from "react-helmet";
import { useAsyncEffect } from "use-async-effect";
import { StyleSheet, css } from "aphrodite/no-important";
import { withRoute, InjectedRoute } from "react-router5";
import { getJson } from "../utils/network";
import Drink, { IDrink } from "../components/Drink";
import Loader, { wrapper } from "../components/Loader";
import DrinksList from "../components/DrinksList";

const styles = StyleSheet.create({
  loaderWrapper: wrapper
});

const useDrinkId = async (drinkId: string): Promise<IDrink | null> => {
  if (drinkId) {
    try {
      let value = await getJson(
        `select+*+from+all_drinks+where+idDrink%3D${drinkId}`
      );
      return value.rows[0];
    } catch (e) {
      return null;
    }
  }
};

const DrinkPage: React.FunctionComponent<InjectedRoute> = props => {
  const [result, setResult] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);

  useAsyncEffect(
    async () => {
      setLoading(true);
      const drinkId = props.route.path.match(/[0-9]+/);
      const drink = await useDrinkId(drinkId);
      setResult(drink);
      setLoading(false);
    },
    () => {},
    []
  );

  if (isLoading) {
    return (
      <div className={css(styles.loaderWrapper)}>
        <Loader />
      </div>
    );
  }
  if (!result) {
    return <p>Unable to find drink</p>;
  }
  return (
    <div>
      <Helmet>
        <title>Drinks | {result.strDrink}</title>
        <meta name="description" content={result.strDrink} />
      </Helmet>
      <Drink data={result} />
    </div>
  );
};

export default withRoute(DrinkPage);
