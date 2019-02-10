import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Text
} from "react-native";
import { DrawerItems } from "react-navigation";
import colors from "../colors";
import Logo from "../../assets/logo.png";
import strings from "../strings";

export default class DrawerComponent extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.primaryBlack }}>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: "always", horizontal: "never" }}
        >
          <Image style={styles.logo} source={Logo} />
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 20,
              textAlign: "center"
            }}
          >
            {strings.section}
          </Text>
          <DrawerItems
            {...this.props}
            activeTintColor={colors.primaryWhite}
            activeBackgroundColor={colors.highlightBlack}
            inactiveTintColor={colors.secondaryGrey}
            itemStyle={styles.itemStyle}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 30
  },
  itemStyle: {
    borderLeftWidth: 3,
    borderLeftColor: colors.primaryTeal
  }
});
