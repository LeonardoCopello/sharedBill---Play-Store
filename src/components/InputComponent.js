import { StyleSheet, Text, TextInput } from "react-native";
import { Globais } from "../../styles/colors";

const InputComponent = ({
  children,
  stateChanged,
  stateSetter,
  keyboardType,
}) => {
  return (
    <>
      <Text style={styles.titleInput}>{children}</Text>
      <TextInput
        keyboardType={keyboardType}
        style={styles.inputContainer}
        value={stateChanged}
        onChangeText={(text) => stateSetter(text)}
      />
    </>
  );
};
export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    paddingLeft: 10,
    height: 40,
    borderRadius: 5,
  },
  titleInput: {
    fontSize: 22,
    color: Globais.fontGreen,
    fontFamily: "roboto-regular",
  },
});
