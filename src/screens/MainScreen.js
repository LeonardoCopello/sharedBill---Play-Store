import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
} from "react-native";
import Title from "../components/Title";
import MainBtn from "../components/MainBtn";
import { Globais } from "../../styles/colors";
import InputComponent from "../components/InputComponent";
export default function MainScreen({ navigation }) {
  const [newPrice, setNewPrice] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [priceAndProductList, setPriceAndProductList] = useState([]);
  const [nrClients, setNrClients] = useState("");
  const [total, setTotal] = useState(0);

  function insertItems() {
    if (newProduct == "" || newPrice == "") {
      alert("Preencha com um Produto e seu Valor");
    } else {
      if (isNaN(newPrice)) {
        alert("Insira um valor válido");
      } else {
        let id = Math.random().toString();
        setPriceAndProductList([
          ...priceAndProductList,
          { id: id, price: newPrice, product: newProduct },
        ]);
        setNewPrice("");
        setNewProduct("");
        Keyboard.dismiss();
      }
    }
  }

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < priceAndProductList.length; i++) {
      let itemNumber = Number(priceAndProductList[i].price);
      total += itemNumber;
    }
    let itemTwoDigits = total.toFixed(2);
    setTotal(itemTwoDigits);
  }, [priceAndProductList]);

  function showList(itemData) {
    return (
      <View style={styles.resultContainerRow}>
        <Text style={styles.textResult}>{itemData.item.product}</Text>
        <Text style={styles.textResult}>
          <Text style={styles.real}>R$</Text>{" "}
          {Number(itemData.item.price).toFixed(2)}
        </Text>
      </View>
    );
  }
  function calculate() {
    if (nrClients == "") {
      alert("Insira o Nr de Clientes da Mesa");
    } else {
      if (total == 0) {
        alert("A conta está zerada");
      } else {
        navigation.navigate("Results", { nrClients: nrClients, bill: total });
      }
    }
  }

  return (
    <View style={styles.rootContainer}>
      <Title />
      <View style={{ width: "100%" }}>
        <InputComponent
          stateChanged={newProduct}
          stateSetter={setNewProduct}
          keyboardType="default"
        >
          Item
        </InputComponent>
      </View>
      <View style={styles.containerRow}>
        <View style={{ flex: 1 }}>
          <InputComponent
            stateChanged={newPrice}
            stateSetter={setNewPrice}
            keyboardType="numeric"
          >
            Valor
          </InputComponent>
        </View>
        <View style={{ marginLeft: 10 }}>
          <MainBtn onPress={insertItems}>Incluir</MainBtn>
        </View>
      </View>
      <View style={styles.containerList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={priceAndProductList}
          keyExtractor={(item) => item.id}
          renderItem={showList}
        />
      </View>
      <View style={styles.resultContainerRow}>
        <Text style={styles.textResult}>Total:</Text>
        <Text style={styles.textResult}>{total}</Text>
      </View>
      <View style={styles.clientsContainerRow}>
        <View style={{ flex: 1 }}>
          <InputComponent
            stateChanged={nrClients}
            stateSetter={setNrClients}
            keyboardType="numeric"
          >
            Qde Pessoas
          </InputComponent>
        </View>
        <View style={{ marginLeft: 10 }}>
          <MainBtn onPress={calculate}>Calcular</MainBtn>
        </View>
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

  containerRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  containerList: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    padding: 10,
    backgroundColor: "lightgray",
    borderWidth: 2,
    borderColor: Globais.fontGreen,
    borderRadius: 5,
  },
  textResult: {
    fontSize: 20,
    color: Globais.fontGreen,
  },
  resultContainerRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  clientsContainerRow: {
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  real: {
    fontSize: 15,
  },
});
