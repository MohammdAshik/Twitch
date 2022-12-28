import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="bg-blue-200/20">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
