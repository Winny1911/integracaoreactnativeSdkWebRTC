import React from "react";
import { Alert, StyleSheet, View, Platform } from "react-native";
import { compose } from "recompose";
import { Container, Text, Button } from "./../ui";
import CiaModule from "./../modules/cia";

const Telemedicine = () => {
  const handleTelemedine = (
    name,
    gender,
    birthday,
    email,
    docId,
    phoneNumber,
    phoneState,
    phoneCountry
  ) => {
    CiaModule.getConnection(
      name,
      gender,
      birthday,
      email,
      docId,
      phoneNumber,
      phoneState,
      phoneCountry
    );
  };
  const handleStarCall = (roomID) => {
    CiaModule.startCall(roomID);
  };
  return (
    <Container>
      <Text preset="title">Cia consulta</Text>
      <View style={style.titleWrapper}>
        <Text>Teste para utilizar o SDK da cia da consulta</Text>
      </View>
      <Button
        title="Solicitar acesso"
        onPress={() =>
          handleTelemedine(
            "Kelvin arnold",
            "M",
            "10/01/1990",
            "kelvin.flores@deivres.com.br",
            "238.193.548-75",
            "940665445",
            "11",
            "55"
          )
        }
      />
      <View style={style.separator} />
      <Button
        title="Iniciar chamada"
        onPress={() => handleStarCall("72bddb4987eda1b075598377af33fb62")}
      />
      <View style={style.separator} />
    </Container>
  );
};

const enchance = compose();

const style = StyleSheet.create({
  titleWrapper: {
    width: "80%",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  separator: {
    marginBottom: 20,
  },
});

export default enchance(Telemedicine);
