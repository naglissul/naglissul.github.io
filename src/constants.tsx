import BlogPage from "./pages/blogPage/BlogPage";
import CodePage from "./pages/codePage/CodePage";
import HomePage from "./pages/homePage/HomePage";
import MusicPage from "./pages/musicPages/MusicPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import TeachPage from "./pages/teachPage/TeachPage";
import WritePage from "./pages/writePage/WritePage";

export const POSTS_URL =
  "https://raw.githubusercontent.com/naglissul/blog-posts/main/posts/";
export const TUTORIALS_URL =
  "https://raw.githubusercontent.com/naglissul/blog-posts/main/tutorials/";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
    title: "No Point Writings",
  },
  { path: "/blog", title: "Blog", element: <BlogPage /> },
  { path: "/code", title: "Code", element: <CodePage /> },
  {
    path: "/write",
    title: "Write",
    element: <WritePage />,
    routes: [
      {
        path: "/write/fiction",
        title: "Fiction",
        element: <h1>Sniegas, slam, kiti tekstai... Language categories</h1>,
      },
      {
        path: "/other",
        title: "Other writings",
        element: <h1>Book of everything</h1>,
      },
    ],
  },
  {
    path: "/teach",
    title: "Teach",
    element: <TeachPage />,
    routes: [
      {
        path: "/mgbi",
        title: "MGBI",
        element: <h1>Mokslas gali būti įdomus. Mostly addressed for LT</h1>,
      },
      {
        path: "/korep",
        title: "Korepetitorius",
        element: (
          <h1>
            LT, cuz for now addressed only for LT (but options are open for
            English)
          </h1>
        ),
      },
      {
        path: "/school",
        title: "Mokykla",
        element: (
          <h1>
            Viskas apie LT švietimą. Įstatymai, egzaminai bei mano, kaip
            mokytojo, taisyklės
          </h1>
        ),
      },
      {
        path: "/konsp",
        title: "Konspektai",
        element: (
          <h1>
            Čia bus patalpinti visi konspektai - tik uždaviniai arba visa
            teorija
          </h1>
        ),
      },
    ],
  },

  {
    path: "/music",
    title: "Music",
    element: <MusicPage />,
    routes: [
      {
        path: "/listen",
        title: "Music to listen",
        element: <h1>Here about the music that I listen</h1>,
      },
      {
        path: "/compose",
        title: "My compositions",
        element: <h1>Fistly, the piano...</h1>,
      },
      {
        path: "/piano",
        title: "All about the classical piano music",
        element: (
          <h1>
            I play on youtube, list of the best pieces..., places to play piano
          </h1>
        ),
      },
    ],
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
