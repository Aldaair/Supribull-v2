import PostList from "./Post/PostList";
import Navbar from "./Navbar";
import Message from "./Messages";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Help from "./Help";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Message/>
    </div>
  );
}
