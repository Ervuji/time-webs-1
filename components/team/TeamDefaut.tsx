import ExtraPartTwo from "./parts/ExtraPartTwo";
import Team from "./parts/Team";

export default function Projects() {
  return (
    <div className="w-full flex justify-center flex-wrap bg-white">
      <div className="w-full flex justify-center p-32 max-[600px]:px-5">
        <ExtraPartTwo />
      </div>
      <div className="w-full flex justify-center p-24 max-[600px]:px-5">
        <Team />
      </div>
    </div>
  );
}
