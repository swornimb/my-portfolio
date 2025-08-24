import {useTheme } from "@/hooks/useTheme"
import { Button } from "../ui/button"

function About() {
  const {toggleTheme}= useTheme()
  return (
    <div>
      <div className="flex justify-end m-5 gap-5">
        <Button className="bg-(--main-section-bg) text-(--primary) hover:text-(--primary-blue) hover:bg-(--main-section-bg)">About</Button>
        <Button className="bg-(--main-section-bg) text-(--primary) hover:text-(--primary-blue) hover:bg-(--main-section-bg)">Resume</Button>
        <Button className="bg-(--main-section-bg) text-(--primary) hover:text-(--primary-blue) hover:bg-(--main-section-bg)">Contacts</Button>
        <Button className="bg-(--main-section-bg) text-(--primary) hover:text-(--primary-blue) hover:bg-(--main-section-bg)" onClick={()=>toggleTheme()}>Theme</Button>
      </div>
    </div>
  )
}

export default About