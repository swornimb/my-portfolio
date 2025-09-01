import { CarouselItem } from "../ui/carousel";

interface SkillItemProp{
    skill: string
}

function SkillItem({skill}:SkillItemProp) {
  return (
    <CarouselItem className="basis-1/4 justify-items-center">
      <div className="w-30 bg-(--secondary) p-5 rounded-3xl ">
        <img src={skill} />
      </div>
    </CarouselItem>
  );
}

export default SkillItem;
