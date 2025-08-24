import PageFactory from "@/factory/PageFactory";
import Aside from "../Aside";
import { useTheme } from "@/hooks/useTheme";

function MainLayout() {
  const {myTheme} = useTheme()
  return (
    <div className={myTheme}>
      <div className="h-screen flex justify-center bg-(--background)">
        <div className=" w-4/5 flex mt-15 gap-10">
          <div className="bg-(--main-section-bg) rounded-3xl border-[0.25px] border-(--border-color) flex-1 text-(--primary)">
            <Aside />
          </div>
          <div className="bg-(--main-section-bg) rounded-3xl border-[0.25px] border-(--border-color) flex-3 text-(--primary)">
            <PageFactory page="about" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
