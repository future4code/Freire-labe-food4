import styled from "styled-components";

export const CardContainer = styled.button`  
    width: 360px;
    height: 196px;
    margin: 50px 0 0;
    padding: 8px 16px 0; 
`
export const ImgContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    object-fit: contain;
    img {
        width: 328px;
        height: 120px;
        margin: 0 0 12px;
    }
`
export const NameRestaurant = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const InfoDelivery = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto 0px;
`