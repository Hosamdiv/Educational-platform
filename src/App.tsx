import { RouterProvider } from "react-router";
import router from "./routes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vm] lg:px-[9vm]">
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );

};

export default App;


