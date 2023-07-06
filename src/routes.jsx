import Inicial from "Paginas/Inicial/Inicial";
import PaginaCategoria from "Paginas/PaginaCategoria/PaginaCategoria";
import PaginaPadrao from "componentes/PaginaPadrao/PaginaPadrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicial />} />
          <Route path="categoria">
            <Route index element={<PaginaCategoria />} />
            <Route path=":categoria" element={<PaginaCategoria />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
