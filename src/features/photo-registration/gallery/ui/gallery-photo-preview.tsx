type GalleryPhotoPreviewProps = {
  onClick: () => void;
  src: string;
};

export function GalleryPhotoPreview({
  onClick,
  src,
}: GalleryPhotoPreviewProps) {
  return (
    <button
      aria-label="갤러리 사진 자세히 보기"
      className="aspect-square min-w-0 overflow-hidden rounded-seller-sm shadow-[0_1px_3px_0_rgb(0_0_0_/_0.06),0_1px_2px_0_rgb(0_0_0_/_0.04)]"
      onClick={onClick}
      type="button"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="등록한 갤러리 사진 미리보기"
        className="size-full object-cover"
        src={src}
      />
    </button>
  );
}
