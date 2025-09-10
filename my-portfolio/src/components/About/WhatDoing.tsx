import RenderList from "../Common/RenderList";
import Titles from "../Common/Titles";
import { whatIDo } from "@/constant/whatIAmDoing";
import WhatIDoCard from "./WhatIDoCard";
function WhatDoing() {
  return (
    <section className="mb-10">
      <Titles title="What I'm Doing" />
      <div className="grid gap-5 md:grid-cols-2">
        <RenderList data={whatIDo} dataName="work" design={WhatIDoCard} />
      </div>
    </section>
  );
}

export default WhatDoing;
