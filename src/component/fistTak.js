// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { CircularProgress } from "@material-ui/core";
// import { setApiData, findById } from "../src/app/actions/Actions";
// import { useSelector, useDispatch } from "react-redux";
// import { Button } from "@material-ui/core";
// import "./App.css";
// import PersonCard from "./component/PersonCard";

// const App = () => {
//   const { apidata } = useSelector((state) => state.taskReducer);
//   const dispatch = useDispatch();

//   const [loading, setLoading] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     const infodata = await axios.get("https://reqres.in/api/users?page=1");
//     dispatch(setApiData(infodata.data.data));
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <PersonCard />
//       {loading ? (
//         <CircularProgress color="secondary" size={104} />
//       ) : (
//         <h1>Please Click on Any Button</h1>
//       )}

//       <div className="page-div">
//         {apidata?.map((place, i) => (
//           <div className="page-idx" key={i}>
//             <Button
//               variant="contained"
//               key={i}
//               onClick={() => dispatch(findById(i))}
//             >
//               {i + 1}
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
