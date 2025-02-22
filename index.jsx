import { createRoot } from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router";
import App from "./App";
import Destination2 from "./Components/Destination2";
import Destination3 from "./Components/Destination3";
import Destination1 from "./Components/Destination1";
import Destination4 from "./Components/Destination4";
import Login from "./Components/Login";

const root = createRoot(document.querySelector('.root'));
root.render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/destination1" element={<Destination1/>}/>
      <Route path="/destination2" element={<Destination2 />} />
      <Route path="/destination3" element={<Destination3 />} />
      <Route path="/destination4" element={<Destination4 />} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
);
