import Skills from "../Skill";
import { Card, CardContent } from "../ui/card";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiServer } from "react-icons/ci";

function About() {
  return (
    <div>
      <section className="mb-10">
        <div className="text-3xl font-bold">About Me</div>
        <div className="h-1.5 bg-(--primary-blue) w-[5em] rounded my-5"></div>
        <p>
          A passionate web developer with strong expertise in cross-platform
          apps, REST APIs, UI/UX, widgets, and state management solutions.
          Proven track record in delivering cutting-edge solutions, including
          API integration, third-party libraries, and performance optimization.
          Adept at debugging to ensure high-quality, responsive apps and An
          agile collaborator committed to staying current with industry trends.
        </p>
        <p>
          If you're seeking a skilled web developer to breathe life into your
          project and exceed your expectations, I am here to collaborate and
          create magic together. Reach out, and let's transform your vision into
          a reality!
        </p>
      </section>
      <section className="my-10">
        <div className="text-3xl font-bold">What I'm Doing</div>
        <div className="h-1.5 bg-(--primary-blue) w-[5em] rounded my-5"></div>
        <div className="grid grid-cols-2 gap-5">
          <Card className="bg-(--secondary)">
            <CardContent className="flex gap-5">
              <div className="work-icon text-(--primary-blue)">
                <IoCodeSlashOutline size={40} />
              </div>
              <div>
                <p className="font-bold text-xl">Web Development</p>
                <p>
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-(--secondary)">
            <CardContent className="flex gap-5">
              <div className="work-icon text-(--primary-blue)">
                <IoIosPhonePortrait size={40} />
              </div>
              <div>
                <p className="font-bold text-xl">Mobile Apps</p>
                <p>
                  Professional development of applications for Android and ios.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-(--secondary)">
            <CardContent className="flex gap-5">
              <div className="work-icon text-(--primary-blue)">
                <MdOutlineDesignServices size={40} />
              </div>
              <div>
                <p className="font-bold text-xl">UI/UX</p>
                <p>
                  The most modern and high-quality design made at a professional
                  level
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-(--secondary)">
            <CardContent className="flex gap-5">
              <div className="work-icon text-(--primary-blue)">
                <CiServer size={40} />
              </div>
              <div>
                <p className="font-bold text-xl">Backend Development</p>
                <p>
                  High-performance backend services designed for scalability and
                  seamless user experience.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section>
        <div className="text-3xl font-bold">My Skills</div>
        <div className="h-1.5 bg-(--primary-blue) w-[5em] rounded my-5"></div>
        <div className="mx-15">
          <Skills />
        </div>
      </section>
    </div>
  );
}

export default About;
