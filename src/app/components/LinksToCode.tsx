function LinksToCode() {
  return (
    <>
      <div className=" flex flex-row">
        <div className="lg:transform lg:hover:scale-110 lg:transition lg:duration-500 lg:ease-in-ou ">
          <a href="./">
            <button className=" m-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 text-2xl">
              See my work
            </button>
          </a>
        </div>
        <div className="lg:transform lg:hover:scale-110 lg:transition lg:duration-500 lg:ease-in-ou">
          <a href="/cv.pdf" download>
            <button className="m-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 text-2xl">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
export default LinksToCode
