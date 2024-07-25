import '../../../../src/app/globals.css'
import { CopyBlock, obsidian } from 'react-code-blocks'
import Image from 'next/image'
import ProjectNav from '@/app/components/projects/nav/ProjectNav'
import Tooltip from '@/app/components/utils/Tooltip'
import ProjectFooterLinks from '@/app/components/Links/ProjectFooterLinks'
import Link from 'next/link'

export default function Polylines() {
  return (
    <div className="bg-slate-200 text-slate-800">
      <ProjectNav />
      <div className="mx-auto p-5 max-w-[800px] bg-slate-200">
        <h1 className="text-5xl font-bold pb-2 pt-10 text-left">
          From Markers to Polylines
        </h1>

        <h2 className="text-xl font-medium pb-3 text-left">
          Part 2 of a series of posts on building a hiking app
        </h2>
        <p className="max-w-[800px] pb-10">25th July 2024</p>
        <div className="flex items-center pb-10">
          <Tooltip className="text-xs" text="See Source Code On GitHub">
            <a
              href="https://github.com/jack-crawford-1/Trail-Keeper-App"
              target="_blank"
              className="flex items-center"
            >
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="github"
                width={50}
                height={50}
              />
              <div className="ml-2 justify-center content-center py-1 w-fit rounded px-6 bg-slate-800 text-white">
                See code
              </div>
            </a>
          </Tooltip>
        </div>

        <p className="max-w-[800px] pb-3">
          When I first started working on the Map component, my focus was on
          displaying individual points of interest, which involved fetching
          geoJSON data and adding it as map markers, as well as adding some
          interactivity by making the markers clickable. This worked for seeing
          speicific locations like huts and public services, but clearly was not
          a good solution to displaying actual trails.
        </p>
        <p className="max-w-[800px]">
          With the goal to show entire trails, not just individual points, I
          started by revisiting the Department of Conservation&apos;s API
          endpoints that I came across towards the end of setting up the map
          component initially, which had a lot of data on the trails themselves
          and the points (coordinates) that make them up.I tested the response
          in thunderclient, using the x-api-key to enter the API key I generated
          through the DOC portal and got a successful response back.
        </p>

        <Image
          src="/blog/maps/thunderclient.png"
          alt="Thunderclient test"
          width={800}
          height={300}
          className="pt-10 pb-5"
        />

        <p className="max-w-[800px]">
          In the backend controller, getDocTrails.js, I defined the endpoint url
          and hardcoded &quot;trail id&quot; parameter (for now, will allow for
          dynamic searches later).
        </p>
        <div className="py-5 overflow-auto rounded-xl">
          <div
            className="p-5 rounded-lg overflow-auto"
            style={{ backgroundColor: 'rgb(41,43,46)' }}
          >
            <CopyBlock
              language="ts"
              text={`const url = \`https://api.doc.govt.nz/v1/tracks/114ff80d-12f4-4f0b-8384-103f0c8e6efc/detail?api_key=\${docApiKey}\``}
              theme={obsidian}
            />
          </div>
        </div>
        <p className="max-w-[800px]">
          I added the API key as a header in the request to ensure that the
          server receives the necessary authentication for access.
        </p>
        <div className="py-5 overflow-x-hidden rounded-xl">
          <div
            className="p-5 rounded-lg overflow-auto"
            style={{ backgroundColor: 'rgb(41,43,46)' }}
          >
            <CopyBlock
              language="js"
              text={`try {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'x-api-key': docApiKey,
  ...
}`}
              theme={obsidian}
            />
          </div>
        </div>
        <p className="max-w-[800px] pb-5 pt-2">
          I then added the API key to the env file, but not after first
          publishing it to GitHub and having to create a new key and deactivate
          the old one. Better now than later to notice that one, but still a bit
          of a blunder.
        </p>
        <p className="max-w-[800px] pb-3">
          <span className="font-bold uppercase text-xl">
            For the front end,{' '}
          </span>
          I created a new component, DocTrails.tsx which allowed me to show the
          data for the single trail I fetched from DOC. I&apos;ll likely need to
          bring this back into the main map compont at some point but for now it
          was good to have a separate component to work on.
        </p>
        <p className="max-w-[800px]">
          I used state to keep track of the data and then used the useEffect
          hook to fetch the data from my endpoint and set the state to be the
          response data. This means that the fetched data is stored in the state
          and I can use it throughout the component.
        </p>

        <div className="py-5 overflow-auto rounded-xl">
          <div
            className="p-5 rounded-lg overflow-auto"
            style={{ backgroundColor: 'rgb(41,43,46)' }}
          >
            <CopyBlock
              language="ts"
              text={`const [data, setData] = useState<DocRoutesTypes | null>(null)

useEffect(() => {
  axios
    .get('http://localhost:3000/v1/doctrails)'
    .then((response) => {
      setData(response.data)
    ...
    `}
              theme={obsidian}
            />
          </div>
        </div>
        <p className="max-w-[800px]">
          The main thing I wanted to get from the DOC endpoint was the latitude
          and longitude of the points they use to show a trail on the map. The
          data was being stored as arrays of “lines” which was arrays, each with
          a set of coordinates, which were in the same format I came across when
          adding map markers through geoJSON in my previous post, so planned to
          convert through the existing proj4 library I was using.
        </p>
        <Image
          src="/blog/maps/coords.png"
          alt="Data Mapping"
          width={250}
          height={300}
          className="pt-10 pb-5"
        />

        <p className="max-w-[800px] pb-5">
          Resulting in not so great of a user experience, (I removed after
          checking it worked), I mapped over the data to show all the
          coordinates for the Abel Tasman Walk which is listed as being between
          3-5 days duration, so a lot of coordinates. Great to know it&apos;s
          all working correctly though.
        </p>
        <div className="bg-white  pl-10 pr-10 rounded-xl">
          <Image
            src="/blog/maps/data.png"
            alt="Coordinate Mapping"
            width={800}
            height={300}
            className="pt-10 pb-10"
          />
        </div>

        <p className="max-w-[800px] pt-5">
          It made sense at this point to separate out the coordinate conversion
          function, having now used it in both my main map component, and the
          new DocTrails component so I created a utility function to look after
          the conversion for the whole app. This is basically looping through
          each coordinate pair and for each pair, it converts the coordinates
          from the source projection to the destination projection and then
          returns an array of these converted coordinates.
        </p>

        <div className="py-5 overflow-x-scroll rounded-xl">
          <div
            className="p-5 rounded-lg overflow-auto"
            style={{ backgroundColor: 'rgb(41,43,46)' }}
          >
            <CopyBlock
              language="ts"
              text={`const convertedLineData = response.data.line.map(
  (line: [number, number][]) => convertCoordinates(line)
);`}
              theme={obsidian}
            />
          </div>

          <h2 className="text-xl font-semibold pb-3 text-left pt-5">
            Creating Polylines for Trails
          </h2>
          <p className="max-w-[800px] mb-5">
            With the trail data successfully fetched and converted, the next
            step was to show the trail on the map. To ensure the map centers
            correctly, I dynamically set its center to the first coordinate of
            the first trail, and then went through each item in the data.line
            array, created a Polyline object for each using the Google Maps API,
            set its path to the corresponding coordinates.
          </p>

          <div className=" overflow-auto rounded-xl pb-10">
            <div
              className="pt-5 rounded-lg overflow-auto"
              style={{ backgroundColor: 'rgb(41,43,46)' }}
            >
              <CopyBlock
                language="ts"
                text={` data.line.forEach((line) => {
    if (Array.isArray(line)) {
      const linePath = new window.google.maps.Polyline({
        path: line.map(([lng, lat]) => ({ lat, lng })),
        ...
      });
      linePath.setMap(map);
    }
  });

    and Voilà!! - it's not pretty but it works!

`}
                theme={obsidian}
              />
            </div>
          </div>

          <Image
            src="/blog/maps/map1.png"
            alt="Polyline Visualization"
            height={300}
            width={800}
            className="mb-2 rounded-xl"
          />

          <h2 className="text-xl font-semibold pb-3 text-left pt-5">
            Up Next:
          </h2>
          <p className="max-w-[800px]">
            With a single trail showing, next up would involve accessing a
            separate endpoint from DOC to get all the trails and seeing how best
            to load and display the data without causing my laptop to freeze.
            Also, provide the ability to navigate to a trail-specific page from
            the main map or search results. This seems pretty straightforward,
            with having the bones for a single-trail page already setup, and I
            expect to update the current component to accept dynamic trail data
            but will see how it goes.
          </p>
          <p className=" pt-3 max-w-[800px]">
            For down the line, I would love to get 3D added like the below, and
            continue to build out the other components within my app.
          </p>
          <Image
            src="/blog/maps/3d.png"
            alt="3D Map Visualization"
            width={800}
            height={300}
            className="pt-5 pb-10"
          />
        </div>
      </div>
      <div className="text-center pb-5">
        <Link
          href="/projects/trail-keeper/custom-map"
          className=" text-center text-slate-800 font-semibold hover:text-blue-600 underline"
        >
          Part 1: Using geoJSON and LINZ data.
        </Link>
      </div>
      <ProjectFooterLinks />
    </div>
  )
}
