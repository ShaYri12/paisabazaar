import Image from "next/image";

export default function Card({ title, icon }) {
  return (
    <div className="flex items-center justify-between gap-2 bg-white scale-100 hover:scale-110 overflow-hidden p-[30px] shadow-custom-green rounded-[8px] border border-green-border transition-all duration-300 hover:shadow-hover-blue">
      <h3 className="text-[14px] font-[600]">{title}</h3>
      <Image src={icon} alt="icon" priority width={54} height={54} />
    </div>
  );
}
