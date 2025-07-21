export default function BotaoTreinarAgora(){
    // Depois o senhor no lugar de criar um component fixo, vc cria apenas um botao mesmo com um prop de texto pra conseguir usar o botao com diferentes textos
    return(
        <button className="w-full cursor-pointer font-[family-name:var(--font-goldman)] rounded-[0.5rem] shadow-[0px_-3px_26.5px_#00D939] hover:shadow-[0px_-3px_40px_#00D939] ease-in-out duration-[.5s] hover:bg-[var(--hover-verde-primario)] p-3 bg-[var(--verde-primario)]">
           QUERO TREINAR AGORA
        </button>
    )
}