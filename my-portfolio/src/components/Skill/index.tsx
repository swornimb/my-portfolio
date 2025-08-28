import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { mySkill } from "@/constant/skillsData";
function Skills() {
  return (
    <Carousel>
      <CarouselContent>
        {mySkill.map((oneSkill) => (
          <CarouselItem className="basis-1/4 justify-items-center">
            <div className="w-30 bg-(--secondary) p-5 rounded-3xl ">
              <img src={oneSkill} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Skills;
