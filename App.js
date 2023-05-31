import { FlatList, StyleSheet, View } from "react-native";
import Header from "./src/Header.js";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Profile from "./src/Profile.js";
import { myProfile, friendProfiles } from "./src/data.js";
import Margin from "./src/Margin.js";
import Division from "./src/Division.js";
import FriendSection from "./src/FriendSection.js";
import { useState } from "react";
import TabBar from "./src/TabBar.js";

export default function App() {
  const [onPress, setOnPress] = useState(false);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setOnPress(!onPress);
  };

  const listHeaderComponent = () => {
    return (
      <View style={{ backgroundColor: "white" }}>
        <Header />
        <Margin height={10} />
        <Profile
          isMe={true}
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
      </View>
    );
  };

  const listFooterComponent = () => null;

  const itemSeperator = () => {
    return <Margin height={10} />;
  };

  const renderItem = ({ uri, name, introduction }) => {
    return (
      <View>
        <Profile
          isMe={false}
          uri={uri}
          name={name}
          introduction={introduction}
        />
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "right", "left"]} style={styles.container}>
        <FlatList
          keyExtractor={(_, idx) => idx}
          contentContainerStyle={{ padding: 15 }}
          data={onPress ? friendProfiles : null}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={listHeaderComponent}
          ListFooterComponent={listFooterComponent}
          ItemSeparatorComponent={itemSeperator}
          renderItem={({ item }) => renderItem(item)}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
