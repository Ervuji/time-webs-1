import Image from "next/image";

export default function TopPart() {
  return (
    <div className="flex justify-center items-center w-[35px] h-[60px]">
      <Image
        src="/clessidra.png"
        alt=""
        width={200}
        height={200}
        className="object-fill w-full h-full"
      />
    </div>
  );
}
