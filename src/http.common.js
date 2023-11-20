import axios from "axios";

const http = axios.create({
  baseURL: "https://652ae2294791d884f1fd76d0.mockapi.io",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// http.interceptors.request.use(
//   (config) => {
//     // const dtoUser: string | any = localStorage.getItem('dtoUser');
//     //   return dtoUser !== null || dtoUser === undefined ? JSON.parse(dtoUser) : undefined;

//     const dtoUser = JSON.parse(localStorage.getItem("dtoUser") as any);
//     if (!config) {
//       config = {
//         withCredentials: true,
//         //crossorigin: true,
//         // "Access-Control-Allow-Origin": "*",
//       };
//     }
//     if (!config.headers) {
//       config.headers = {};
//     }
//     if (dtoUser) {
//       config.headers["x-access-token"] = dtoUser.Token;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
// http.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // whatever you want to do with the error
//     if (error.response.status === 401 || error.response.status === 403) {
//       window.location.href = "/login";
//     } else {
//       console.log(error.response.status);
//       throw error;
//     }
//   }
//);
export default http;