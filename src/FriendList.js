import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import Margin from "./Margin";

export default (props) => {
  return (
    props.onPress && (
      <ScrollView showsVerticalScrollIndicator={false}>
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
