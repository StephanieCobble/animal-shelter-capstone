// import React, { useState, useEffect, Component, useRef } from "react";
// import axios from "axios";

// export default function Dropdown({
//   options,
//   id,
//   label,
//   prompt,
//   value,
//   onChange,
// }) {
//   const [pets, setPets] = useState([]);

//   // const [value, setValue] = useState(null)

//   const [open, setOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const ref = useRef(null);

//   useEffect(() => {
//     const getAnimals = async () => {
//       try {
//         let response = await axios.get(`http://127.0.0.1:8000/api/animals/`);
//         setPets(response.data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     getAnimals();
//   }, []);

//   useEffect(() => {
//     document.addEventListener("click", close);
//     return () => document.removeEventListener("click", close);
//   }, []);

//   function close(e) {
//     setOpen(e && e.target === ref.current);
//   }

// //   function filter(options) {
// //     return options.filter(
// //       (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
// //     );
// //   }

// //     function filter(options) {
// //       options.filter((option) => {
// //           if(option[label].toLowerCase().includes(query.toLowerCase())){
// //           return option;
// //       }
// //   })
// // }

//   function displayValue() {
//     if (query.length > 0) return query;
//     if (value) return value[label];
//     return "";
//   }

//   return (
//     <div className="dropdown">
//       <div className="control" onClick={() => setOpen((prev) => !prev)}>
//         <div className="selected-value">
//           <input
//             type="text"
//             ref={ref}
//             placeholder={value ? value[label] : prompt}
//             value={displayValue()}
//             onChange={(e) => {
//               setQuery(e.target.value);
//               onChange(null);
//             }}
//             onClick={() => setOpen((prev) => !prev)}
//           />
//         </div>
//         <div className={`arrow ${open ? "open" : null}`} />
//       </div>
//       <div className={`options ${open ? "open" : null}`}>
//         {options.filter((option) => {
//           if(option[label].toLowerCase().includes(query.toLowerCase())){
//           return option;
//       }
//   }).map((option) => (
//           <div
//             key={option[id]}
//             className={`option ${value === option ? "selected" : null}`}
//             onClick={() => {
//               setQuery("");
//               onChange(option);
//               setOpen(false);
//               value = { options };
//             }}
//           >
//             {option[label]}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
