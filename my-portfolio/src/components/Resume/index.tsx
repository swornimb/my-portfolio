import { CiClock2 } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import myCV from "@/asset/Swornim_CV_final.pdf";
import Titles from "../Common/Titles";

function Resume() {
  const handleCV = () => {
    window.open(myCV);
  };

  return (
    <div>
      <section className="mb-10">
        <Titles title="Resume" />
        <div className="flex gap-5">
          <div className="text-(--primary-blue)">
            <IoBookOutline size={30} />
          </div>
          <div>
            <div className="text-2xl font-bold mb-5">Education</div>
            <div className="mb-5">
              <div className="text-xl font-semibold">
                Technische Universität Ilmenau
              </div>
              <p>Research in Computer & Systems Engineering (M.Sc. RCSE)</p>
              <p className="text-(--primary-blue)">2025 - Ongoing</p>
            </div>
            <div className="mb-5">
              <div className="text-xl font-semibold">Tribhuvan University</div>
              <p>
                Bachelor of Science in Computer Science and Information
                Technology (B.Sc. CSIT)
              </p>
              <p className="text-(--primary-blue)">2018 - 2022</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <div className="flex gap-5">
          <div className="text-(--primary-blue)">
            <CiClock2 size={30} />
          </div>
          <div>
            <div className="text-2xl font-bold mb-5">Experience</div>
            <div className="mb-5">
              <div className="text-xl font-semibold">
                Senior AI Data Trainer
              </div>
              <p>Invisible Technologies</p>
              <p className="text-(--primary-blue)"> 05/2024 - 05/2025</p>
            </div>
            <div className="mb-5">
              <div className="text-xl font-semibold">
                Associate Software Engineer
              </div>
              <p>Cedargate Technologies</p>
              <p className="text-(--primary-blue)"> 04/2023 – 10/2023 </p>
            </div>
            <div className="mb-5">
              <div className="text-xl font-semibold">Design Intern</div>
              <p>Deerwalk INC (Acquired By Cedargate Technologies)</p>
              <p className="text-(--primary-blue)">05/2019 – 12/2021 </p>
            </div>
          </div>
        </div>
        <Button
          className="flex justify-self-end bg-(--primary-blue)"
          onClick={handleCV}
        >
          Download Full CV Here
        </Button>
      </section>
    </div>
  );
}

export default Resume;
