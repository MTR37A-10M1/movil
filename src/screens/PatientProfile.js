import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Picker,
  TouchableOpacity,
} from "react-native";
import Button from "react-native-button";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import ajax from "../services/Routes";

const PatientProfile = (props) => {
  let [fontsLoaded] = useFonts({
    "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
  });
  const [nombres, Nombres] = useState();
  const [apellidos, Apellidos] = useState();
  const [dni, Dni] = useState();
  const [codigo, Codigo] = useState();
  const [idCargo, IdCargo] = useState(1);
  const [correo, Correo] = useState();
  const [password, Passowrd] = useState();

  useEffect(() => {
    // console.log("Profile Patient 1");
  }, []);

  const createUser = async () => {
    if (
      !dni ||
      !nombres ||
      !apellidos ||
      !codigo ||
      !idCargo ||
      !correo ||
      !password
    )
      alert("completar datos");
    else {
      let response = await ajax.addUser(
        nombres,
        apellidos,
        dni,
        codigo,
        idCargo,
        correo,
        password
      );
      alert(response.message);
      if (response.status)
        props.navigation.navigate("Main", {
          user: response.body,
        });
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView style={{ backgroundColor: "#F6F7FA" }}>
        <View style={styles.Login}>
          <Image
            style={{ width: 181, height: 123 }}
            source={require("../../assets/LogoVertical.png")}
          />
          <Text
            style={{
              fontSize: 20,
              marginTop: 10,
              marginBottom: 30,
              color: "#414968",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Completar Perfil
          </Text>
        </View>

        <TextInput
          style={styles.Input}
          placeholder="Correo"
          onChangeText={(correo) => Correo(correo)}
          value={correo}
        />

        <TextInput
          style={styles.Input}
          placeholder="Nombres"
          onChangeText={(nombres) => Nombres(nombres)}
          value={nombres}
        />

        <TextInput
          style={styles.Input}
          placeholder="Apellidos"
          onChangeText={(apellidos) => Apellidos(apellidos)}
          value={apellidos}
        />

        <TextInput
          style={styles.Input}
          placeholder="DNI"
          onChangeText={(dni) => Dni(dni)}
          value={dni}
          keyboardType={"numeric"}
        />

        <TextInput
          style={styles.Input}
          placeholder="Codigo"
          onChangeText={(codigo) => Codigo(codigo)}
          value={codigo}
          keyboardType={"numeric"}
        />

        <Picker
          style={styles.Input}
          selectedValue={idCargo}
          onValueChange={(idCargo) => IdCargo(idCargo)}
        >
          <Picker.Item label="Cargo1" value="1" />
          <Picker.Item label="Cargo2" value="2" />
        </Picker>

        <TextInput
          style={styles.Input}
          placeholder="Contraseña"
          onChangeText={(password) => Passowrd(password)}
          value={password}
          secureTextEntry={true}
        />

        <View style={styles.Footer}>
          <Button style={styles.Button} onPress={createUser}>
            Continuar
          </Button>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  Login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
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
  Header: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  InputRow: {
    alignItems: "center",
    width: 360,
  },
});

export default PatientProfile;
