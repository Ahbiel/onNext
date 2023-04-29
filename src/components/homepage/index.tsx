import styled from "styled-components"
import * as Ri from 'react-icons/ri'
import Select from 'react-select'
import { Data } from "../Travel";
import { useState } from "react";

export default function HomePage() {
  const [preference, setPreference] = useState<string>('all')
  
  return (
    <HomePageStyled>
      <header>
        <div className="icon">
          <Ri.RiHome2Fill />
        </div>
        <div className="section">
          <p>About us</p>
          <p>Promotions</p>
        </div>
      </header>
      <main>
        <h1>OnNext</h1>
        <div className="input">
          <Select options={Data.travel.filter((value) => {
            if (preference == 'all') {
              return value
            }
            else {
              return value.locality == preference
            }
          })} placeholder='See available locations' className="selectLocaly" />
          <Select options={Data.option} onChange={(e) => setPreference(e!.value)} placeholder='Preferences' className="selectPreference" />
        </div>
        <div className="descripiton">
          <p>Want to travel? With us you can</p>
          <p>Search for the place of your dreams, and discover the best prices, travel times,<br /> available hotels and much more</p>
          <p>you can also filter on national and international places</p>
        </div>
      </main>

    </HomePageStyled>
  )
}

const HomePageStyled = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('fundo.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size:cover;
  height: 100vh;
  header{
    /* background-color: #9b9b9b; */
    color: white;
    margin: auto;
    max-width: 85%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ::before{
      content: '';
      position: absolute;
      left: -10%;
      top: 92%;
      transform: rotate(4deg);
      width: 120%;
      height: 100px;
      background-color: #ffffff;
      z-index: 0;
    }
    ::after{
      content: '';
      position: absolute;
      left: -10%;
      top: 90%;
      transform: rotate(4deg);
      width: 120%;
      height: 60px;
      background-color: #242424;
      box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.75), 0px 5px 6px rgba(0, 0, 0, 0.75);
    }
    .icon{
      font-size: 1.5rem;
      gap: 5%;
    }
    .section{
      display: flex;
      gap: 20px;
      p{
        font-size: 1.1rem;
      }
    }
  }
  main{
    width: 100%;
    height: calc(100vh - 10%);
    display: flex;
    /* justify-content: center; */
    margin-top: 5%;
    flex-direction: column;
    align-items: center;
    gap: 7%;
    h1{
      font-size: 6rem;
      font-family: 'Jua', sans-serif;
      letter-spacing: 0.8rem;
      color: white;
    }
    .input{
      display: flex;
      gap: 5%;
      width: 50%;
      align-items: center;
      .selectLocaly{
        width: 70%;
        border: 4px solid #FFFFFF;
        border-radius: 10px;
      }
      .selectPreference{
        width: 25%;
        border: 1px solid #FFFFFF;
        border-radius: 5px;
      }
    }
    .descripiton{
      color: white;
      width: 50%;
      p{
        font-size: 1.1em;
      }
    }
  }
`