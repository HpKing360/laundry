// import React, { useState } from "react";
// import "./login.css";
// import axios from "axios";
// import Cookies from "js-cookie";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     let data = {
//       email,
//       password,
//     };
//     axios
//       .post("/api/admin/adminlogin", data, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((user) => {
//         if (user.data.message === "Email doesn't exist.") {
//           setMessage(user.data.message);
//         } else if (user.data.message === "Password doesn't match.") {
//           setMessage(user.data.message);
//         } else {
//           // Set token
//           localStorage.setItem("aToken", user.data.token);
//           localStorage.setItem("aID", user.data.id);
//           window.location.href = "/dashboard";
//         }
//       })
//       .catch((error) => {
//         setMessage("Something wrong.");
//       });
//   };

//   return (
//     <>
//       <section className="login">
//         <div class="login-form text-center">
//           {localStorage.getItem("aToken") ? (
//             (window.location.href = "/")(<h3>Already Logged In</h3>)
//           ) : (
//             <form onSubmit={submitHandler}>
//               <p style={{ color: "red" }}>{message && message}</p>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email..."
//                 required
//               />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password..."
//                 required
//               />
//               <input
//                 type="submit"
//                 name="submit"
//                 value="Login"
//                 class="btn-primary"
//               />
//             </form>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin@123");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Directly setting token and user ID for bypassing login
    localStorage.setItem("aToken", "fakeToken12345");
    localStorage.setItem("aID", "fakeUserID12345");
    window.location.href = "/dashboard";
  };

  return (
    <>
      <section className="login">
        <div className="login-form text-center">
          {localStorage.getItem("aToken") ? (
            <h3>Already Logged In</h3> && (window.location.href = "/dashboard")
          ) : (
            <form onSubmit={submitHandler}>
              <p style={{ color: "red" }}>{message && message}</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email..."
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password..."
                required
              />
              <input
                type="submit"
                name="submit"
                value="Login"
                className="btn-primary"
              />
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Login;

