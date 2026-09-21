// import { useEffect } from "react";
import "./App.css";
import { Axios } from "./components/Axios";
// import { ContadorUseEffect } from "./components/ContadorUseEffect";
// import { Fetch } from "./components/Fetch";

function App() {
  // useEffect(()=>{
  //Código que se ejecuta despues del render

  //   return()=>{
  //Limpieza opcional, (limpieza listener/clearInterval)
  //   }
  // },[ dependencias ])

  return (
    <>
      {/* <ContadorUseEffect /> */}
      {/* <Fetch /> */}
      <Axios />
    </>
  );
}

export default App;
