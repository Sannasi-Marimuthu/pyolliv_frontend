import Wrapper from "../components/layout/Wrapper";
import MainHome from "../pages/home/MainHome";
import MetaComponent from "../components/common/MetaComponent";

const metadata = {
  title: "Py lliove || Home",
  description: "Py lliove - Hotel Room Booking",
};

export default function Home() {
  return (
    <>
      <MetaComponent  meta={metadata}  />
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
