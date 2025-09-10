import { useTheme } from "@/hooks/useTheme";
import { Button } from "../ui/button";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useNav } from "@/hooks/useNav";

function Navbar() {
  const { myTheme, toggleTheme } = useTheme();
  const { activeNav, activateNav } = useNav();
  return (
    <div>
      <div className="flex justify-center lg:justify-end">
        <Button
          className={`bg-(--main-section-bg) ${
            activeNav == "about" ? "text-(--primary-blue)" : "text-(--primary)"
          } hover:text-(--primary-blue) hover:bg-(--main-section-bg) shadow-none`}
          onClick={() => activateNav("about")}
        >
          About
        </Button>
        <Button
          className={`bg-(--main-section-bg) ${
            activeNav == "resume" ? "text-(--primary-blue)" : "text-(--primary)"
          } hover:text-(--primary-blue) hover:bg-(--main-section-bg) shadow-none`}
          onClick={() => activateNav("resume")}
        >
          Resume
        </Button>
        <Button
          className={`bg-(--main-section-bg) ${
            activeNav == "contacts"
              ? "text-(--primary-blue)"
              : "text-(--primary)"
          } hover:text-(--primary-blue) hover:bg-(--main-section-bg) shadow-none`}
          onClick={() => activateNav("contacts")}
        >
          Contacts
        </Button>
        <Button
          className="rounded-3xl bg-(--primary-blue) hover:text-(--primary-blue) hover:bg-(--main-section-bg)"
          onClick={() => toggleTheme()}
        >
          {myTheme == "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
