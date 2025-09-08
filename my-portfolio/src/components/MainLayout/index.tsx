import PageFactory from "@/factory/PageFactory";
import Aside from "../Aside";
import { useTheme } from "@/hooks/useTheme";
import Navbar from "../Navbar";
import { NavProvider } from "@/hooks/useNav";

function MainLayout() {
  const { myTheme } = useTheme();
  return (
    <>
      <div
        className={`${myTheme} bg-(--background) min-h-screen hidden lg:block`}
        style={{ fontFamily: "Poppins" }}
      >
        <div className="flex justify-center">
          <div className=" w-4/5 flex my-15 gap-10">
            <div className="bg-(--main-section-bg) rounded-3xl border-[0.25px] border-(--border-color)  text-(--primary) flex-1 w-1/4">
              <Aside />
            </div>
            <div className="bg-(--main-section-bg) rounded-3xl border-[0.25px] border-(--border-color) text-(--primary) p-10 flex-3 w-3/4">
              <NavProvider>
                <Navbar />
                <PageFactory />
              </NavProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="block text-(--primary) h-screen bg-background text-3xl flex text-center items-center w-full overflow-hidden lg:hidden">
        The site is under constuction for small screens. Please view the site in
        a larger screen.
      </div>
    </>
  );
}

export default MainLayout;
