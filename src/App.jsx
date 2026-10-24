import Counter from "./components/Counter";
import Todos from "./components/Todo";
import Todo2 from "./components/Todo2";
import Gallery from "./components/image_gallery";
import Home from "./components/shopEase/Home";
import { ProductProvider } from "./components/shopEase/contextSwitching/ProductContext";
const App = () => {
  return (
    <>
      <ProductProvider>
        <Home />

      </ProductProvider>
      {/* <Counter /> */}
      {/* <Todo2 /> */}
      {/* <Gallery /> */}
    </>
  )
}
export default App;