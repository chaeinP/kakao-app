import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 10, bottom: 10 }} // 디자인은 건드리지 않고 터치 범위 확장
      style={{ paddingHorizontal: 6 }}
    >
      <Ionicons name={props.name} size={24} color="black" />
    </TouchableOpacity>
  );
};

export default () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구</Text>

      <View style={styles.iconList}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="md-musical-notes-outline" />
        <IconButton name="ios-settings-outline" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  iconList: {
    flexDirection: "row",
  },
});
