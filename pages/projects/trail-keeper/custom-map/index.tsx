import '../../../../src/app/globals.css'
import { CopyBlock, obsidian } from 'react-code-blocks'
import Image from 'next/image'
import ProjectNav from '../../../../src/app/components/projects/nav/ProjectNav'
import Tooltip from '@/app/components/utils/Tooltip'
import ProjectFooterLinks from '@/app/components/Links/ProjectFooterLinks'
import Link from 'next/link'

export default function CustomMaps() {
  return (
    <>
      <div className="w-full">
        <div className="bg-slate-200 text-slate-800 wrap-none">
          <ProjectNav />
          <div className="mx-auto justify-center p-5 max-w-[800px] ">
            <h1 className="text-5xl font-bold pb-2 pt-10 text-left">
              Building a custom map with GeoJSON and Google Maps
            </h1>
            <h2 className="text-xl font-medium pb-10 text-left">
              Part 1 of a series of posts on building a hiking app
            </h2>

            <div className="flex items-center pb-5">
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
                  <div className="ml-2 justify-center content-center py-1 w-fit rounded px-6  bg-slate-800 text-white">
                    See code
                  </div>
                </a>
              </Tooltip>
            </div>

            <h2 className="text-2xl font-bold pb-5 pt-5">What I used:</h2>
            <ul className="list-disc list-inside pb-5">
              <li>
                <span className="font-semibold">Google Maps</span> for the base
                map
              </li>
              <li>
                <span className="font-semibold"> GeoJSON</span> from the
                Department Of Conservation for map markers and routes
              </li>
              <li>
                <span className="font-semibold">Proj4</span> Javascript library
                for converting GeoJSON coordinates for Google Maps
              </li>
              <li>
                <span className="font-semibold">API from LINZ</span> for NZ
                topographical map overlay
              </li>
            </ul>
            <p className="max-w-[800px]">
              Using the Google Maps API as my base map, I set up a container
              style to make the map fit the container it was in and used Tararua
              Forest Park as the map center for testing since it&apos;s close to
              home and is an amazing spot.
            </p>
            <Image
              src="/blog/google-map.png"
              alt="Google Map"
              width={800}
              height={300}
              className="pb-10 pt-5 rounded-lg"
            />

            <p className="max-w-[800px] pb-4">
              I used UseEffect here to load the map with a loader to keep google
              happy about loading asynchronously, referencing the API stored in
              the env file. Then I removed the map controls (excluding zoom) to
              keep it simple since Ill be using a topo overlay instead of the
              default map and Id like to add my alternative overlays instead of
              the default satellite and terrain from Google.
            </p>
            <div className="max-w-[800px] pt-5 pb-5">
              <div
                className="p-5 rounded-lg overflow-auto"
                style={{ backgroundColor: 'rgb(41,43,46)' }}
              >
                <CopyBlock
                  language="jsx"
                  text={`useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    })
              
loader
      .load()
      .then(() => {
        if (mapRef.current && window.google && window.google.maps) {
          const map = new window.google.maps.Map(mapRef.current, {
            center,
            zoom: 10,
            mapTypeControl: false,
      })`}
                  theme={obsidian}
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold pb-5 pt-7">Getting the data</h2>
            <p className="max-w-[800px]">
              Between DOC and LINZ, there were a variety of ways I could access
              the data I was looking to visualise in my app. DOC had endpoints
              for huts and tracks country-wide, and LINZ had similar information
              but focused on walking and biking tracks as well as having the
              much needed topographical overlay. Because it&apos;s not a hiking
              app if it&apos;s not in topo, right?
            </p>
            <h2 className="text-3xl pl-2 font-bold pb-5 pt-7">
              NZ Topo50 Maps Overlay
            </h2>
            <p className="max-w-[800px] pb-5">
              Looking at the top overlay first, I initially though I would be
              able to download and serve my own file-based version to avoid
              delays in loading but I quickly pivoted back to seeing how I could
              access the API after realising the KML file would be over 6GB.
            </p>
            <Image
              src="/blog/file-size.png"
              alt="file size"
              width={600}
              height={300}
              className="pb-10 pt-5 rounded-lg"
            />
            <p className="max-w-[800px]">
              Land Information New Zealand (LINZ), offered a XYZ tile service
              Api which uses URL template. This is basically checking to see at
              what zoom level the map is at and then fetching the tiles for that
              zoom level and coordinates as an image. It can be a bit janky at
              time when zooming too quick which I&apos;d like to look at fixing
              with some kind of caching or preloading of tiles.
            </p>
            <div className="max-w-[800px] pt-5 pb-5">
              <div
                className="p-5 rounded-lg overflow-auto"
                style={{ backgroundColor: 'rgb(41,43,46)' }}
              >
                <CopyBlock
                  language="jsx"
                  text={`const tileLayer = new window.google.maps.ImageMapType({
            getTileUrl: function (coord, zoom) {
              const url = https://data.linz.govt.nz/services;
              key={hiddenForThis}/tiles/v4/layer=50767/EPSG:3857
              /{zoom}/{coord.x}/{coord.y}.png
              return url
      },
            tileSize: new window.google.maps.Size(256, 256),
            name: 'NZ Topo50 Maps',
            maxZoom: 15,
            minZoom: 0,
          })`}
                  theme={obsidian}
                />
              </div>
            </div>

            <Image
              src="/blog/topo-map.png"
              alt="topo map"
              width={800}
              height={300}
              className="pb-10 pt-5 rounded-lg"
            />

            <h2 className="text-3xl font-bold pb-5 pt-5">Map Markers</h2>
            <p className="max-w-[800px] pb-3">
              For the markers themselves, I had way more options to choose from
              with the potential file sizes being much smaller, meaning I could
              look to serve the data myself from my own endpoint and use on the
              frontend from there.
            </p>
            <p className="max-w-[800px] pb-3">
              The Department of Conservation (DOC) had a dataset, “Walking and
              Trapping Experiences Locations”, which “features” and their
              coordinates, which was basically a record of all the DOC huts and
              tracks around the country.
            </p>
            <p className="max-w-[800px] pb-3">
              The tracks being plotted as a single point instead of a line
              wasn&apos;t ideal but I figured I would filter out the tracks
              later on and look at another way to display them, but this would
              be a good starting point to get simple data displaying for now.
            </p>
            <Image
              src="/blog/doc-dots.png"
              alt="Doc data"
              width={800}
              height={300}
              className="pb-10 pt-5 rounded-lg"
            />
            <p className="max-w-[800px] pb-3">
              DOC gives a few options for downloading the data. Quite a few
              actually; GeoJSON, KML, CSV, GeoPackage, PDF, DWG, Shapefile,
              MapInfo TAB, MapInfo MIF, and GeoDatabase. I knew I wanted to be
              able to load data quickly, so quick fetching and simplicity was my
              main focus
            </p>
            <p className="max-w-[800px]">
              GeoJSON seemed like a good pick. From what I could gather, it was
              pretty well adopted and some of the larger JS libraries like
              Leaflet and Mapbox integrated well. It also seemed a lot easier to
              read and understand the data (being in JSON format) compared to
              some of the more abstract layers.
            </p>
            <h2 className="text-3xl font-bold pb-5 pt-10">
              Routes, Controllers and Thunderclient
            </h2>
            <p className="max-w-[800px] pb-3">
              Once I decided on using GeoJSON, the next step was to serve the
              data from the server. I created a new Data directory to store the
              file, added a new Get route and then setup the controller which
              used the path.join method to construct the file path.
            </p>
            <p className="max-w-[800px]">
              To ensure everything was working correctly, I tested the endpoint
              using Thunderclient. The endpoint successfully served the GeoJSON
              data, showing the features and coordinates I was looking for. With
              some confidence that the back end good, I moved on to the client
              side.
            </p>
            <Image
              src="/blog/thunderclient.png"
              alt="Thunderclient"
              width={800}
              height={300}
              className="pb-10 pt-5 rounded-lg"
            />
            <h2 className="text-3xl font-bold pb-5 pt-5">Front End</h2>
            <p className="max-w-[800px]">
              When it came time to fetching the data and displaying it on my
              map, I encountered an issue with the coordinates, ending up with
              no markers showing. I discovered that the data provided by LINZ
              was in NZTM2000 format, which is a common projection used in New
              Zealand, but Google Maps requires WGS84 coordinates.
            </p>
            <div className="max-w-[800px] pt-5 pb-5">
              <div
                className="p-5 rounded-lg overflow-auto"
                style={{ backgroundColor: 'rgb(41,43,46)' }}
              >
                <CopyBlock
                  language="jsx"
                  text={`coordinates": [1280306.2821, 5049143.6433]`}
                  theme={obsidian}
                />
              </div>
            </div>

            <p className="max-w-[800px]">
              Searching for ways to convert coordinates led me to a library
              called proj4, a JavaScript library to transform point coordinates.
              Since proj4 needs to know the parameters for each projection, I
              checked if the source projection (EPSG:2193) was already defined.
              If not, I defined it using the proj4.defs method.
            </p>
            <div className="max-w-[800px] pt-5 pb-5">
              <div
                className="p-5 rounded-lg overflow-auto"
                style={{ backgroundColor: 'rgb(41,43,46)' }}
              >
                <CopyBlock
                  language="jsx"
                  text={`const sourceProj = 'EPSG:2193' const destProj = 'EPSG:4326'
              
  if (!proj4.defs[sourceProj]){' '}
    {proj4.defs(
    sourceProj,
    '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 
    +x_0=1600000 +y_0=10000000 +datum=WGS84 +units=m +no_defs'
)}`}
                  theme={obsidian}
                />
              </div>
            </div>

            <p className="max-w-[800px]">
              With the projections defined, I used the proj4 function to convert
              the coordinates from NZTM2000 to WGS84 and then once the
              coordinates were in a useable format, I was able to fetch the
              geoJSON from my server, then loop through the features and created
              a marker for each one.
            </p>

            <div className="max-w-[800px] pt-5 pb-5">
              <div
                className="p-5 rounded-lg overflow-auto"
                style={{ backgroundColor: 'rgb(41,43,46)' }}
              >
                <CopyBlock
                  language="jsx"
                  text={`const [longitude, latitude] = proj4(sourceProj, destProj, [ lng, lat, ])
              
fetch('http://localhost:3000/v1/geojson', {
  headers: {
    'Cache-Control': 'max-age=3600', 
  },
})
.then((response) => response.json())
  .then((data) => {
    data.features.forEach((feature) => {
      if (feature.geometry.type === 'Point') {
        const [lng, lat] = feature.geometry.coordinates
        const [longitude, latitude] = proj4(sourceProj, destProj, [
        lng,
        lat,
])`}
                  theme={obsidian}
                />
              </div>
            </div>
            <Image
              src="/blog/topo-map-marker.png"
              alt="topo map marker"
              width={800}
              height={300}
              className="pb-10 pt-5 rounded-lg"
            />
            <p className="max-w-[800px] pb-4">
              I wanted to use the newer, Advanced Marker elements from Google
              but I wasn&apos;t able to get the custom SVG to work quickly so
              I&apos;ve left as is for now. I&apos;m conscious the old Markers
              class has been deprecated so I&apos;ll need to look at updating
              this in the future. I also added a click event to the marker to
              show the name of the feature when clicked which shows up as an
              alert. I could have used a custom overlay to show the name in a
              more user friendly way but this was just a quick test and
              I&apos;ll likely return to it at some point when migrating the
              markers.
            </p>
            <div className="max-w-[800px] pt-5 pb-5">
              <div
                className="p-5 rounded-lg overflow-auto"
                style={{ backgroundColor: 'rgb(41,43,46)' }}
              >
                <CopyBlock
                  language="jsx"
                  text={`const marker = new window.google.maps.Marker({
  map,
  position: { lat: latitude, lng: longitude },
  icon: {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
      <svg> 
        {bunch of svg code to draw the marker}
      </svg>
      ),
  scaledSize: new window.google.maps.Size(34, 34),
  },
})
  
marker.addListener('click', () => {alert(feature.properties.name)`}
                  theme={obsidian}
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold pb-5 pt-10">Up Next</h2>
            <p className="max-w-[800px] pb-3">
              The goal of writing about my process, and building the app in the
              first place, was to challenge myself to learn about new techniques
              and tools, and build something useful.
            </p>
            <p className="max-w-[800px] pb-3">
              In this post, I&apos;ve tried to walk through my process in
              integrating GeoJSON data with Google Maps. By leveraging libraries
              like Proj4 for coordinate conversion and creating a topographical
              overlay with LINZ data, I managed to create a functional map
              component that displays hiking routes and points of interest.
            </p>
            <p className="max-w-[800px] pb-5">
              Being able to see some of New Zealand&apos;s existing trails is
              great, but from my own experiences in the backcountry, I know that
              detail is key. With the bare-bones set up in place, the plan is to
              focus on interactivity. Being able to plan and map your own
              routes, save offline, and share with others along with waypoints
              and real-time updates, community contributions, and feedback would
              all be great inclusions.
            </p>
            <Image
              src="/blog/tracks-api.png"
              alt="tracks api"
              width={800}
              height={300}
              className="pb-10 pt-5 rounded-lg"
            />
            <p className="max-w-[800px] pb-3">
              I found endpoints from DOC to access hut and routes separately.
              These gave back a series of coordinates which I would then be able
              to plot into a line, improving on the single point received from
              the geoJSON file so this would be a likely next step.
            </p>
            <Image
              src="/blog/dashboard.png"
              alt="dashboard"
              width={800}
              height={300}
              className="pb-10 pt-5 rounded-lg"
            />
          </div>

          <div className="text-center pb-5">
            <Link
              href="/projects/trail-keeper/polylines"
              className="text-slate-800 font-semibold hover:text-blue-600 underline"
            >
              Part 2: Converting markers to polylines.
            </Link>
          </div>
        </div>
        <ProjectFooterLinks />
      </div>
    </>
  )
}
