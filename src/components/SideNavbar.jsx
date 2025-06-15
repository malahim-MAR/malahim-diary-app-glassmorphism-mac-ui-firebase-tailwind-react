// import React from "react";
// import InputForm from "./InputForm";
// import { Link } from "react-router";

// const SideNavbar = () => {
//   return (
//     <div className="fixed top-0 left-0 h-full w-full md:w-80 bg-gray-800 shadow-xl z-10 transform md:translate-x-0 transition-transform duration-300 border-r border-gray-700">
//       <div className="p-4">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-2xl font-bold text-yellow-400">
//             Malahim's Persnal Diary
//           </h1>
//           <label
//             htmlFor="my-drawer-2"
//             className="btn btn-circle btn-ghost md:hidden text-gray-300"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </label>
//         </div>

//         <div className="mb-6">
//           <InputForm />
//         </div>

//         <div className="form-control mb-6">
//           <input
//             type="text"
//             placeholder="Search notes..."
//             className="input w-full rounded-full bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400 focus:bg-gray-600 focus:ring-1 focus:ring-yellow-500"
//           />
//         </div>

//         <ul className="menu">
//           <li className="menu-title">
//             <span className="text-gray-400">All Note Types</span>
//             {/* <p>Sort By Cateogory</p> */}
//           </li>
//           <li>
//             <a className="hover:bg-gray-700 rounded-lg font-bold text-gray-300">
//               {/* <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-yellow-400"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
//                   clipRule="evenodd"
//                 />
//               </svg> */}
//               Sort By Category
//             </a>
//           </li>
//           <li>
//             <Link to={"/general-notes"}>
//               <a className="flex gap-2  hover:bg-gray-700 rounded-lg text-gray-300">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-blue-400"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 General
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link to={"/important-notes"}>
//               <a className="flex gap-2  hover:bg-gray-700 rounded-lg text-gray-300">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-blue-400"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 IMPORTANT
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link to={"/professional-notes"}>
//               <a className="flex gap-2 hover:bg-gray-700 rounded-lg text-gray-300">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-green-400"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 Work
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link to={"/shopping-notes"}>
//               <a className="flex gap-2 hover:bg-gray-700 rounded-lg text-gray-300">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-red-400"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 Shopping
//               </a>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SideNavbar;
import React from "react";
import InputForm from "./InputForm";
import { Link } from "react-router";

const SideNavbar = () => {
  return (
    <div className="h-full w-full bg-gray-800 shadow-xl">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-yellow-400">
            Malahim's Personal Diary
          </h1>
          {/* Close button for mobile drawer */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-circle btn-ghost md:hidden text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
        </div>

        <div className="mb-6">
          <InputForm />
        </div>

        <div className="form-control mb-6">
          <input
            type="text"
            placeholder="Search notes..."
            className="input w-full rounded-full bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400 focus:bg-gray-600 focus:ring-1 focus:ring-yellow-500"
          />
        </div>

        <ul className="menu">
          <li className="menu-title">
            <span className="text-gray-400">All Note Types</span>
          </li>
          
          {/* All Categories */}
          <li>
            <Link to={"/general-notes"}>
              <a className="flex gap-2 hover:bg-gray-700 rounded-lg text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                General
              </a>
            </Link>
          </li>
          
          <li>
            <Link to={"/professional-notes"}>
              <a className="flex gap-2 hover:bg-gray-700 rounded-lg text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Professional
              </a>
            </Link>
          </li>
          
          <li>
            <Link to={"/grocery-notes"}>
              <a className="flex gap-2 hover:bg-gray-700 rounded-lg text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                Grocery
              </a>
            </Link>
          </li>
          
          <li>
            <Link to={"/shopping-notes"}>
              <a className="flex gap-2 hover:bg-gray-700 rounded-lg text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Shopping
              </a>
            </Link>
          </li>
          
          <li>
            <Link to={"/ideas-notes"}>
              <a className="flex gap-2 hover:bg-gray-700 rounded-lg text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
                Ideas
              </a>
            </Link>
          </li>
          
          <li>
            <Link to={"/daily-notes"}>
              <a className="flex gap-2 hover:bg-gray-700 rounded-lg text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Daily
              </a>
            </Link>
          </li>
          
          <li>
            <Link to={"/event-notes"}>
              <a className="flex gap-2 hover:bg-gray-700 rounded-lg text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                Event
              </a>
            </Link>
          </li>
          
          <li>
            <Link to={"/important-notes"}>
              <a className="flex gap-2 hover:bg-gray-700 rounded-lg text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                IMPORTANT
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;