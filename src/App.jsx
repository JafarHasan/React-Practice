import Counter from "./components/Counter";
import Todos from "./components/Todo";
import Todo2 from "./components/Todo2";
import Gallery from "./components/image_gallery";
import Home from "./components/shopEase/Home";
import { ProductProvider } from "./components/shopEase/contextSwitching/ProductContext";
import Stepper from "./components/Stepper";
import POGHome from "./assets/peopleOfGot/Home";
const App = () => {
  return (
    <>
      <ProductProvider>
        {/* <Home /> */}

      </ProductProvider>
      {/* <Counter /> */}
      {/* <Todo2 /> */}
      {/* <Gallery /> */}
      {/* <Stepper /> */}
      <POGHome />
    </>
  )
}
export default App;