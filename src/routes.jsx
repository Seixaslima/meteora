import Inicial from "Paginas/Inicial/Inicial";
import PaginaPadrao from "componentes/PaginaPadrao/PaginaPadrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
