"use client";

import { useState } from "react";
import { IconeCamera } from "@/assets/icons/icone-camera";
import { imagefotoinput } from "@/assets/image";
import Image from "next/image";

interface FotoInputComponenteProps {
  onFileChange?: (file: File) => void;
  submitedPhoto?: boolean;
}

export default function FotoInputComponente({onFileChange, submitedPhoto}: FotoInputComponenteProps) {
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);

  const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFotoPreview(imageURL);

      if (onFileChange) {
        onFileChange(file);
      }
    }
  };

  return (
    <div className="w-[250px] relative h-[290px] rounded-full flex flex-col gap-4 items-center justify-center">
      {/* Foto de perfil padrão ou selecionada */}
      <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src={fotoPreview || imagefotoinput}
          alt="Foto do usuário"
          className="w-full h-full object-cover"
          width={200}
          height={200}
        />
      </div>

      {/* Ícone de câmera + input de arquivo */}
      <div className="absolute cursor-pointer overflow-hidden bg-[#e6e6e6] hover:scale-105 ease-in-out duration-300 transition-all hover:bg-[#c8c6c6] w-[60px] right-0 translate-x-[-0.3rem] translate-y-[-3rem] bottom-0 h-[60px] flex rounded-full items-center justify-center">
        <div className="relative w-[40px] h-[40px]">
          <IconeCamera />
          <input
            type="file"
            required
            accept="image/*"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
            onChange={handleFotoChange}
          />
        </div>
      </div>

      <div>
        <p className="text-neutras-100 font-[600] text-[1.2rem]">Foto do Perfil</p>
      </div>
    </div>
  );
}
