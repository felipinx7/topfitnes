import { useState, useEffect } from "react";
import { IconeCamera } from "@/assets/icons/icone-camera";
import { imagefotoinput } from "@/assets/image";

interface FotoInputComponenteProps {
  onFileChange?: (base64: string) => void; // agora espera uma string base64
  submitedPhoto?: boolean;
  initialPhotoUrl?: string;
}

export default function FotoInputComponente({
  onFileChange,
  submitedPhoto,
  initialPhotoUrl,
}: FotoInputComponenteProps) {
  const [fotoPreview, setFotoPreview] = useState<string | null>(
    initialPhotoUrl || null
  );

  useEffect(() => {
    setFotoPreview(initialPhotoUrl || null);
  }, [initialPhotoUrl]);

  const handleFotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setFotoPreview(base64String);

      if (onFileChange) {
        onFileChange(base64String); // envia como string
      }
    };

    reader.readAsDataURL(file); // converte em base64
  };

  return (
    <div className="w-[250px] relative h-[290px] z-0 rounded-full flex flex-col gap-4 items-center justify-center">
      <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={fotoPreview || imagefotoinput.src}
          alt="Foto do usuário"
          className="w-full h-full object-cover"
          width={200}
          height={200}
        />
      </div>

      <div className="absolute cursor-pointer overflow-hidden bg-[#e6e6e6] hover:scale-105 ease-in-out duration-300 transition-all hover:bg-[#c8c6c6] w-[60px] right-0 translate-x-[-0.3rem] translate-y-[-3rem] bottom-0 h-[60px] flex rounded-full items-center justify-center">
        <div className="relative w-[40px] h-[40px]">
          <IconeCamera />
          <input
            type="file"
            required={initialPhotoUrl ? false : true}
            accept="image/*"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
            onChange={handleFotoChange}
          />
        </div>
      </div>

      <div>
        <p className="text-neutras-100 font-[600] text-[1.2rem]">
          Foto do Perfil
        </p>
      </div>
    </div>
  );
}
