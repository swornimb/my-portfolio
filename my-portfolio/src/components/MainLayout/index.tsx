import PageFactory from "@/factory/PageFactory";
import Aside from "../Aside";
import { useTheme } from "@/hooks/useTheme";
import Navbar from "../Navbar";
import { NavProvider } from "@/hooks/useNav";

function MainLayout() {
  const { myTheme } = useTheme();
  return (
    <div className={`${myTheme} bg-(--background) min-h-screen`}>
      <div className="flex justify-center">
        <div className=" w-4/5 flex my-15 gap-10">
          <div className="bg-(--main-section-bg) rounded-3xl border-[0.25px] border-(--border-color) flex-1 text-(--primary)">
            <Aside />
          </div>
          <div className="bg-(--main-section-bg) rounded-3xl border-[0.25px] border-(--border-color) flex-3 text-(--primary) p-10">
            <NavProvider>
              <Navbar />
              <PageFactory />
            </NavProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
