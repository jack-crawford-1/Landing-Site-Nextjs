'use client'

import '../../../src/app/globals.css'
import AxiosCode from '../../../src/app/components/blog/CodeBlocks/AxiosCode'
import UseQueryCode from '../../../src/app/components/blog/CodeBlocks/UseQueryCode'

function ComparingApis() {
  return (
    <>
      <div className="flex flex-col justify-center md:w-1/2 md:content-center">
        <div className="flex flex-col p-10 m-10 leading-7	md:bg-gray-200 md:content-center md:p-10">
          <h1 className="font-extrabold text-3xl m-2">
            Comparing Data Fetching Techniques
          </h1>
          <p className="m-1">
            6 May 2024 <span className="m-1">Jack</span>
          </p>
          <div className="p-3">
            <p className="m-3">
              In the vast landscape of React development, fetching data from
              APIs is a cornerstone of modern web applications. Whether
              you&apos;re building a simple blog or a complex enterprise-level
              application, the choice of how to retrieve data can significantly
              impact your project&apos;s architecture, performance, and
              maintainability.
            </p>
          </div>
          <div>
            <div className="p-3">
              <h2 className="font-bold m-2 text-2xl">
                React Query&apos;s useQuery Hook
              </h2>

              <p className="m-3">
                React Query has rapidly gained popularity among React developers
                for good reasons. It manages server state in your application
                seamlessly. By abstracting the fetching logic, it allows
                developers to focus more on rendering logic and less on handling
                network states and caching.
              </p>
              <UseQueryCode />
            </div>
            <h3 className="font-bold ml-4 text-2xl">Advantages</h3>
            <ul className="m-3">
              <li className="m-2">
                <span className="font-semibold"> Built-in Caching:</span> React
                Query automatically caches your requests, which can dramatically
                improve performance by reducing the number of server requests.
              </li>
              <li className="m-2">
                <span className="font-semibold">Background Data Fetching:</span>
                This feature keeps your application&apos;s data up to date
                without significant user interface blockage, enhancing the user
                experience.
              </li>
              <li className="m-2">
                <span className="font-semibold">
                  Automatic Retries and Refetching:
                </span>
                React Query provides robust mechanisms for retrying failed
                requests and refetching data on component remounts or at regular
                intervals
              </li>
            </ul>
          </div>
          <div className="p-3">
            <h2 className="font-bold m-2 text-2xl">Axios for Data Fetching</h2>

            <p className="m-3">
              Axios is a promise-based HTTP client that works both in the
              browser and in Node.js environments. It&apos;s known for its
              easy-to-use API and broad set of features.
            </p>
            <AxiosCode />
          </div>
          <div className="p-3">
            <h2 className="font-bold m-2 text-2xl">Native Fetch API</h2>
            <p className="m-3">
              The Fetch API is a modern way to make network requests in the
              browser. It is built into most modern browsers and replaces older
              methods like the XMLHttpRequest.
            </p>
          </div>
          <div className="p-3">
            <h2 className="font-bold m-2 text-2xl">Conclusion </h2>
            <p className="m-3">
              The choice between useQuery, Axios, and Fetch will largely depend
              on your specific needs. If you&apos;re looking for a robust
              solution with advanced features like caching and automatic
              updating, React Query is an excellent choice. For scenarios where
              you need advanced HTTP features like request cancellation or
              progress tracking, Axios will serve you well. However, if
              simplicity and minimal dependencies are paramount, the Fetch API
              offers a clean and efficient solution.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComparingApis
