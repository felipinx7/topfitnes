export interface PreviewImageEvent extends React.ChangeEvent<HTMLInputElement> { }

export function PreviewImage(e: PreviewImageEvent, setPreviewImage: any): void {
    const file: File | undefined = e.target.files?.[0];
    if (file) setPreviewImage(URL.createObjectURL(file));
};