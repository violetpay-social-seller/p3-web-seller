type OrderFormOptionCardProps = {
  index: number;
};

export function OrderFormOptionCard({ index }: OrderFormOptionCardProps) {
  return (
    <h2 className="text-seller-heading-md font-semibold tracking-[-0.54px]">
      옵션 {index}
    </h2>
  );
}
