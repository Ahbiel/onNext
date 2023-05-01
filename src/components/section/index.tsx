import styled from "styled-components"
import { DataCoin } from "./DataCoin"
import { IconButton, Tooltip } from "@mui/material"

export default function Section() {
    return (
        <SectionStyled>
            <header>
                <h1 style={{ fontFamily: 'inter' }}>Fly with us</h1>
                <p>Book a flight with onNext and travel wherever you want</p>
                <p>We guarantee your safety and fun</p>
            </header>
            <div className="button">
                <button>International</button>
                <button>National</button>
            </div>
            <div className="coin">
                {
                    DataCoin.map((value) => {
                        return (
                            <Tooltip title={value.name} placement="top" arrow>
                                <IconButton>
                                    <div key={value.id}>
                                        {value.icon}
                                    </div>
                                </IconButton>
                            </Tooltip>
                        )
                    })
                }
            </div>
        </SectionStyled>
    )
}


const SectionStyled = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    header{
        text-align: center;
        h1{
            margin-bottom: 5px;
        }
        p{
            font-size: 1rem;
            font-family: inter;
        }
    }
    .button{
        display: flex;
        gap: 10%;
        button{
            width: 200px;
            height: 40px;
            background-color: #FF6000;
            border: none;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
            border-radius: 25px;
            outline: none;
            color: white;
            font-size: 1rem;
            font-family: inter;
            transition: all .1s;
        }
        button:hover{
            background-color: #c94d00;
            cursor: pointer;
        }
    }
    .coin{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15%;
        div{
            font-size: 4rem;
            color: black;
        }
    }
`