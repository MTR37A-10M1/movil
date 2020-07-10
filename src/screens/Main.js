import React, { useEffect } from "react";
import { Image } from "react-native";
import MainSidebar from "../components/MainSidebar";
import ContactUs from "./ContactUs";
import Fallas from "./Fallas";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { initialState, reducer } from "../components/AsyncActions";
import thunkMiddleware from "redux-thunk";
import ajax from "../services/Routes";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Main = (props) => {
  const { user } = props.route.params;

  const initData = () => {
    return function (dispatch) {
      dispatch({ type: "SetUser", user });
      ajax.equipos().then((response) => {
        dispatch({ type: "SetEquipos", equipos: response.body });
      });
      ajax.fallas().then((response) => {
        dispatch({ type: "SetFallas", fallas: response.body });
      });
      // ajax.Specialties().then((response) => {
      //   dispatch({ type: "SetSpecialties", specialties: response.body });
      // });
      // ajax.Appointments().then((response) => {
      //   dispatch({ type: "SetAppointments", appointments: response.body });
      // });
      // ajax.Profiles(user.id).then((response) => {
      //   dispatch({ type: "SetProfiles", profiles: response.body });
      // });
    };
  };

  const store = createStore(reducer, applyMiddleware(thunkMiddleware));
  store.dispatch(initData());

  useEffect(() => {
    console.log("Main");
    async function getExpoPushToken() {}
    getExpoPushToken();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Drawer.Navigator
          initialRouteName="ContactUs"
          drawerContent={(props) => <MainSidebar {...props} />}
        >
          <Drawer.Screen
            name="ContactUs"
            component={ContactUs}
            options={{
              title: "Reportar Falla",
              tabBarIcon: () => (
                <Image
                  source={require("../../assets/icons/home.png")}
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Fallas"
            component={Fallas}
            options={{
              title: "Fallas",
              tabBarIcon: () => (
                <Image
                  source={require("../../assets/icons/home.png")}
                  style={{ width: 24, height: 24 }}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Main;
