function CV() {
  return (
    <>
      <div className=" flex flex-row">
        <div className="lg:transform lg:hover:scale-110 lg:transition lg:duration-500 lg:ease-in-ou">
          <a href="/cv.pdf" download>
            <button className=" bg-blue-400 text-white px-2 py-2 rounded hover:bg-blue-600 text-xl">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
export default CV
