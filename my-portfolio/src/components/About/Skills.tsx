import SkillItem from "./SkillItem";
import RenderList from "../Common/RenderList";
import { mySkill } from "@/constant/skillsData";
import { Marquee, MarqueeContent, MarqueeItem } from "../ui/shadcn-io/marquee";
function Skills() {
  return (
    <Marquee>
      <MarqueeContent>
        <MarqueeItem className="flex gap-10 mx-5">
          <RenderList data={mySkill} dataName="skill" design={SkillItem} />
        </MarqueeItem>
      </MarqueeContent>
    </Marquee>
  );
}

export default Skills;
