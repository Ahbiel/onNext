import About from "./components/About";
import { CSSreset } from "./components/CSSreset";
import Home from "./components/homepage";
import Promotions from "./components/promotions";

export default function App(){
  return(
    <>
      <CSSreset/>
      <Home/>
      <About/>
      <Promotions/>
    </>
  )
}