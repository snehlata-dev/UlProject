import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

// import React from "react";
// import style from "../Css/main.module.css";
// export default function () {
//   return (
//     <div>
//       <div className={style.search}></div>
//       <div className={style.section}>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <form>
//                 <div className="searchBar">
//                   <div className="searchBar1">
//                     <div className="form-group row">
//                       <input
//                         className="form-control"
//                         id="Example1"
//                         placeholder="Enter barber's ID or name"
//                         type="text"
//                       ></input>
//                     </div>
//                   </div>
//                   <div className="searchBar">
//                     <div className="form-group">
//                       <input className="form-control" type="text"></input>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
