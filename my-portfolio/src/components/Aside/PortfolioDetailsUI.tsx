import type { personalDataType } from "@/constant/persoDetail";

interface PortfolioDetailsUIProps {
  data: personalDataType;
}

function PortfolioDetailsUI({ data }: PortfolioDetailsUIProps) {
  return (
    <div className="flex justify-start gap-5">
      <div className="bg-(--secondary) block my-auto p-3 rounded-md text-(--primary-blue)">
        {data.icon}
      </div>
      <div className="flex flex-col align-center">
        <label className="font-semibold text-sm">
          {data.label.toUpperCase()}
        </label>
        <p>{data.value}</p>
      </div>
    </div>
  );
}

export default PortfolioDetailsUI;
