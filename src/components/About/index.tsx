import styled from 'styled-components'
import Decorations from './imgs/decoration1.png'
import { Data } from '../Travel'

export default function About() {
  return (
    <>
      <AboutStyled>
        <div className='decoration1'>
          <img src={Decorations} />
        </div>
        <main>
          <div className='main'>
            <div className='info'>
              <h1>Who we are?</h1>
              <p>We are a travel agency with the aim of providing each traveler with a unique and special moment with great prices anywhere in the world</p>
              <p>Learn a little more about our services</p>
            </div>
            <div className='section'>
              {Data.about.map((value, i) => {
                return (
                  <div className='card' key={i}>
                    <div className='circle'>
                      {value.id}
                    </div>
                    <h2>{value.title}</h2>
                    <p>{value.subtitle}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </main>
        <div className='decoration2'>
          <img src={Decorations} />
        </div>
      </AboutStyled>
    </>
  )
}

const AboutStyled = styled.div`
  margin-bottom: 5%;
  margin-top: 2rem;
  .main{
    position: relative;
    z-index: 10;
    margin: auto;
    max-width: 90%;
  }
  .decoration1{
    position: relative;
    margin-bottom: -3rem;
    z-index: 10;
    left: 0;
    height: 10rem;
    img{
      width: 95%;
      height: 100%;
    }
  }
  .decoration2{
    position: relative;
    z-index: 10;
    left: 0;
    height: 10rem;
    margin-top: -5rem;
    img{
      position: absolute;
      right: 0;
      width: 95%;
      height: 100%;
      transform: rotate(180deg);
    }
  }
  .info{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Inter', sans-serif;
    margin-bottom: 3rem;
    p{
      font-size: 1.2rem;
    }
  }
  .section{
    display: grid;
    justify-content: center;
  }
  .section .card{
    width: 18rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding:1rem;
    .circle{
      background-color: #ffffff;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 2px solid #000000;
      box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
    }
    h2{
      font-size: 1.3rem;
    }
    p{
      font-size: 0.9rem;
    }
  }
  .section .card:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
  .section .card:nth-child(2) { grid-area: 2 / 2 / 3 / 3; }
  .section .card:nth-child(3) { grid-area: 1 / 3 / 2 / 4; }
  .section .card:nth-child(4) { grid-area: 2 / 4 / 3 / 5; }
  @media(max-width:1150px){
    .section .card{
      width: auto;
    }
  }
  @media(max-width:800px){
    .decoration1{
      height: 7rem;
    }
    .decoration2{
      height: 7rem;
    }
  }
  @media(max-width:600px){
    .decoration1{
      height: 5rem;
      margin-bottom: 0;
    }
    .decoration2{
      height: 7rem;
      margin-top: -3rem;
    }
    .section{
      display: grid;
    }
    .section .card:nth-child(1) { grid-area: 1 / 2 / 2 / 3; }
    .section .card:nth-child(2) { grid-area: 2 / 3 / 3 / 4; }
    .section .card:nth-child(3) { grid-area: 3 / 2 / 4 / 3; }
    .section .card:nth-child(4) { grid-area: 4 / 3 / 5 / 4; }
  }
  @media(max-width:450px){
    .decoration1{
      display: none;
    }
    .decoration2{
      display: none;
    }
  }
`
