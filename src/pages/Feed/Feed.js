import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { CardRestaurant } from "../../components/CardRestaurant/CardRestaurant";
import { ScreenContainer } from "./style";
import { Search } from "../../components/Search/Search";
import { InputFeed } from "./style";
import useProtectedPage from "../../hooks/useProtectedPage";
import { NavBar } from "../../components/NavBar/NavBar";

export const Feed = () => {
  
  const context = useContext(Context);

  useProtectedPage()

  const [guardarRestaurantes, setGuardarRestaurantes] = useState([]);

  const [searchRestaurant, setSearchRestaurant] = useState("");

  const [tipos, setTipos] = useState("")

  const pegarRestaurantes = () => {
    const headers = {
      auth: localStorage.getItem("token"),
    };
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/restaurants",
        { headers: headers }
      )
      .then((response) => {
        console.log(response)
        setGuardarRestaurantes(response.data.restaurants);
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

  console.log(guardarRestaurantes)

  const filtrarRestaurantes = guardarRestaurantes?.filter((restaurant) => {
    if(searchRestaurant === "") {
      return restaurant
    } else if (restaurant.name.toLowerCase().includes(searchRestaurant.toLowerCase())) {
      return restaurant
    }
    return false
  })
  .filter((restaurant) => {
    if(tipos === "" || restaurant.category === tipos) {
      return restaurant
    }
  })
  .map((restaurant) => {
    return (
       <CardRestaurant key={restaurant.id} restaurant={restaurant} />
    );
  });

  return (
    <ScreenContainer>
      <InputFeed
        value={searchRestaurant}
        onChange={(event) => handleInputRestaurant(event)}
        placeholder="      Buscar Restaurantes"
      />
      <Search setTipos={setTipos}/>
      {filtrarRestaurantes}
      <NavBar/>
    </ScreenContainer>
    
  );
};
