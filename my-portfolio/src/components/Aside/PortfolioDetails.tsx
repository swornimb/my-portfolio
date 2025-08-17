import { personalData } from "@/constant/persoDetail"
import PortfolioDetailsUI from "./PortfolioDetailsUI"

function PortfolioDetails() {
  return (
    personalData.map((singleData)=>(
    <PortfolioDetailsUI data={singleData}/>
    ))
  )
}

export default PortfolioDetails