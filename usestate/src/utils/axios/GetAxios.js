// import React from "react";
// import axios from "axios";
// import { baseUrl } from "../Constants";

// export default class PersonList extends 
//   const [access_token, setAccess_token] = useState(window.localStorage.getItem("token"));
//   const [data, setData] = useState([]);

// componentDidMount() {
//     const handleMembers = () => {
//     axios
//         .get(`${baseUrl}/admins/get-members/all`, {
//         headers: {
//             Authorization: `token ${access_token}`,
//         },
//         })
//         .then((response) => {
//             console.log("response: ", response.data.members);
//             setData(response.data.members);
//         })
//         .catch((error) => {
//           console.log("error: ", error);
//         });
//     };
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.persons.map((person) => (
//           <li key={person.id}>{person.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }
