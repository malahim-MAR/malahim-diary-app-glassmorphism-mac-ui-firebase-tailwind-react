// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addToDiary } from "../redux/reducer/DataSlice";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "../lib/firebase";

// const InputForm = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [noteType, setNoteType] = useState("General");
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(addToDiary({ diaryTitle: title, diaryContent: content }));
//     setTitle("");
//     setContent("");
//     document.getElementById("my_modal_1").close();
//     try {
//       await addDoc(collection(db, "MyNotes"), {
//         username: "Malahim",
//         noteTitle: title,
//         noteContent: content,
//         typeOfNote: noteType,
//         noteTime: serverTimestamp(),
//       });
//     } catch {
//       console.log("Error Occured");
//     } finally {
//       console.log("Proccesing Done ");
//     }
//   };

//   // const addToNote = async () => {
//   //   try {
//   //     await addDoc(collection(db, "MyNotes"), {
//   //       username: 'Malahim',
//   //       noteTitle: title,
//   //       noteContent: content,
//   //       noteTime: serverTimestamp(),
//   //     });
//   //   }
//   //   catch {
//   //     console.log("Error Occured")
//   //   }
//   //   finally {
//   //     console.log('Proccesing Done ')
//   //   }

//   // }
//   console.log(noteType);
//   return (
//     <>
//       <button
//         className="btn bg-yellow-500 hover:bg-yellow-600 border-0 text-gray-900 shadow-md w-full font-medium"
//         onClick={() => document.getElementById("my_modal_1").showModal()}
//       >
//         + New Note
//       </button>

//       {/* <dialog id="my_modal_1" className="modal">
//         <div className="modal-box max-w-2xl p-0 rounded-lg shadow-xl relative top-20 bg-gray-800 border border-gray-700">
//           <form onSubmit={handleSubmit}>
//             <div className="p-5 pb-3">
//               <input
//                 required
//                 value={title}
//                 type="text"
//                 placeholder="Title"
//                 className="w-full px-0 text-lg font-semibold placeholder-gray-500 bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-yellow-500 focus:ring-0 text-gray-100"
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>

//             <div className="p-5 pt-0">
//               <textarea
//                 required
//                 value={content}
//                 placeholder="Take a note..."
//                 rows={4}
//                 className="w-full px-0 placeholder-gray-500 bg-transparent border-0 resize-none focus:outline-none focus:ring-0 text-gray-200"
//                 onChange={(e) => setContent(e.target.value)}
//               />
//             </div>

//             <div className="flex justify-end p-3 bg-gray-700 rounded-b-lg">
//               <div className="space-x-2">
//                 <button
//                   type="button"
//                   className="btn bg-gray-600 hover:bg-gray-500 border-0 text-gray-200"
//                   onClick={() => document.getElementById("my_modal_1").close()}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn bg-yellow-500 hover:bg-yellow-600 border-0 text-gray-900 font-medium"
//                   disabled={!title.trim() && !content.trim()}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>

//         <form method="dialog" className="modal-backdrop bg-black/70">
//           <button>close</button>
//         </form>
//       </dialog> */}
//       <dialog id="my_modal_1" className="modal">
//         <div className="modal-box max-w-2xl p-0 rounded-lg shadow-xl relative top-20 bg-gray-800 border border-gray-700">
//           <form onSubmit={handleSubmit}>
//             {/* Title Input */}
//             <div className="p-5 pb-0">
//               <input
//                 required
//                 value={title}
//                 type="text"
//                 placeholder="Title"
//                 className="w-full px-0 text-lg font-semibold placeholder-gray-500 bg-transparent border-0 border-b border-gray-600 focus:outline-none focus:border-yellow-500 focus:ring-0 text-gray-100"
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>

//             {/* Content Textarea */}
//             <div className="p-5 pt-0">
//               <textarea
//                 required
//                 value={content}
//                 placeholder="Take a note..."
//                 rows={4}
//                 className="w-full px-0 placeholder-gray-500 bg-transparent border-0 resize-none focus:outline-none focus:ring-0 text-gray-200"
//                 onChange={(e) => setContent(e.target.value)}
//               />
//             </div>

//             {/* Note Type Selection - NEW SECTION */}
//             <div className="p-5 pb-3">
//               <label className="block text-sm font-medium text-gray-400 mb-1">
//                 Note Type:
//               </label>
//               <select
//                 value={noteType}
//                 onChange={(e) => setNoteType(e.target.value)}
//                 className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-yellow-500"
//               >
//                 <option value="General">General</option>
//                 <option value="Professional">Professional</option>
//                 <option value="Grocery">Grocery</option>
//                 <option value="Shopping">Shopping</option>
//                 <option value="Ideas">Ideas</option>
//                 <option value="Daily">Daily</option>
//                 <option value="Event">Event</option>
//                 <option value="IMPORTANT">IMPORTANT</option>
//               </select>
//             </div>
//             {/* Footer Buttons */}
//             <div className="flex justify-end p-3 bg-gray-700 rounded-b-lg">
//               <div className="space-x-2">
//                 <button
//                   type="button"
//                   className="btn bg-gray-600 hover:bg-gray-500 border-0 text-gray-200"
//                   onClick={() => document.getElementById("my_modal_1").close()}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn bg-yellow-500 hover:bg-yellow-600 border-0 text-gray-900 font-medium"
//                   disabled={!title.trim() && !content.trim()}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>

//         <form method="dialog" className="modal-backdrop bg-black/70">
//           <button>close</button>
//         </form>
//       </dialog>
//     </>
//   );
// };

// export default InputForm;
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDiary } from "../redux/reducer/DataSlice";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { getAuth } from "firebase/auth";

const InputForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noteType, setNoteType] = useState("General");
  const dispatch = useDispatch();

  const auth = getAuth();
  const user = auth.currentUser;
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addToDiary({ diaryTitle: title, diaryContent: content }));
    setTitle("");
    setContent("");
    document.getElementById("my_modal_1").close();
    try {
      await addDoc(collection(db, "MyNotes"), {
        userEmail: user.email,
        noteTitle: title,
        noteContent: content,
        typeOfNote: noteType,
        noteTime: serverTimestamp(),
      });
    } catch {
      console.log("Error Occured");
    } finally {
      console.log("Processing Done");
    }
  };

  return (
    <>
      <button
        className="btn bg-yellow-500 hover:bg-yellow-600 border-0 text-gray-900 shadow-md w-full font-medium py-3 text-lg"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        + New Note
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-2xl p-0 rounded-lg shadow-xl bg-gray-800 border border-gray-700">
          <form onSubmit={handleSubmit} className="flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-lg text-gray-200">
                Create New Note
              </h3>
            </div>

            {/* Main Content */}
            <div className="flex flex-col gap-4 p-5">
              {/* Title Input */}
              <div>
                <input
                  required
                  value={title}
                  type="text"
                  placeholder="Title"
                  className="w-full px-3 py-2 text-lg font-semibold placeholder-gray-500 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-100"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Content Textarea */}
              <div>
                <textarea
                  required
                  value={content}
                  placeholder="Take a note..."
                  rows={4}
                  className="w-full px-3 py-2 placeholder-gray-500 bg-gray-700 border border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-200"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              {/* Note Type Selection */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Note Type:
                  </label>
                  <select
                    value={noteType}
                    onChange={(e) => setNoteType(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="General">General</option>
                    <option value="Professional">Professional</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Ideas">Ideas</option>
                    <option value="Daily">Daily</option>
                    <option value="Event">Event</option>
                    <option value="IMPORTANT">IMPORTANT</option>
                  </select>
                </div>

                {/* Empty space for alignment */}
                <div className="col-span-1"></div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end p-4 bg-gray-750 border-t border-gray-700 rounded-b-lg">
              <div className="flex gap-3">
                <button
                  type="button"
                  className="btn bg-gray-600 hover:bg-gray-500 border-0 text-gray-200 px-6 py-2 rounded-md"
                  onClick={() => document.getElementById("my_modal_1").close()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-yellow-500 hover:bg-yellow-600 border-0 text-gray-900 font-medium px-6 py-2 rounded-md disabled:bg-yellow-700 disabled:cursor-not-allowed"
                  disabled={!title.trim() && !content.trim()}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Modal Backdrop */}
        <form method="dialog" className="modal-backdrop bg-black/70">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default InputForm;
