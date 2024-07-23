import "./App.css";
import LayOut from "./component/common/layout/LayOut";
import Login from "./component/login/Login";

function App() {
  return <>{localStorage.getItem("aToken") ? <LayOut /> : <Login />}</>;
}

export default App;
