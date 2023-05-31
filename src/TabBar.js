import { TouchableOpacity, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";

const bottomSpace = getBottomSpace();

const TabButton = ({
  onPress,
  isSelected,
  activeIconName,
  inActiveIconName,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <Ionicons
        name={isSelected ? activeIconName : inActiveIconName}
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        paddingBottom: bottomSpace,
        borderTopWidth: 0.3,
        borderTopColor: "grey",
      }}
    >
      <TabButton
        onPress={() => props.setSelectedTabIdx(0)}
        isSelected={props.selectedTabIdx === 0}
        activeIconName="person"
        inActiveIconName="person-outline"
      />
      <TabButton
        onPress={() => props.setSelectedTabIdx(1)}
        isSelected={props.selectedTabIdx === 1}
        activeIconName="chatbubble"
        inActiveIconName="chatbubble-outline"
      />
      <TabButton
        onPress={() => props.setSelectedTabIdx(2)}
        isSelected={props.selectedTabIdx === 2}
        activeIconName="pricetag"
        inActiveIconName="pricetag-outline"
      />
      <TabButton
        onPress={() => props.setSelectedTabIdx(3)}
        isSelected={props.selectedTabIdx === 3}
        activeIconName="add-circle"
        inActiveIconName="add-circle-outline"
      />
    </View>
  );
};
