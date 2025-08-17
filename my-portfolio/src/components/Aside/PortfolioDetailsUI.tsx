import type { personalDataType } from '@/constant/persoDetail'
import { Badge } from '../ui/badge'


interface PortfolioDetailsUIProps{
    data:personalDataType
}

function PortfolioDetailsUI({data}:PortfolioDetailsUIProps) {
  return (
    <div className='flex justify-start gap-5'>
            <Badge className='min-w-10'>
                {data.icon}
            </Badge>
            <div className='flex flex-col align-center'>
                <label className='font-semibold text-sm'>{data.label.toUpperCase()}</label>
                <p>{data.value}</p>
            </div>
    </div>
  )
}

export default PortfolioDetailsUI