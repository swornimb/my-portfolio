import PortfolioDetails from "./PortfolioDetails";
import SocialMedia from "./SocialMedia";
import PortfolioID from "./PortfolioID";
import MobileAsideDesign from "../Common/MobileAsideDesig,";

function Aside() {
  return (
    <div>
      <div className="px-10 hidden lg:block">
        <div className="flex flex-col gap-y-6">
          <PortfolioID />
          <PortfolioDetails />
          <SocialMedia />
        </div>
      </div>
      <div className="px-5 block lg:hidden">
        <div className="profile flex flex-col">
          <MobileAsideDesign />
        </div>
      </div>
    </div>
  );
}

export default Aside;
