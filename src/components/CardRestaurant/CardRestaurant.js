import React from "react";
import { CardContainer, InfoDelivery, NameRestaurant, ImgContainer } from "./style";

export const CardRestaurant = ({restaurant}) => {
    return (
        <CardContainer>
            <ImgContainer>
                <img src="https://picsum.photos/328/120"
                    alt="Foto do restaurante"
                //mudar o src para a foto do restaurante e o alt para o nome do restaurante
                />
            </ImgContainer>
            <NameRestaurant>
                <p>{restaurant?.name}</p>
            </NameRestaurant>
            <InfoDelivery>
                <p>
                    tmin - tmax minutos
                </p>
                <p>
                    Frete R$: (preço do frete,00)
                </p>
            </InfoDelivery>
        </CardContainer>
    )
}