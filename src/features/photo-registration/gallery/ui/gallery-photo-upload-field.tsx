import Image from "next/image";

type GalleryPhotoUploadFieldProps = {
  disabled?: boolean;
  onFileSelect: (file: File) => void;
};

export function GalleryPhotoUploadField({
  disabled = false,
  onFileSelect,
}: GalleryPhotoUploadFieldProps) {
  return (
    <label
      aria-label="갤러리 사진 업로드 영역"
      className="flex size-[177px] cursor-pointer items-center justify-center overflow-hidden rounded-seller-sm bg-surface-subtle has-disabled:cursor-not-allowed has-disabled:opacity-40"
    >
      <input
        accept="image/jpeg,image/png,image/webp"
        className="sr-only"
        disabled={disabled}
        onChange={(event) => {
          const file = event.target.files?.[0];
          event.target.value = "";

          if (file) {
            onFileSelect(file);
          }
        }}
        type="file"
      />
      <Image
        aria-hidden="true"
        alt=""
        className="size-5"
        height={16}
        src="/photo-registration/upload.svg"
        width={16}
      />
    </label>
  );
}
