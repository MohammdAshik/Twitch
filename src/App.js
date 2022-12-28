import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="bg-primary/5">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
