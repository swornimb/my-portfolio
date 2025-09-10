import PageFactory from "@/factory/PageFactory";
import Aside from "../Aside";
import { useTheme } from "@/hooks/useTheme";
import Navbar from "../Navbar";
import MobileNavbar from "../Common/MobileNavbar";

function MainLayout() {
  const { myTheme } = useTheme();
  return (
    <>
      <div
        className={`${myTheme} bg-(--background) min-h-screen`}
        style={{ fontFamily: "Poppins" }}
      >
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-(--main-section-bg) shadow-lg items-center py-3">
          <MobileNavbar />
        </div>
        <div className="flex justify-center">
          <div className=" w-5/6 flex my-15 gap-10 flex-col lg:flex-row">
            <div className="bg-(--main-section-bg) rounded-3xl border-[0.25px] border-(--border-color)  text-(--primary) flex-1 w-full lg:w-1/3">
              <Aside />
            </div>
            <div className="bg-(--main-section-bg) rounded-3xl border-[0.25px] border-(--border-color) text-(--primary) p-10 flex-3 w-full lg:w-2/3">
              <Navbar />
              <PageFactory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
