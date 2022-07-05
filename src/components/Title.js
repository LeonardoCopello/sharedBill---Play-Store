import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Globais } from "../../styles/colors";

const imageSide = Dimensions.get('window').width / 5;
export default function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Conta Fácil</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/conta_facil.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    color: Globais.fontGreen,
  },
  image: {
    width: imageSide,
    height: imageSide,
  },
});
