const MainHeader = () => {

  return (
    <div className="bg-shallow-depth-cover h-screen w-screen bg-cover sm:bg-fixed pb-40 text-slate-900 flex">
      <div className="mt-96 h-fit w-fit md:w-2/3 p-3 pr-20 backdrop-hue-rotate-180 backdrop-saturate-200  backdrop-contrast-100 hover:backdrop-contrast-150 transition duration-700"> 
        <div className="bg-yellow-200/30 hover:bg-red-200/30 w-[80vw] p-3 transition duration-700">

          <h1 className="font-gloock md:text-8xl text-6xl ">SpinCycle</h1>
          <br />

          <div className="font-vollkorn text-base md:text-2xl lg:text-3xl">The smart way to manage your clothes.</div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default MainHeader