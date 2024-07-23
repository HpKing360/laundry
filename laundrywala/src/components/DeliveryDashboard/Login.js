// import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import loginPic from "../../images/log.svg";
// import axios from "axios";

// const Login = () => {
//   const [toggled] = useState(false);
//   const buttonClass = toggled ? "containerz sign-up-mode" : "containerz";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     let data = {
//       email,
//       password,
//     };
//     axios
//       .post(`/api/admin/manlogin`, data, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((user) => {
//         if (user.data.message === "Email doesn't exist.") {
//           Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Email doesn't exist.",
//           });
//         } else if (user.data.message === "Password doesn't match.") {
//           Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Password doesn't Match.",
//           });
//         } else {
//           // Set token
//           localStorage.setItem("dToken", user.data.token);
//           localStorage.setItem("dID", user.data.id);
//           window.location.href = "/delivery";
//         }
//       })
//       .catch((error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Something wrong.",
//         });
//       });
//   };

//   return (
//     <section id="Amazing-Login-Page">
//       <div className={buttonClass}>
//         <div className="forms-containerz">
//           <div className="signin-signup">
//             <form className="sign-in-form" onSubmit={submitHandler}>
//               <h2
//                 className="title"
//                 style={{ fontFamily: "Handlee, cursive", color: "#1665a0" }}
//               >
//                 Delivery Man Sign in
//               </h2>

//               <div className="input-field">
//                 <FontAwesomeIcon icon={faEnvelope} className="input-fieldi" />
//                 <input
//                   type="text"
//                   name="email"
//                   id="email"
//                   autoComplete="off"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder=" Your Email"
//                 />
//               </div>

//               <div className="input-field">
//                 <FontAwesomeIcon icon={faLock} className="input-fieldi" />

//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   autoComplete="off"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                 />
//               </div>

//               <button
//                 className="btnz"
//                 type="submit"
//                 name="signin"
//                 id="signin"
//                 value="Log In"
//               >
//                 SIGN IN
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="panels-container">
//           <div className="panel left-panel">
//             <img src={loginPic} className="image" alt="" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Swal from "sweetalert2";
import loginPic from "../../images/log.svg";
import axios from "axios";

const Login = () => {
  const [toggled] = useState(false);
  const buttonClass = toggled ? "containerz sign-up-mode" : "containerz";

  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin@123");

  const submitHandler = (e) => {
    e.preventDefault();

    // Directly setting token and user ID for bypassing login
    localStorage.setItem("dToken", "fakeToken12345");
    localStorage.setItem("dID", "fakeUserID12345");
    window.location.href = "/delivery";
  };

  return (
    <section id="Amazing-Login-Page">
      <div className={buttonClass}>
        <div className="forms-containerz">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={submitHandler}>
              <h2
                className="title"
                style={{ fontFamily: "Handlee, cursive", color: "#1665a0" }}
              >
                Delivery Man Sign in
              </h2>

              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="input-fieldi" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" Your Email"
                />
              </div>

              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="input-fieldi" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <button
                className="btnz"
                type="submit"
                name="signin"
                id="signin"
                value="Log In"
              >
                SIGN IN
              </button>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <img src={loginPic} className="image" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
