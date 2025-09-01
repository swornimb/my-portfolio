import profile from "@/asset/profile.png";
import { Badge } from "../ui/badge";
import PortfolioDetails from "./PortfolioDetails";
import SocialMedia from "./SocialMedia";

function Aside() {
  return (
    <div className="p-10">
      <div className="profile flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-6 items-center">
          <div className="profile-pic">
            <div className="bg-(--border-color) rounded-3xl">
              <img src={profile} alt="Profile-Picture" />
              <div className="w-full flex justify-end">
                <span className="relative flex size-5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#39ff14] opacity-75"></span>
                <span className="relative inline-flex size-5 rounded-full bg-[#39ff14]"></span>
              </span>
              </div>
            </div>
          </div>
          <div className="text-xl">Swornim Bhattarai</div>
          <Badge className="justify-self-center" variant="secondary">
            Software Engineer
          </Badge>
          <div className="h-[1px] w-full bg-(--border-color)"></div>
        </div>
        <PortfolioDetails />
        <SocialMedia />
      </div>
    </div>
  );
}

export default Aside;
