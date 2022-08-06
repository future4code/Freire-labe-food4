import React from "react";
import { CardContainer, InfoDelivery, NameRestaurant, ImgContainer } from "./style";

export const CardRestaurant = ({restaurant}) => {
    return (
        <CardContainer>
            <ImgContainer>
                <img src={`${restaurant.logoUrl}`}
                    alt="Foto do restaurante"
                //mudar o src para a foto do restaurante e o alt para o nome do restaurante
                />
            </ImgContainer>
            <NameRestaurant>
                <p>{restaurant.name}</p>
            </NameRestaurant>
            <InfoDelivery>
                <p>
                    {restaurant.deliveryTime}
                </p>
                <p>
                    {restaurant.shipping}
                </p>
            </InfoDelivery>
        </CardContainer>
    )
}