function mapStateToProps(state) {
  return {
    user: state.user,
    // profiles: state.profiles,
    // appointments: state.appointments,
    // specialties: state.specialties,
    equipos: state.equipos,
    fallas: state.fallas,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (user) => dispatch({ type: "SetUser", user }),
    setFallas: (fallas) => dispatch({ type: "SetFallas", fallas }),
    setEquipos: (equipos) => dispatch({ type: "SetEquipos", equipos }),
    // updatePatient: (patient) => dispatch({ type: "UpdatePatient", patient }),
    // addPatient: (patient) => dispatch({ type: "AddPatient", patient }),
    // setAppointments: (appointments) =>
    //   dispatch({ type: "SetAppointments", appointments }),
    // addAppointment: (appointment) =>
    //   dispatch({ type: "AddAppointment", appointment }),
  };
}

export { mapStateToProps, mapDispatchToProps };
