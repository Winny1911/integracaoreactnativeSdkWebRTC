import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { Home } from "./../screen";

const AppNavigator = createSwitchNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);
