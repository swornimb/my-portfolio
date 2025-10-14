import profile from "@/asset/profile.png";
import { Badge } from "../ui/badge";

function PortfolioID() {
  return (
    <div className="flex flex-row gap-6 justify-start items-center lg:flex-col lg:mt-10 ">
      <div className="profile-pic w-1/3 lg:w-full">
        <div className="bg-(--border-color) rounded-3xl">
          <img src={profile} alt="Profile-Picture" />
          <div className="w-full flex justify-end">
            <span className="relative flex size-5 hidden md:block">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#39ff14] opacity-75"></span>
              <span className="relative inline-flex size-5 rounded-full bg-[#39ff14]"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 items-center">
        <div className="sm:text-sm md:text-3xl lg:text-xl text-center">
          Swornim Bhattarai
        </div>
        <Badge className="justify-self-center" variant="secondary">
          Software Engineer
        </Badge>
      </div>

      <div className="h-[1px] w-full bg-(--border-color) hidden lg:block"></div>
    </div>
  );
}

export default PortfolioID;
