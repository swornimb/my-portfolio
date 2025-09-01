import { Button } from "../ui/button";
import myCV from "@/asset/Swornim_CV_final.pdf";
import MyExperience from "./MyExperience";
import MyEducation from "./MyEducation";

function Resume() {
  const handleCV = () => {
    window.open(myCV);
  };

  return (
    <div>
      <MyEducation />
      <MyExperience />
      <Button
        className="flex justify-self-end bg-(--primary-blue)"
        onClick={handleCV}
      >
        Download Full CV Here
      </Button>
    </div>
  );
}

export default Resume;
