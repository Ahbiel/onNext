import styled from 'styled-components'
import Decorations from './imgs/decoration1.png'
import { Data } from '../Travel'

export default function About() {
  return (
    <>
      <AboutStyled>
        <main>
          <img className='decoration1' src={Decorations} />
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
          <img className='decoration2' src={Decorations} />
        </main>
      </AboutStyled>
    </>
  )
}

const AboutStyled = styled.div`
  height:100vh ;
  margin-bottom: 20%;
  .main{
    position: relative;
    z-index: 10;
    margin: auto;
    max-width: 90%;
  }
  .decoration1{
    position: relative;
    left: 0;
    top:50px;
    width: 95%;
    height: 150px;
  }
  .decoration2{
    position: absolute;
    right: 0;
    width: 95%;
    height: 150px;
    transform: rotate(180deg);
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
`
