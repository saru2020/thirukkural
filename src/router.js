import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DrawerComponent from "./components/DrawerComponent";
import HomeScreen from "./screens/HomeScreen";
import FriendsScreen from "./screens/FriendsScreen";
import colors from "./colors";

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Friends: { screen: FriendsScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: colors.tintColor
        },
        headerTitleStyle: {
          textAlign: "center",
          flex: 0.8
        },
        headerLeft: (
          <MaterialIcons
            style={{ marginLeft: 10, padding: 10 }}
            // color={colors.tintColor}
            onPress={() => navigation.openDrawer()}
            name="menu"
            size={24}
          />
        )
      };
    }
  }
);

const DrawerStack = createDrawerNavigator(
  {
    // Home: { screen: HomeScreen },
    // Friends: { screen: FriendsScreen }
    Home: RootStack
  },

  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: colors.tintColor
    },
    unmountInactiveRoutes: true,
    contentComponent: DrawerComponent,
    defaultNavigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons
          name="move-to-inbox"
          size={24}
          style={{ color: tintColor }}
        />
      )
    }
  }
);

export default DrawerStack;
