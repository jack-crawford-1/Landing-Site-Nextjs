function LinksToCode() {
  return (
    <div className="">
      <a href="./">
        <button className="m-2 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600 text-2xl">
          See my work
        </button>
      </a>
      <a href="/cv.pdf" download>
        <button className="m-2 bg-red-400 text-white px-4 py-2 rounded hover:bg-red-600 text-2xl">
          Download CV
        </button>
      </a>
    </div>
  )
}
export default LinksToCode
