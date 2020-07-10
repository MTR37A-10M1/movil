// import axios from "axios";
const URI = "https://mtr37a-10m1.azurewebsites.net";
const postRequestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};
const getRequestOptions = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

export default {
  async addUser(nombres, apellidos, dni, codigo, idCargo, correo, password) {
    try {
      postRequestOptions.body = JSON.stringify({
        nombres,
        apellidos,
        dni,
        codigo,
        idCargo,
        correo,
        password,
      });
      let response = await fetch(URI + "/api/Usuario/add", postRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async loginUser(correo, password) {
    try {
      postRequestOptions.body = JSON.stringify({ correo, password });
      let response = await fetch(
        URI + "/api/Usuario/login",
        postRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async equipos() {
    try {
      let response = await fetch(URI + "/api/Equipo/all", getRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async fallas() {
    try {
      let response = await fetch(URI + "/api/Falla/all", getRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async addFalla(descripcion, idEquipo, idEstado) {
    try {
      postRequestOptions.body = JSON.stringify({
        descripcion,
        idEquipo,
        idEstado,
      });
      let response = await fetch(URI + "/api/Falla/add", postRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async updateFalla(id, descripcion, idEquipo, idEstado) {
    try {
      postRequestOptions.body = JSON.stringify({
        id,
        descripcion,
        idEquipo,
        idEstado,
      });
      let response = await fetch(URI + "/api/Falla/update", postRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async updateUser(email, password, phone, score, idType, expoPushToken) {
    try {
      postRequestOptions.body = JSON.stringify({
        email,
        password,
        phone,
        score,
        idType,
        expoPushToken,
      });
      let response = await fetch(URI + "/api/User/update", postRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async updateUserExpoPushToken(email, expoPushToken) {
    try {
      postRequestOptions.body = JSON.stringify({
        email,
        expoPushToken,
      });
      let response = await fetch(
        URI + "/api/User/updateExpoPushToken",
        postRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async dataFromReniec(dni) {
    try {
      let response = await fetch(
        "https://api.reniec.cloud/dni/" + dni,
        getRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async addPatient(name, lastName, idGender, idUser, dni, birthdate, imageUrl) {
    try {
      postRequestOptions.body = JSON.stringify({
        name,
        lastName,
        idGender,
        idUser,
        dni,
        birthdate,
        imageUrl,
      });
      let response = await fetch(URI + "/api/Patient/add", postRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async findUser(id) {
    try {
      let response = await fetch(
        URI + "/api/User/find/" + id,
        getRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async verifyUser(email) {
    try {
      let response = await fetch(
        URI + "/api/User/" + email + "/verify",
        getRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async updatePatient(
    id,
    name,
    lastName,
    idGender,
    idUser,
    dni,
    birthdate,
    imageUrl
  ) {
    try {
      postRequestOptions.body = JSON.stringify({
        id,
        name,
        lastName,
        idGender,
        idUser,
        dni,
        birthdate,
        imageUrl,
      });
      let response = await fetch(
        URI + "/api/Patient/update",
        postRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async Specialties() {
    try {
      let response = await fetch(URI + "/api/Specialty/all", getRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async Profiles(id) {
    try {
      let response = await fetch(
        URI + "/api/User/" + id + "/profiles",
        getRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async doctorsSpecialty(id) {
    try {
      let response = await fetch(
        URI + "/api/Specialty/" + id + "/doctors",
        getRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async schedulesDoctor(id) {
    try {
      let response = await fetch(
        URI + "/api/Doctor/" + id + "/schedules",
        getRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async addAppointment(
    diagnostic,
    prescription,
    comment,
    score,
    date,
    idDoctor,
    idStatus,
    idPatient,
    idSchedule,
    idType
  ) {
    try {
      postRequestOptions.body = JSON.stringify({
        diagnostic,
        prescription,
        comment,
        score,
        date,
        idDoctor,
        idStatus,
        idPatient,
        idSchedule,
        idType,
      });
      let response = await fetch(
        URI + "/api/Appointment/add",
        postRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async updateAppointment(
    id,
    diagnostic,
    prescription,
    comment,
    score,
    date,
    idDoctor,
    idStatus,
    idPatient,
    idSchedule,
    idType
  ) {
    try {
      postRequestOptions.body = JSON.stringify({
        id,
        diagnostic,
        prescription,
        comment,
        score,
        date,
        idDoctor,
        idStatus,
        idPatient,
        idSchedule,
        idType,
      });
      let response = await fetch(
        URI + "/api/Appointment/update",
        postRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async Appointments(dni) {
    try {
      let response = await fetch(
        URI + "/api/Appointment/all",
        getRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async TopDoctors() {
    try {
      let response = await fetch(URI + "/api/Doctor/top", getRequestOptions);
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },

  async doctorAppointments(id) {
    try {
      let response = await fetch(
        URI + "/api/Doctor/" + id + "/appointments",
        getRequestOptions
      );
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
