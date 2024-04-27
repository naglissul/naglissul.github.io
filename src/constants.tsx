import BlogPage from "./pages/blogPage/BlogPage";
import CodePage from "./pages/codePage/CodePage";
import HomePage from "./pages/homePage/HomePage";
import MusicPage from "./pages/musicPages/MusicPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import KonspPage from "./pages/teachPage/KonspPage";
import KorepPage from "./pages/teachPage/KorepPage";
import MgbiPage from "./pages/teachPage/MgbiPage";
import TeachPage from "./pages/teachPage/TeachPage";
import DeafeningNightPage from "./pages/writePage/DeafeningNightPage";
import WritePage from "./pages/writePage/WritePage";
import SlamPage from "./pages/writePage/SlamPage";
import TheFirstSnowPage from "./pages/writePage/TheFirstSnowPage";
import MoksloGildijaPage from "./pages/teachPage/MoksloGildijaPage";
import TheLastYearsSnowPage from "./pages/writePage/TheLastYearsSnowPage";
import OtherSnowPage from "./pages/writePage/OtherSnowPage";
import ShortDreamsPage from "./pages/writePage/ShortDreamsPage";
import EncryptedExcerpts from "./pages/writePage/EncryptedExcerpts";
import A from "./pages/writePage/A";
import B from "./pages/writePage/b";
import C from "./pages/writePage/c";
import D from "./pages/writePage/d";
import E from "./pages/writePage/e";
import F from "./pages/writePage/f";
import G from "./pages/writePage/g";
import H from "./pages/writePage/h";
import TempPage from "./pages/tempPage/TempPage";

export const POSTS_URL: string =
  "https://raw.githubusercontent.com/naglissul/blog-posts/main/posts/";
export const TUTORIALS_URL: string =
  "https://raw.githubusercontent.com/naglissul/blog-posts/main/tutorials/other/";
export const SLAMS_URL: string =
  "https://raw.githubusercontent.com/naglissul/blog-posts/main/slams/";

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
    path: "/write/the-first-snow/encrypted-excerpts/",
    title: "Encrypted excerpts",
    element: <EncryptedExcerpts />,
  },
  {
    path: "/write/deafening-night/",
    title: "Kurtinančiai tyli naktis dvipusiame name arba Ką padarysi...",
    element: <DeafeningNightPage />,
  },
  {
    path: "/write/the-last-years-snow/",
    title: "Pernykštis sniegas",
    element: <TheLastYearsSnowPage />,
  },
  {
    path: "/write/other-snow/",
    title: "Kitos Sniego dalys",
    element: <OtherSnowPage />,
  },
  {
    path: "/write/short-dreams/",
    title: "Trumpi sapnai",
    element: <ShortDreamsPage />,
  },
  {
    path: "/teach/",
    title: "Teach",
    element: <TeachPage />,
  },
  {
    path: "/teach/mgbi/",
    title: "MGBI (mirus)",
    element: <MgbiPage />,
  },
  {
    path: "/teach/korep/",
    title: "Korepetitorius",
    element: <KorepPage />,
  },
  {
    path: "/teach/konsp/",
    title: "Konspektai (suspended)",
    element: <KonspPage />,
  },
  {
    path: "/teach/mokslo-gildija/",
    title: "Mokslo gildija",
    element: <MoksloGildijaPage />,
  },
  {
    path: "/music/",
    title: "Music",
    element: <MusicPage />,
  },
  {
    path: "/write/a/",
    title: "Saldainiai (500 žodžių)",
    element: <A />,
  },
  {
    path: "/write/b/",
    title: "Suplaktos kavos lašas (300 žodžių)",
    element: <B />,
  },
  {
    path: "/write/c/",
    title: "Trumpi sapnai (po 300 žodžių)",
    element: <C />,
  },
  {
    path: "/write/d/",
    title: "Kitas lapelis (2100 žodžių)",
    element: <D />,
  },
  {
    path: "/write/e/",
    title:
      "Kurtinančiai tyli naktis dvipusiame name arba Ką padarysi... (8400 žodžių)",
    element: <E />,
  },
  {
    path: "/write/f/",
    title:
      "Santrauka: Kurtinančiai tyli naktis dvipusiame name arba Ką padarysi... (1200 žodžių)",
    element: <F />,
  },
  {
    path: "/write/g/",
    title: "Šeštasis sapnas (pradžia) (300 žodžių)",
    element: <G />,
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
  { name: "5 dalis. Antras skyrius: Vabalai yra tikri", fileName: "2.pdf" },
  { name: "Pernykštis sniegas. Penktas skyrius: Kelionė", fileName: "3.pdf" },
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
  {
    name: "Suplaktos kavos lašas",
    date: "2021-07-31",
    wordCount: 264,
    fileName: "suplaktos-kavos-lasas.docx",
  },

  {
    name: "Kitas lapelis",
    date: "2017-12",
    wordCount: 2115,
    fileName: "kitas-lapelis.docx",
  },
];

export const MOBILE_THRESHOLD = 768;
