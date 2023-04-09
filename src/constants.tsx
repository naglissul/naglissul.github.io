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

export const readingsSnow = [
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
  {
    name: "5 dalis. Antras skyrius. Vabalai yra tikri",
    date: "2020-12-11",
    wordCount: 157,
    fileName: "5-dalis-antras-skyrius-vabalai-yra-tikri.docx",
  },
  {
    name: "Pernykštis sniegas. Penktas skyrius. Kelionė",
    date: "2021-12-23",
    wordCount: 398,
    fileName: "pernykstis-sniegas-penktas-skyrius-kelione.docx",
  },
  {
    name: "Prieštaktis",
    date: "2021-12-23",
    wordCount: 405,
    fileName: "priestaktis.docx",
  },
  {
    name: "Nespėjau",
    date: "2022-01-25",
    wordCount: 243,
    fileName: "nespejau.docx",
  },
  {
    name: "Smuikas",
    date: "2021-12-23",
    wordCount: 334,
    fileName: "smuikas.docx",
  },
  {
    name: "Trumpas tutorialas, kaip sukurti visatą",
    date: "2022-02-23",
    wordCount: 883,
    fileName: "trumpas-tutorialas-kaip-sukurti-visata.docx",
  },
  {
    name: "Pirmasis sniegas. Pirmas skytrius. Klaidžiojimas. 8",
    date: "2021-ruduo",
    wordCount: 286,
    fileName: "pirmasis-sniegas-pirmas-skyrius-klaidziojimas-8.docx",
  },
  {
    name: "Be košmarų neįdomu",
    date: "2022-03-31",
    wordCount: 429,
    fileName: "be-kosmaru-neidomu.docx",
  },
  {
    name: "Odė tinkleliui nuo uodų",
    date: "2021-12-23",
    wordCount: 70,
    fileName: "ode-tinkleliui-nuo-uodu.docx",
  },

  {
    name: "Dar vienas sapnas",
    date: "2022-04-28",
    wordCount: 596,
    fileName: "dar-vienas-sapnas.docx",
  },
  {
    name: "Nelik sapne",
    date: "2022-07-14",
    wordCount: 298,
    fileName: "nelik-sapne.docx",
  },
  {
    name: "Negaliu patikėti (Nelik sapne tęsinys)",
    date: "2022-07-14",
    wordCount: 176,
    fileName: "negaliu-patiketi-nelik-sapne-tesinys.docx",
  },
  {
    name: "Žudyti arba būti nužudytam",
    date: "2022-09-28",
    wordCount: 178,
    fileName: "zudyti-arba-buti-nuzudytam.docx",
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