import Image from 'next/image'

function MainImage() {
  return (
    <Image
      src="/default.webp"
      alt="Main Image"
      width={400}
      height={400}
      className="border-4 border-white rounded-xl lg:rounded-3xl lg:border-8 lg:shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out cursor-pointer"
    />
  )
}

export default MainImage
