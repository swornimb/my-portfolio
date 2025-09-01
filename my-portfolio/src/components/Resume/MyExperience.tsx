import { CiClock2 } from "react-icons/ci";

function MyExperience() {
  return (
    <>
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
      </section>
    </>
  );
}

export default MyExperience;
