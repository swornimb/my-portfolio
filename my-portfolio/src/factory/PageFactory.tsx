import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Resume from "@/components/Resume";
import { useNav } from "@/hooks/useNav";

function PageFactory() {
  const { activeNav } = useNav();
  switch (activeNav.toLowerCase()) {
    case "about":
      return <About />;
    case "contacts":
      return <Contacts />;
    case "resume":
      return <Resume />;
  }

  return <div></div>;
}

export default PageFactory;
