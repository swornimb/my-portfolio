import type { WhatIAmDoing } from "@/constant/whatIAmDoing";
import { Card, CardContent } from "../ui/card";

interface WhatIDoCardProp {
  work: WhatIAmDoing;
}

function WhatIDoCard({ work }: WhatIDoCardProp) {
  const { title, description, icon } = work;
  return (
    <Card className="bg-(--secondary)">
      <CardContent className="flex gap-5">
        <div className="work-icon text-(--primary-blue)">{icon}</div>
        <div>
          <p className="font-bold text-xl">{title}</p>
          <p>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default WhatIDoCard;
