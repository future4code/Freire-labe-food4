import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
/* import { CardRestaurant } from "../../components/CardRestaurant/CardRestaurant"; */
/* import useProtectedPage from "../../hooks/useProtectedPage"; */

export const Feed = () => {

    /* useProtectedPage() */

    const [guardarRestaurantes, setGuardarRestaurantes] = useState([])

    const [searchRestaurant, setSearchRestaurant] = useState("")
    
    const headers = {
        auth: localStorage.getItem("token")
    };

    const pegarRestaurantes = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/rappi4B/restaurants", {headers: headers})
        .then((response) => {
            setGuardarRestaurantes(response.data)
        })
        .catch((error) => {
            console.log(error.data)
        })
    };

    const handleInputRestaurant = (event) => {
        setSearchRestaurant(event.target.value)
    }

    useEffect(() => {
        pegarRestaurantes()
    },[]);

    const mapearRestaurantes = guardarRestaurantes.map((post) => {
        return (
            <div>
                {post.name}
                {post.deliveryTime}
                {post.shipping}
            </div>
        )
    })

    return (
        <div>
            <input value={searchRestaurant} onChange={(event) => handleInputRestaurant(event)} placeholder="Buscar Restaurantes"/>
            Feed
            {mapearRestaurantes}

        </div>
    )
}