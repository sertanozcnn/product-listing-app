import { Provider } from "react-redux";
import { store } from "./app/store";
import ProductList from "./pages/ProductList";
import { useState, useEffect } from "react";
import i18n from "./i18n";

const App = () => {
  const [lang, setLang] = useState("en");
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    i18n.changeLanguage(lang);
    setCurrency(lang === "tr" ? "TRY" : "USD");
  }, [lang]);

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50 p-4">
        {/* Dil seçimi UI kaldırılmış */}
        <ProductList lang={lang} setLang={setLang} currency={currency} />
      </div>
    </Provider>
  );
};

export default App;
