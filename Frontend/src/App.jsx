import { BrowserRouter, Route, Routes } from "react-router-dom";
import { adminRoutes, userRoutes } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {userRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={route.component} />
        ))}
        {adminRoutes.map((route, i) => (
          <Route key={i} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
