import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { CardRestaurant } from "../../components/CardRestaurant/CardRestaurant";

export const Feed = () => {
  const context = useContext(Context);

  const [guardarRestaurantes, setGuardarRestaurantes] = useState([]);

  const [searchRestaurant, setSearchRestaurant] = useState("");

  const headers = {
    auth: localStorage.getItem("token"),
  };

  const pegarRestaurantes = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/restaurants",
        { headers: headers }
      )
      .then((response) => {
        setGuardarRestaurantes(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const handleInputRestaurant = (event) => {
    setSearchRestaurant(event.target.value);
  };

  useEffect(() => {
    pegarRestaurantes();
    context.setCurrentScreen("feed");
  }, []);

  const mapearRestaurantes = guardarRestaurantes.map((post) => {
    return (
      <div>
        {post.name}
        {post.deliveryTime}
        {post.shipping}
      </div>
    );
  });

  return (
    <div>
      <input
        value={searchRestaurant}
        onChange={(event) => handleInputRestaurant(event)}
        placeholder="Buscar Restaurantes"
      />
      Feed
      {mapearRestaurantes}
    </div>
  );
};
