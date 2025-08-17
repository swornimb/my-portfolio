import About from "../About";

function MainLayout() {
  return (
    <div className="h-screen flex justify-center bg-(--background)">
      <div className=" w-3/5 flex  bg-(--main-section-bg) mt-15 rounded-3xl border-[0.25px] border-[#383838]">
        <div className="">
          <About />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
