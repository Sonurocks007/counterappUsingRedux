import Counter from "./components/Counter";
import { Store } from "./redux/Store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={Store} >
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      <Counter/>
    </Provider>
  )
}
export default App;