import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Globais } from "../../styles/colors";

export default function MainBtn({ children, onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
        android_ripple={{ color: "#ccc" }}
      >
        <Text style={styles.textBtn}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get("window").width / 2.5,
    backgroundColor: Globais.btnGreen,
    height: 40,
    borderRadius: 5,
    borderColor: "Globais.fontGreen",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "black", // elevation for IOS
    shadowOpacity: 0.25, // elevation for IOS
    shadowOffset: { width: 0, height: 2 }, // elevation for IOS
    shadowRadius: 8, // elevation for IOS
    // overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  textBtn: {
    color: "white",
    fontSize: 20,
    fontFamily: 'roboto-regular',
  },
  pressed: {
    opacity: 0.5,
  },
});
