import styled from "styled-components";
import About from "./components/About";
import { CSSreset } from "./components/CSSreset";
import Footer from "./components/footer";
import Form from "./components/form";
import Home from "./components/homepage";
import Promotions from "./components/promotions";
import Section from "./components/section";
import { motion, useScroll } from "framer-motion";

export default function App(){
  const { scrollYProgress } = useScroll()
  return(
    <HomeStyled>
      <motion.div
         className="progress-bar"
         style={{ scaleX: scrollYProgress }}
      />
      <CSSreset/>
      <Homepage/>
    </HomeStyled>
  )
}
function Homepage(){
  return(
    <>
      <Home/>
      <About/>
      <Promotions/>
      <Form/>
      <Section/>
      <Footer/>
    </>
  )
}
const HomeStyled=styled.div`
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: #FF6000;
    transform-origin: 0%;
  }
`