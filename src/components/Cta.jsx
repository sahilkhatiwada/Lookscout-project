/* eslint-disable react/no-unknown-property */
import React from "react";

const Cta = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-[32px] font-semibold tracking-tight leading-[42px] md:text-5xl xl:text-6xl dark:text-white">
            Demonstrate branding consequently think outside
          </h1>

          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            consequatur ab tempora animi numquam impedit. Nam natus suscipit
            iusto iure cupiditate dolorum, officiis veritatis placeat!
          </p>
          <ul class=" list-image-[url(check.png)] max-w-2xl ml-6 mb-6 font-inter font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            <li>Enterprise-grade security</li>
            <li>99.9% guaranteed uptime SLA</li>
            <li>Designated customer success team</li>
          </ul>

          <a
            href="#"
            className="flex flex-col items-center  w-[150px] h-[50px] justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Start now
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex mt-10 md:flex:item-center">
          <img src="./Photo.png" alt="moc"></img>
        </div>
      </div>
    </section>
    // <section className="container mx-auto md:flex-col items-center sm:flex-1">
    //   <div className="bg-white flex justify-center items-center lg:m-10 md:m-5 lg:ml-10 grid-cols-6">
    //     <div className="w-full  p-5 lg:w-1/2  max-w-screen-xl flex flex-col space-y-5 items justify-center ">
    //       <h1 className="text-3xl font-bold text-gray-900 items-center ml-20">
    //         Demonstrate branding consequently think outside
    //       </h1>
    //       <p className="mt-4 text-gray-500 items-center ml-20">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, cum
    //         harum! Tempore exercitationem similique, non explicabo modi
    //         inventore totam. Pariatur!
    //       </p>
    //       <div className="flex items-center ml-20">
    //         <svg
    //           width="18px"
    //           height="18px"
    //           viewBox="-4.25 -4.25 33.50 33.50"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //           stroke="#0000FF"
    //           className=""
    //         >
    //           <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
    //           <g
    //             id="SVGRepo_tracerCarrier"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           ></g>
    //           <g id="SVGRepo_iconCarrier">
    //             <path
    //               d="M5.5 12.5L10.167 17L19.5 8"
    //               stroke="#000000"
    //               strokeWidth="1.4000000000000001"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             ></path>
    //           </g>
    //         </svg>
    //         <p className="mt-4 text-gray-500">
    //           Enterprise-grade security and compliance.
    //         </p>
    //       </div>

    //       <div className="flex items-center ml-20">
    //         <svg
    //           width="18px"
    //           height="18px"
    //           viewBox="-4.25 -4.25 33.50 33.50"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //           stroke="#0000FF"
    //           className="mr-2 mt-5"
    //         >
    //           <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
    //           <g
    //             id="SVGRepo_tracerCarrier"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           ></g>
    //           <g id="SVGRepo_iconCarrier">
    //             <path
    //               d="M5.5 12.5L10.167 17L19.5 8"
    //               stroke="#000000"
    //               strokeWidth="1.4000000000000001"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             ></path>
    //           </g>
    //         </svg>
    //         <p className="mt-4 text-gray-500">
    //           Enterprise-grade security and compliance.
    //         </p>
    //       </div>

    //       <div className="flex items-center ml-20">
    //         <svg
    //           width="18px"
    //           height="18px"
    //           viewBox="-4.25 -4.25 33.50 33.50"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="mr-2 mt-2  text-blue-500"
    //         >
    //           <g id="SVGRepo_bgCarrier" strokeWidth="1"></g>
    //           <g
    //             id="SVGRepo_tracerCarrier"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           ></g>
    //           <g id="SVGRepo_iconCarrier">
    //             <path
    //               d="M5.5 12.5L10.167 17L19.5 8"
    //               stroke="#000000"
    //               strokeWidth="1.4000000000000001"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             ></path>
    //           </g>
    //         </svg>
    //         <p className="mt-3 text-gray-500">
    //           Enterprise-grade security and compliance.
    //         </p>
    //       </div>

    //       <button
    //         type="button"
    //         className="mt-7 flex w-[200px] h-100 items-center justify-center px-7 py-1 mx-1 my-2 ml-20 border border-transparent text-base  rounded-lg text-white bg-primary-600 hover:bg-primary-700"
    //       >
    //         Start now
    //       </button>
    //     </div>

    //     <div className="mt-10 lg:mt-5 p-5 lg:w-1/2 lg:m-20 lg:pl-10 lg:flex lg:flex-row   items-center  justify-center  ">
    //       <img
    //         src="./Photo.png"
    //         alt="photo"
    //         className="w-full lg:w-2/4 rounded-lg mt-5 lg:mt-0"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Cta;
