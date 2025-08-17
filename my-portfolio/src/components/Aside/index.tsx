import profile from "@/asset/profile.png";
import { Badge } from "../ui/badge";
import PortfolioDetails from "./PortfolioDetails";

function Aside() {
  return (
    <div className="p-10">
      <div className="profile flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-6 items-center">
          <div className="profile-pic">
            <div className="bg-(--border-color) rounded-3xl">
              <img src={profile} alt="Profile-Picture" />
            </div>
          </div>
          <div className="text-2xl">Swornim Bhattarai</div>
          <Badge className="justify-self-center" variant="secondary">
            Software Engineer
          </Badge>
          <div className="h-[1px] w-full bg-(--border-color)"></div>
        </div>
        <PortfolioDetails />
      </div>
    </div>
  );
}

export default Aside;
