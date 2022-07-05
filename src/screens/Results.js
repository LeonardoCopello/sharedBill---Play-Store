import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import MainBtn from "../components/MainBtn";
import { Globais } from "../../styles/colors";

export default function Results({ route, navigation }) {
  const { bill, nrClients } = route.params;

  function calculate() {
    let totalPerPerson = Number(bill) / Number(nrClients);
    return totalPerPerson.toFixed(2);
  }

  return (
    <View style={styles.rootContainer}>
      <Title />
      <Text style={styles.textTitle}>Total da Conta</Text>
      <Text style={styles.textInfo}>R$ {bill}</Text>
      <Text style={styles.textTitle}>Quantidade de Pessoas</Text>
      <Text style={styles.textInfo}>{nrClients}</Text>
      <Text style={styles.textTitle}>Total por Pessoa</Text>
      <Text style={styles.textInfo}>R$ {calculate()}</Text>
      <View style={styles.btn}>
        <MainBtn
          onPress={() => navigation.navigate('Home')}
        >Nova Conta</MainBtn>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Globais.backScreenGreen,
    alignItems: "center",
    paddingHorizontal: 25,
  },
  textTitle: {
    marginTop: 60,
    fontSize: 30,
    color: Globais.fontGreen,
  },
  textInfo: {
    fontSize: 30,
  },
  btn: {
    width: '100%',
    position: 'absolute',
    alignItems: 'flex-end',
    bottom: 20,
  }
});
