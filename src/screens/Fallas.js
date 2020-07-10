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
  const { fallas } = props;
  const [idFalla, IdFalla] = useState(1);
  const [descripcion, Descripcion] = useState(fallas[0].descripcion);
  useEffect(() => {
    console.log("Mantenimiento");
  }, []);

  const Reportar = async () => {
    const response = await ajax.updateFalla(
      idFalla,
      descripcion,
      fallas[idFalla - 1].idEquipo,
      2
    );
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
            Mantenimiento
          </Text>
        </Body>
        <Right>
          <Icon
            name="cart"
            onPress={() => props.navigation.navigate("MyOrders")}
          ></Icon>
        </Right>
      </Header>
      <View style={styles.ContactUs}>
        <View style={styles.TitleView}>
          <Text style={styles.Title}>Mantenimiento</Text>
        </View>
        <Text style={styles.Title2}>Elegir Falla</Text>
        <Picker
          mode="dropdown"
          style={styles.Input}
          selectedValue={idFalla}
          onValueChange={(idFalla) => {
            IdFalla(idFalla);
            Descripcion(fallas[idFalla - 1].descripcion);
          }}
        >
          {fallas.map((f, i) => {
            return <Picker.Item label={f.id.toString()} value={f.id} key={i} />;
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
          {fallas.length != 0 && (
            <Image
              style={styles.Image}
              source={{
                uri: fallas[idFalla - 1].equipo.url,
              }}
            />
          )}
        </View>
        <View style={styles.Footer}>
          <Button style={styles.Button} onPress={Reportar}>
            Resolver
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
