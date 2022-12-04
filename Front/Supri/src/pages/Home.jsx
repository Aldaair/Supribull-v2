import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import CChat from "../components/CChat";

import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div>
      <Link to={"/ayuda"}>Ayuda</Link>
      <Link to={"/notificaciones"}>Notificaciones</Link>
      <Link to={"/perfil"}>Perfil</Link>
      <Link to={"/publicaciones"}>Publicaciones</Link>
      <Link to={"/publicar"}>Publicar</Link>
      <Link to={"/mensajes"}>Mensajes</Link>
      <Outlet />
    </div>
  );
};

export default Home;
