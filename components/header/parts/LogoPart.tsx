import Image from "next/image";

export default function LogoPart() {
  return (
    <div className="flex justify-center items-center w-[180px] h-[55px]">
      <Image
        src="/nomedue.png"
        alt=""
        width={200}
        height={200}
        className="object-fill w-full h-full"
      />
    </div>
  );
}
