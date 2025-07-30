import { HomePersonal } from "@/pages/home-personal/homePersonal"
import { ToastContainer } from "react-toastify"

export default function PersonalPage() {
    return (
        <>
            <HomePersonal />
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    )
}