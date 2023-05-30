import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import Margin from "./Margin";
import { getBottomSpace } from "react-native-iphone-x-helper";
const bottomSpace = getBottomSpace();

export default (props) => {
  return (
    props.onPress && (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottomSpace }}
      >
        {props.data.map(({ uri, name, introduction }) => {
          return (
            <View>
              <Profile uri={uri} name={name} introduction={introduction} />
              <Margin height={10} />
            </View>
          );
        })}
      </ScrollView>
    )
  );
};
