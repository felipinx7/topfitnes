import { Login } from "@/pages/login/login";
import { ToastContainer } from "react-toastify";
export default function LoginPage(){
  return (
    <>
      <Login/>
       <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}