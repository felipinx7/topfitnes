import { HomeAluno } from "@/paginas/home-aluno/homeAluno";
import { ToastContainer } from "react-toastify";

export default function HomeAlunoPage() {
  return (
    <>
      <HomeAluno />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
