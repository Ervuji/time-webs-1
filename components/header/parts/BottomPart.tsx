import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaBarsStaggered,
} from "react-icons/fa6";

export default function BottomPart() {
  const className =
    "hover:text-purple-500 text-black  hover:underline hover:underline-offset-2 hover:decoration-[#00ffea] decoration-4 pr-3";

  return (
    <div className="flex justify-end flex-nowrap w-auto items-center">
      <div className="flex justify-end gap-5 w-[100%] flex-nowrap">
        <div className="hover:text-blue-600">
          <FaInstagram size={20} />
        </div>
        <div className="hover:text-blue-600">
          <FaFacebook size={20} />
        </div>
        <div className="hover:text-blue-600">
          <FaTwitter size={20} />
        </div>
      </div>
    </div>
  );
}
