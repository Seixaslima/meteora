import Inicial from 'Paginas/Inicial/Inicial';
import Opengraph from 'componentes/Opengraph/Opengraph';
import PaginaPadrao from 'componentes/PaginaPadrao/PaginaPadrao';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicial />} />
        </Route>
        <Route path="/opengraph" element={<Opengraph />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
