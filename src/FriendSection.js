import { TouchableOpacity, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>친구 {props.friendProfileLen}</Text>
      <TouchableOpacity onPress={props.onPressArrow} activeOpacity={1}>
        <MaterialIcons
          name={props.onPress ? "keyboard-arrow-down" : "keyboard-arrow-up"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};
