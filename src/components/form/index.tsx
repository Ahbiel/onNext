import styled from "styled-components"
import icon from './img/icon.png'
import { FormControlLabel, Radio, RadioGroup, Slider, TextField, Typography } from "@mui/material"
import { useState } from "react";
import img from './img/img.jpg'


function valuetext(value: number) {
  // console.log(value)
  return `${value}°C`;
}

const minDistance = 10;
const maxDistance = 100;

export default function Form() {
  const [value1, setValue1] = useState<number[]>([20, 37]);
  const [value, setValue] = useState('All');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    event
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  return (
    <FormStyled>
      <div className="form">
        <header>
          <img src={icon} />
          <h2>Stay on top of all promotions</h2>
        </header>
        <form>
          <TextField fullWidth id="standard-basic" label="Standard" variant="standard" />
          <TextField fullWidth id="standard-basic" label="Standard" variant="standard" />
          <div style={{marginTop:'0.7rem'}}>
            <Typography style={{ marginBottom: '-8px', opacity: '.6' }}>Price (min e max)</Typography>
            <PrettoSlider
              getAriaLabel={() => 'Minimum distance'}
              value={value1}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              aria-label="ios slider"
              disableSwap
              min={minDistance}
              max={maxDistance}
            />
          </div>
          <RadioGroup

            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={handleChange}

          >
            <FormControlLabel value="National" control={<Radio size="small" />} label="National" />
            <FormControlLabel value="International" control={<Radio size="small" />} label="International" />
            <FormControlLabel value="All" control={<Radio size="small" />} label="All" />
          </RadioGroup>
          <button>Send</button>
        </form>
      </div>
      <div className="img">
        <img src={img}/>
      </div>
    </FormStyled>
  )
}
const FormStyled = styled.div`
    height: 90vh;
    /* background-color: #6d6dbd; */
    display: flex;
    justify-content: center;
    gap: 10%;
    align-items: center;
    .img{
      height: 80%;
      width: 25rem;
      overflow: hidden; //esconder a parte da imagem que está para fora
      border-radius: 10px;
      border: 1px solid black;
      img{
        width: 100%;
        /* height: 100%; */
      }
    }
    .form{
      height: 80%;
      width: 25rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px 20px 30px 20px;
      header{
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
          width: 2.5rem;
          height: 2.5rem;
        }
        h2{
          font-family: inter;
          font-weight: 100;
        }
      }
      form{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        button{
          background-color: #777575;
          color: white;
          width: 100%;
          outline: none;
          border: none;
          border-radius: 10px;
          height: 2.5rem;
        }
      }
    }
`
const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height:8,
  '& .MuiSlider-track': {
    height: 2,
    border: 'none',
    backgroundColor:'black',
  },
  '& .MuiSlider-thumb': {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    border: '1px solid black',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

