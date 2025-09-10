import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import PortfolioID from '../Aside/PortfolioID'
import PortfolioDetails from '../Aside/PortfolioDetails'
import SocialMedia from '../Aside/SocialMedia'

function MobileAsideDesign() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="none"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
            <PortfolioID/>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-y-10 text-balance py-4">
          <PortfolioDetails />
          <SocialMedia/>
        </AccordionContent>
      </AccordionItem>
      </Accordion>
  )
}

export default MobileAsideDesign