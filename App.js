import { StyleSheet } from "react-native";
import Header from "./src/Header.js";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MyProfile from "./src/Profile.js";
import { myProfile, friendProfiles } from "./src/data.js";
import Margin from "./src/Margin.js";
import Division from "./src/Division.js";
import FriendSection from "./src/FriendSection.js";
import { useState } from "react";
import FriendList from "./src/FriendList.js";

export default function App() {
  const [onPress, setOnPress] = useState(false);

  const onPressArrow = () => {
    setOnPress(!onPress);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
        <Header />
        <Margin height={10} />
        <MyProfile
          uri={myProfile.uri}
          name={myProfile.name}
          introduction={myProfile.introduction}
        />
        <Margin height={15} />
        <Division />
        <Margin height={15} />
        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          onPress={onPress}
        />
        <FriendList data={friendProfiles} onPress={onPress} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
