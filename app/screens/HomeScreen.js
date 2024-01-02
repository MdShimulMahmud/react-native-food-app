import Constants from "expo-constants";
import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  view: { paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight },
});
