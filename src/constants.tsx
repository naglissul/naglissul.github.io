import BlogPage from "./pages/blogPage/BlogPage";
import CodePage from "./pages/codePage/CodePage";
import HomePage from "./pages/homePage/HomePage";
import MusicPage from "./pages/musicPages/MusicPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import KonspPage from "./pages/teachPage/KonspPage";
import KorepPage from "./pages/teachPage/KorepPage";
import MgbiPage from "./pages/teachPage/MgbiPage";
import SchoolItPage from "./pages/teachPage/SchoolItPage";
import SchoolMathPage from "./pages/teachPage/SchoolMathPage";
import SchoolPage from "./pages/teachPage/SchoolPage";
import TeachPage from "./pages/teachPage/TeachPage";
import VocabularyPage from "./pages/teachPage/VocabularyPage";
import DeafeningNightPage from "./pages/writePage/DeafeningNightPage";
import WritePage from "./pages/writePage/WritePage";
import SlamPage from "./pages/writePage/SlamPage";
import TheFirstSnowPage from "./pages/writePage/TheFirstSnowPage";

export const POSTS_URL: string =
  "https://raw.githubusercontent.com/naglissul/blog-posts/main/posts/";
export const TUTORIALS_URL: string =
  "https://raw.githubusercontent.com/naglissul/blog-posts/main/tutorials/";

export interface IRoute {
  path: string;
  title: string;
  element: JSX.Element;
}

export const routes: IRoute[] = [
  {
    path: "/",
    element: <HomePage />,
    title: "No Point Writings",
  },
  { path: "/blog/", title: "Blog", element: <BlogPage /> },
  { path: "/code/", title: "Code", element: <CodePage /> },
  {
    path: "/write/",
    title: "Write",
    element: <WritePage />,
  },
  {
    path: "/write/slam/",
    title: "Slam",
    element: <SlamPage />,
  },
  {
    path: "/write/the-first-snow/",
    title: "Pirmasis sniegas",
    element: <TheFirstSnowPage />,
  },
  {
    path: "/write/deafening-night/",
    title: "Kurtinančiai tyli naktis dvipusiame name arba Ką padarysi...",
    element: <DeafeningNightPage />,
  },
  {
    path: "/teach/",
    title: "Teach",
    element: <TeachPage />,
  },
  {
    path: "/teach/mgbi/",
    title: "MGBI",
    element: <MgbiPage />,
  },
  {
    path: "/teach/korep/",
    title: "Korepetitorius",
    element: <KorepPage />,
  },
  {
    path: "/teach/school/",
    title: "Mokykla 5-8 kl.",
    element: <SchoolPage />,
  },
  {
    path: "/teach/school/math/",
    title: "Matematika 5-8 kl.",
    element: <SchoolMathPage />,
  },
  {
    path: "/teach/school/it/",
    title: "IT 5-8 kl.",
    element: <SchoolItPage />,
  },
  {
    path: "/teach/konsp/",
    title: "Konspektai",
    element: <KonspPage />,
  },
  {
    path: "/teach/vocabulary/",
    title: "Žodynas",
    element: <VocabularyPage />,
  },
  {
    path: "/music/",
    title: "Music",
    element: <MusicPage />,
  },
  { path: "*", title: "404", element: <NotFoundPage /> },
];

export const readingsSnow = [
  {
    name: "Pirmasis sniegas. Pirmas skyrius. Klaidžiojimas",
    date: "2022-08-17",
    wordCount: 9960,
    fileName: "pirmasis-sniegas-pirmas-skyrius-klaidziojimas.docx",
  },
];

export const readingsSlam = [
  { name: "Trumpas sapnas", fileName: "1.pdf" },
  { name: "5 dalis. Antras skyrius. Vabalai yra tikri", fileName: "2.pdf" },
  { name: "Pernykštis sniegas. Penktas skyrius. Kelionė", fileName: "3.pdf" },
  { name: "Muzika. Trumpinys", fileName: "4.pdf" },
  { name: "Nespėjau", fileName: "5.pdf" },
  { name: "Smuikas", fileName: "6.pdf" },
  { name: "Trumpas tutorialas, kaip sukurti visatą", fileName: "7.pdf" },
  {
    name: "Pirmasis sniegas. Pirmas skyrius: Klaidžiojimas. 8",
    fileName: "10.pdf",
  },
  { name: "Be košmarų neįdomu", fileName: "8.pdf" },
  { name: "Odė tinkleliui nuo uodų", fileName: "9.pdf" },
  { name: "Dar vienas sapnas", fileName: "11.pdf" },
  { name: "Nelik sapne", fileName: "12.pdf" },
  { name: "Negaliu patikėti (Nelik sapne tęsinys)", fileName: "13.pdf" },
  { name: "Žudyti arba būti nužudytam", fileName: "14.pdf" },
  { name: "Suodžiai", fileName: "15.pdf" },
  { name: "Karštis gaivina", fileName: "16.pdf" },
  { name: "Laikas sugrįžti", fileName: "17.pdf" },
  { name: "Išjunk ir įjunk", fileName: "18.pdf" },
];

export const readingsOther = [
  {
    name: "Saldainiai",
    date: "2020-10-20",
    wordCount: 493,
    fileName: "saldainiai.docx",
  },
];

export const MOBILE_THRESHOLD = 768;
