import { useEffect, useState } from "react";

const { useContext, createContext } = require("react");

const dispositivoContext = createContext();
dispositivoContext.displayName = "Dispositivo";

export function DispositivoProvider({ children }) {
  const [dispositivo, setDispositivo] = useState("");

  return (
    <dispositivoContext.Provider value={{ dispositivo, setDispositivo }}>
      {children}
    </dispositivoContext.Provider>
  );
}

export function useDispositivoContext() {
  const { dispositivo, setDispositivo } = useContext(dispositivoContext);

  useEffect(() => {
    const largura = window.innerWidth;
    if (largura < 376) return setDispositivo("Mobile");
    if (largura < 769) return setDispositivo("Tablet");
    return setDispositivo("Desktop");
  }, [window.innerWidth, setDispositivo]);

  // function tipoDispositivo() {
  //   const largura = window.innerWidth;
  //   let resultado = "Desktop";
  //   largura < 376
  //     ? (resultado = "Mobile")
  //     : largura < 769
  //     ? (resultado = "Tablet")
  //     : (resultado = "Desktop");

  //   return resultado;
  // }
  // window.addEventListener("resize", () => setDispositivo(tipoDispositivo()));

  return {
    dispositivo
  };
}
