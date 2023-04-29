import styled from "styled-components"

interface Props{
  localy:string,
  price: {
    portion:number,
    dolar:number,
    cents:number
  }
}

export default function Card({localy,price}:Props) {
  return (
    <CardStyled>
        <header>
            <h1>{localy}</h1>
            <p>Round trip ticket to {localy}</p>
        </header>
        <main>
            <div className="price">
              <p className="descriptionPrice">Em até {price.portion}x de</p>
              <div>
                <span className="acronym">R$</span>
                <span className="dolar">{price.dolar}</span>
                <span className="cents">{price.cents}</span>
              </div>
            </div>
            <div className="description">
                <p>Enjoy the promotion of round trip to São Paulo</p>
            </div>
            <button>See more</button>
        </main>
    </CardStyled>
  )
}
const CardStyled = styled.div`
    background-color: #454545;
    width: 19rem;
    height: 23rem;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.5);
    header{
      height: 20%;
      background-color: #FF6000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1{
        font-family: 'Inter', sans-serif;
        font-weight: 100;
        font-size: 2.2rem;
      }
      p{
        font-size: .8rem;
      }
    }
    main{
      margin: auto;
      max-width: 80%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10%;
      height: 80%;
      .price{
        .descriptionPrice{
          position: absolute;
          left: 10px;
          font-size: .8rem;
        }
        div {
          padding: 0;
          position: relative;
          margin-top: 10px;
          .acronym{
            font-size: 1rem;
          }
          .dolar{
            font-size: 4rem;
          }
          .cents{
            font-size: 1rem;
          }
        }
      }
      .description{
        text-align: justify;
        width: 72%;
      }
      button{
        background-color: #FF6000;
        outline: none;
        border: none;
        width: 80%;
        height: 15%;
        border-radius: 15px;
        box-shadow: 1.815px 1.815px 5.445px rgba(0, 0, 0, 0.25);
        color: white;
        font-size: 1.3rem;
        transition: all .2s;
      }
      button:hover{
        cursor: pointer;
        background-color: #dd5500;
      }
      button:focus{
        cursor: progress;
      }
    }
`
