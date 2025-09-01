import SkillItem from "./SkillItem";
import RenderList from "../Common/RenderList";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { mySkill } from "@/constant/skillsData";
function Skills() {
  return (
    <Carousel>
      <CarouselContent>
        <RenderList data={mySkill} dataName="skill" design={SkillItem} />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Skills;
