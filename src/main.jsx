import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import global_uz from "./Components/locales/uz/global.json";
import global_en from "./Components/locales/en/global.json";
import global_ru from "./Components/locales/ru/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "uz", // boshlang‘ich til
  resources: {
    uz: { global: global_uz },
    en: { global: global_en },
    ru: { global: global_ru },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
