import Titles from "../Common/Titles";
import { IoBookOutline } from "react-icons/io5";

function MyEducation() {
  return (
    <>
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
    </>
  );
}

export default MyEducation;
