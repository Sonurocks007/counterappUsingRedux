import Counter from "./components/Counter";
import { Mystore } from "./redux/Mystore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Mystore} >
      <Counter/>
    </Provider>
  )
}
export default App;