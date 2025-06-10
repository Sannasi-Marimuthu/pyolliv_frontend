import Aos from "aos";
import { useEffect } from "react";
import SrollTop from "./components/common/ScrollTop";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import "aos/dist/aos.css";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import Home from "./pages";
import LogIn from "./pages/others/login";
import SignUp from "./pages/others/signup";
import HotelList from "./pages/hotel/hotel-list/index";
import HotelSingleDynamic from "./pages/hotel/hotel-single";
import Contact from "./pages/others/contact";
import MeetHome from "./pages/home/ollivMeet/MeetHome";
import MeetList from "./pages/meet/meet-list";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main>
      {/* <Provider> */}
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<LogIn />} />
              <Route path="hotelList" element={<HotelList />} />
              <Route path="hotel-single/:id" element={<HotelSingleDynamic />} />
              <Route path="contact" element={<Contact />} />
              <Route path="olliv-meet" element={<MeetHome />} />
              <Route path="meetList" element={<MeetList />} />
            </Route>
          </Routes>
          <ScrollTopBehaviour />
        </BrowserRouter>

        <SrollTop />
      </Provider>
    </main>
  );
}

export default App;
