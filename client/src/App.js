import { Provider } from "react-redux";
import { store } from "./app/store";
import ProductList from "./pages/ProductList";

const App = () => (
  <Provider store={store}>
    <div className="min-h-screen bg-gray-50">
      <ProductList />
    </div>
  </Provider>
);

export default App;
