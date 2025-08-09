import { RouterProvider } from "react-router";
import router from "./routes";

const App = () => {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vm] lg:px-[9vm]">
        <RouterProvider router={router} />
      </div>
    </>
  );

};

export default App;


