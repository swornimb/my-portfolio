import About from "@/components/About"
import Contacts from "@/components/Contacts"
import Portfolio from "@/components/Portfolio"

interface pageFactoryProp{
    page: string
}

function PageFactory({page}: pageFactoryProp) {
  
  switch(page.toLowerCase()){
    case('about'):
        return <About/>
    case('contact'):
        return <Contacts/>
    case('portfolio'):
        return <Portfolio/>
  }
  
  return (
    <div>

    </div>
  )
}

export default PageFactory