import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Stable0xcomByHtmltodesign from "./pages/Stable0xcomByHtmltodesign";
import Stable0xcomByHtmltodesign1 from "./pages/Stable0xcomByHtmltodesign1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/stable0xcom-by-htmltodesign-free-version-08072024-231918-gmt530":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Stable0xcomByHtmltodesign />} />
      <Route
        path="/stable0xcom-by-htmltodesign-free-version-08072024-231918-gmt530"
        element={<Stable0xcomByHtmltodesign1 />}
      />
    </Routes>
  );
}
export default App;
