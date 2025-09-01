interface TitleProps{
    title:string
}

function Titles({title}:TitleProps) {
  return (
    <div>
        <div className="text-3xl font-bold">{title}</div>
        <div className="h-1.5 bg-(--primary-blue) w-[5em] rounded my-5"></div>
    </div>
  )
}

export default Titles