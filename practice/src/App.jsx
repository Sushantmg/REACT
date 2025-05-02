import { createBrowserRouter,Link,RouterProvider,} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";

const router =createBrowserRouter([
  {
    path: "/",
    element:(
      <>
      <Header />
      <Home />
      </>
    ),
  },
  {
    path: "/about",
    element:(
      <>
      <Header />
      <About />
      </>
    ),
  },
  {
    path: "/contact",
    element:(
      <>
      <Header />
      <Contact />
      </>
    ),
  },
]);

function App() {
 
  return (
    <>
     <RouterProvider
      router={router} />
     
    </>
  );
}

export default App;
