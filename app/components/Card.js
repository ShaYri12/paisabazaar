import Image from "next/image";

export default function Card({ title, icon }) {
  return (
    <div className="flex flex-1 lg:flex-row flex-col-reverse items-center lg:justify-between justify-center gap-2 bg-white scale-100 hover:scale-110 overflow-hidden lg:p-[30px] p-[14px] lg:shadow-custom-green rounded-[8px] lg:border lg:border-green-border transition-all duration-300 hover:shadow-hover-blue">
      <h3 className="lg:text-[14px] text-[10px] lg:font-[600] font-[400] lg:text-left text-center">
        {title}
      </h3>
      <Image src={icon} alt="icon" priority width={54} height={54} />
    </div>
  );
}
