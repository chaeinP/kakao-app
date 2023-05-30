import { View, StyleSheet, Image, Text } from "react-native";
import Margin from "./Margin";

export default (props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.uri }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{props.name}</Text>
        <Margin height={6} />
        <Text style={styles.introduction}>{props.introduction}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  content: {
    justifyContent: "center",
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  introduction: {
    color: "grey",
    fontSize: 12,
  },
});
