import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./src/Header.js";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
