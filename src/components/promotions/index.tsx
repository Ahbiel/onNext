import styled from "styled-components"
import Card from "./Card"
import { Data } from "../Travel"
import background from './img/fundo.jpg'
export default function Promotions() {
  
  const Promotion = Data.travel.filter((value) => {
    return value.promotion == true
  })
  return (
    <PromotionsStyled>
      <div className="containerPromotion">
        <div className="title">
          <h1>Promotions of the day</h1>
          <p>Every day new states and countries will have an unmissable promotion. Secure your ticket now and travel wherever you want, and if you want to stay on top of all the promotions, register your email in the form below</p>
        </div>
        <div className="promotions">
          {
            Promotion.map((value) => {
              console.log(value)
              return (
                <div key={value.id}>
                  {
                    value.price != undefined &&
                    <Card localy={value.label} price={value.price}
                    />}
                </div>
              )
            })
          }
        </div>
      </div>
    </PromotionsStyled>
  )
}
const PromotionsStyled = styled.div`
    height: 90vh;
    background: linear-gradient(0deg, rgba(30, 38, 47, 0.75), rgba(30, 38, 47, 0.75)), url(${background}), #1E262F;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Inter', sans-serif;
    color: white;
    .containerPromotion{
      margin: auto;
      max-width: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .title{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 3rem 0 3rem 0;
      margin-top: 3rem;
    }
    .promotions{
      display: flex;
      justify-content: space-around;
    }
`