import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import axios from "axios";
const URI = "https://genkisalud.azurewebsites.net";

const initialState = {
  user: {},
  equipos: [],
  fallas: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SetUser":
      return {
        ...state,
        user: action.user,
      };
    // case "UpdatePatient":
    //   return {
    //     ...state,
    //     profiles: state.profiles.map((profile) => {
    //       if (profile.id == action.patient.id) return action.patient;
    //       return profile;
    //     }),
    //   };
    // case "AddPatient":
    //   return {
    //     ...state,
    //     profiles: [...state.profiles, action.patient],
    //   };
    case "SetEquipos":
      return {
        ...state,
        equipos: action.equipos,
      };
    case "SetFallas":
      return {
        ...state,
        fallas: action.fallas,
      };
  }

  return state;
};

// const fetchSpecialties = () => {
//     return function(dispatch) {
//       axios.get(URI + '/api/Specialty/all')
//       .then(response => {
//           dispatch({ type: "SetSpecialties", specialties:response.body })
//       })
//     }
// }

// const store = createStore(reducer,applyMiddleware(thunkMiddleware));
// store.dispatch(fetchSpecialties()) ;

export { initialState, reducer };
