import { IconeSearch } from "@/assets/icons/icone-search";

interface searchProps {
    value: string,
    onChange: (value: string) => void
}

export function Search(data: searchProps) {
    return (
        <div className="w-full h-fit py-3 px-4 bg-verde-300 flex rounded-full">
            <div className="pt-0.5">
                <IconeSearch />
            </div>
            <input
                value={data.value}
                onChange={(e) => data.onChange(e.target.value)}
                className="w-[90%] placeholder-verde-200 pl-3 outline-0 text-verde-200 font-poppins font-light"
                placeholder="Pesquisar por nome"
            />
        </div>
    )
}