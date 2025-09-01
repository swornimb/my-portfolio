import Titles from "../Common/Titles";
import Skills from "./Skills";

function MySkills() {
  return (
    <section>
      <Titles title="My Skills" />
      <div className="mx-15">
        <Skills />
      </div>
    </section>
  );
}

export default MySkills;
