import { RouterProvider } from "react-router";
import router from "./routes";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vm] lg:px-[9vm]">
        <ToastContainer/>
        <RouterProvider router={router} />
        <Footer />
      </div>
    </>
  );

};

export default App;


