import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import DevOps from "./pages/DevOps";
import Cloud from "./pages/Cloud";
import Kubernetes from "./pages/Kubernetes";
import Docker from "./pages/Docker";
import Skills from "./pages/Skills";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/devops" element={<DevOps />} />

        <Route path="/cloud" element={<Cloud />} />

        <Route path="/kubernetes" element={<Kubernetes />} />

        <Route path="/docker" element={<Docker />} />

        <Route path="/skills" element={<Skills />} />
      </Route>
    </Routes>
  );
}

export default App;
