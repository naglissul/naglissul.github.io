import BlogPage from "./pages/blogPage/BlogPage";
import CodePage from "./pages/codePage/CodePage";
import HomePage from "./pages/homePage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import TeachPage from "./pages/teachPage/TeachPage";
import WritePage from "./pages/writePage/WritePage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    name: "Home",
    title: "No Point Writings",
  },
  { path: "/blog", element: <BlogPage />, name: "Blog", title: "Blog" },
  { path: "/code", element: <CodePage />, name: "Code", title: "Code" },
  { path: "/write", element: <WritePage />, name: "Write", title: "Write" },
  { path: "/teach", element: <TeachPage />, name: "Teach", title: "Teach" },
  { path: "*", element: <NotFoundPage />, name: "NotFound", title: "404" },
];

export const readingsSniegas = [
  {
    name: "Pirmasis sniegas. Pirmas skyrius. Klaidžiojimas",
    date: "2022-08-17",
    wordCount: 9960,
    fileName: "pirmasis-sniegas-pirmas-skyrius-klaidziojimas.docx",
  },
];

export const readingsSlam = [
  {
    name: "Trumpas sapnas",
    date: "2021-11-25",
    wordCount: 368,
    fileName: "trumpas-sapnas.docx",
  },
];
export const readingsOther = [
  {
    name: "Saldainiai",
    date: "2020-10-20",
    wordCount: 493,
    fileName: "saldainiai.docx",
  },
];
