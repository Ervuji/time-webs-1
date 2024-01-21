import Link from "next/link";

export default function PartTwoPr() {
  return (
    <div className="w-full flex justify-center flex-wrap">
      <div className="w-[60%] max-[700px]:w-[100%] flex justify-center text-6xl max-[400px]:text-3xl text-center font-bold text-white">
        Development Services
      </div>
      <div className="w-[70%] flex justify-center pt-32 flex-nowrap max-[1650px]:w-full max-[1650px]:flex-wrap gap-20 max-[970px]:space-y-10">
        <div className="w-[350px] min-h-[500px] h-auto bg-white rounded-2xl flex-wrap p-5 space-y-5">
          <div className="w-full flex justify-center items-center p-10 relative">
            <img
              src="clessidra.png"
              alt=""
              className="absolute flex w-[70px] h-[130px] mix-blend-multiply -top-20"
            />
          </div>
          <div className="w-full flex justify-center text-center items-center text-xl font-bold text-[#1db4f8]">
            WEBSITES DEVELOPMENT
          </div>
          <div className="w-full h-auto text-black text-lg text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </div>
          <div className="w-full flex justify-center">
            <Link
              href={"#"}
              className="w-auto flex justify-start bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] items-center h-[50px] hover:to-[#94fbff] hover:from-[#b692ff] text-white font-bold p-5 mt-5 rounded-full"
            >
              SCOPRI DI PIÙ
            </Link>
          </div>
        </div>
        <div className="w-[350px] min-h-[500px] h-auto bg-white rounded-2xl flex-wrap p-5 space-y-5">
          <div className="w-full flex justify-center items-center p-10 relative">
            <img
              src="clessidra.png"
              alt=""
              className="absolute flex w-[70px] h-[130px] mix-blend-multiply -top-20"
            />
          </div>
          <div className="w-full flex justify-center text-center items-center text-2xl font-bold text-[#1db4f8]">
            MOBILITY SERVICES
          </div>
          <div className="w-full h-auto text-black text-lg text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </div>
          <div className="w-full flex justify-center">
            <Link
              href={"#"}
              className="w-auto flex justify-start bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] items-center h-[50px] hover:to-[#94fbff] hover:from-[#b692ff] text-white font-bold p-5 mt-5 rounded-full"
            >
              SCOPRI DI PIÙ
            </Link>
          </div>
        </div>
        <div className="w-[350px] min-h-[500px] h-auto bg-white rounded-2xl flex-wrap p-5 space-y-5">
          <div className="w-full flex justify-center items-center p-10 relative">
            <img
              src="clessidra.png"
              alt=""
              className="absolute flex w-[70px] h-[130px] mix-blend-multiply -top-20"
            />
          </div>
          <div className="w-full flex justify-center text-center items-center text-2xl font-bold text-[#1db4f8]">
            CONSULTING
          </div>
          <div className="w-full h-auto text-black text-lg text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </div>
          <div className="w-full flex justify-center">
            <Link
              href={"#"}
              className="w-auto flex justify-start bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6] items-center h-[50px] hover:to-[#94fbff] hover:from-[#b692ff] text-white font-bold p-5 mt-5 rounded-full"
            >
              SCOPRI DI PIÙ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
