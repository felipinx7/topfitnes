import { IconeSearch } from "@/assets/icons/icone-search";

export function Search() {
    return (
        <div className="w-full h-fit py-3 px-4 bg-verde-300 flex rounded-full">
            <div className="pt-0.5">
                <IconeSearch />
            </div>
            <input
                className="w-[90%] placeholder-verde-200 pl-3 outline-0 text-verde-200 font-poppins font-light"
                placeholder="Pesquisar por nome"
            />
        </div>
    )
}