import { View, StyleSheet, Image, Text } from "react-native";
import Margin from "./Margin";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
`;

const ImageContainer = styled.Image`
  width: ${(props) => (props.isMe ? 50 : 30)}px;
  // 사용법  <ImageContainer isMe={true} />
`;

export default (props) => {
  return (
    <Container>
      <Image source={{ uri: props.uri }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{props.name}</Text>
        <Margin height={6} />
        <Text style={styles.introduction}>{props.introduction}</Text>
      </View>
    </Container>
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
