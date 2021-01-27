/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import { StyleSheet, StatusBar } from "react-native";

import { Container } from "./ui";

import AppNavigation from "./navigation";

const App = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <AppNavigation />
    </Container>
  );
};

export default App;
