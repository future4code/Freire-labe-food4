import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../router/Coordinator";


export const login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
        alert("Login feito com sucesso!");
        console.log(res);
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate)
        clear();
    })
    .catch((err) => {
        alert(err);
        console.log(err);
    });
};

export const signUp = (body, clear, navigate) => {
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((res) => {
        alert("Cadastro feito com sucesso!");
        console.log(res);
        localStorage.setItem("token", res.data.token);
        clear();
        goToFeed(navigate)
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

 