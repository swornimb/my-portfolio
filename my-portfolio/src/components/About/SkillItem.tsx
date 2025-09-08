import { MarqueeItem } from "../ui/shadcn-io/marquee";

interface SkillItemProp {
  skill: string;
}

function SkillItem({ skill }: SkillItemProp) {
  return (
    <span className="w-20">
      <div className="bg-(--secondary) p-5 rounded-3xl ">
        <img src={skill} />
      </div>
    </span>
  );
}

export default SkillItem;
