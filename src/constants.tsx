import BlogPage from "./pages/blogPage/BlogPage";
import CodePage from "./pages/codePage/CodePage";
import HomePage from "./pages/homePage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import TeachPage from "./pages/teachPage/TeachPage";
import WritePage from "./pages/writePage/WritePage";

export const routes = [
  { path: "/", element: <HomePage />, name: "Home" },
  { path: "/blog", element: <BlogPage />, name: "Blog" },
  { path: "/code", element: <CodePage />, name: "Code" },
  { path: "/write", element: <WritePage />, name: "Write" },
  { path: "/teach", element: <TeachPage />, name: "Teach" },
  { path: "*", element: <NotFoundPage />, name: "NotFound" },
];
