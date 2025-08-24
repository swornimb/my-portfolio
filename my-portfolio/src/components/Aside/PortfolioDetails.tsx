import { personalData } from "@/constant/persoDetail"
import PortfolioDetailsUI from "./PortfolioDetailsUI"

function PortfolioDetails() {
  return (
    personalData.map((singleData, index)=>(
    <PortfolioDetailsUI data={singleData} key={index}/>
    ))
  )
}

export default PortfolioDetails