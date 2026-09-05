type RepresentativePhotoPreviewProps = {
  src: string;
};

export function RepresentativePhotoPreview({
  src,
}: RepresentativePhotoPreviewProps) {
  return (
    <div className="aspect-square min-w-0 overflow-hidden rounded-seller-sm shadow-[0_1px_3px_0_rgb(0_0_0_/_0.06),0_1px_2px_0_rgb(0_0_0_/_0.04)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="등록한 대표사진 미리보기"
        className="size-full object-cover"
        src={src}
      />
    </div>
  );
}
