import React, { Component, useEffect, useState, Fragment } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Picker,
  TextInput,
} from "react-native";

import Button from "react-native-button";
import ajax from "../services/Routes";
import { Header, Body, Right, Icon, Left } from "native-base";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../components/Redux";

const ContactUs = (props) => {
  const { equipos } = props;
  const [idMaquina, IdMaquina] = useState(1);
  const [descripcion, Descripcion] = useState("Escrbir Falla");
  useEffect(() => {
    console.log("Mantenimiento");
  }, []);

  const Reportar = async () => {
    const response = await ajax.addFalla(descripcion, idMaquina, 1);
    const fallas = await ajax.fallas();
    if (fallas.status) props.setFallas(fallas.body);
    alert(response.message);
  };

  const RefreshMaquinas = async () => {
    const response = await ajax.equipos();
    if (response.status) props.setEquipos(response.body);
    alert(response.message);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Left>
          <Icon
            name="menu"
            onPress={() => props.navigation.openDrawer()}
          ></Icon>
        </Left>
        <Body>
          <Text style={{ fontSize: 20, alignSelf: "center" }}>
            Reportar Falla
          </Text>
        </Body>
        <Right>
          <Icon name="cart" onPress={RefreshMaquinas}></Icon>
        </Right>
      </Header>
      <View style={styles.ContactUs}>
        <View style={styles.TitleView}>
          <Text style={styles.Title}>Reportar Falla</Text>
        </View>
        <Text style={styles.Title2}>Elegir maquina</Text>
        <Picker
          mode="dropdown"
          style={styles.Input}
          selectedValue={idMaquina}
          onValueChange={(idMaquina) => IdMaquina(idMaquina)}
        >
          {equipos.map((e, i) => {
            return <Picker.Item label={e.nombre} value={e.id} key={i} />;
          })}
        </Picker>
        <View style={styles.Content}>
          <TextInput
            style={{
              height: 200,
              width: 200,
              borderColor: "gray",
              borderWidth: 1,
            }}
            multiline
            onChangeText={(text) => Descripcion(text)}
            value={descripcion}
          />
          {equipos.length != 0 && (
            <Image
              style={styles.Image}
              source={{
                uri: equipos[idMaquina - 1].url,
              }}
            />
          )}
        </View>
        <View style={styles.Footer}>
          <Button style={styles.Button} onPress={Reportar}>
            Reportar
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ContactUs: {
    flex: 1,
    alignContent: "center",
  },
  Input: {
    height: 50,
    backgroundColor: "white",
    paddingLeft: 25,
    borderRadius: 15,
    fontFamily: "Montserrat-Medium",
    margin: 10,
    marginHorizontal: 25,
  },
  Title: {
    fontSize: 28,
  },
  TitleView: {
    alignItems: "center",
  },
  Title2: {
    paddingTop: 10,
    paddingLeft: 25,
    fontSize: 16,
  },
  Image: {
    width: 140,
    height: 200,
  },
  Content: {
    flexDirection: "row",
    paddingLeft: 25,
  },
  Button: {
    backgroundColor: "#639BEF",
    textAlignVertical: "center",
    color: "white",
    borderRadius: 15,
    height: 50,
    width: 360,
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
  },
  Footer: {
    alignItems: "center",
    paddingTop: 20,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
