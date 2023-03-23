import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, register_complete } from "~/app/userSlice";

export default function Logout() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  useEffect(() => {
    dispatch(logout());
    nav("/");
  }, []);

  return <>https://www.youtube.com/watch?v=dQw4w9WgXcQ</>;
}
export function Logout1() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  useEffect(() => {
    dispatch(register_complete);
    nav("/");
  }, []);
}
