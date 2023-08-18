import { useEffect, useState } from "react";
import BlogPost from "../blogPage/components/BlogPost";
import { TUTORIALS_URL } from "../../constants";
import { Link } from "react-router-dom";

interface post {
  name: string;
  content: string;
}

const fetchPosts = async (): Promise<post[] | null> => {
  const files: post[] = [];
  let i = 0;

  while (true) {
    const url = `${TUTORIALS_URL}${i}.md`;
    try {
      const response = await fetch(url);

      if (response.status === 404) {
        break;
      }
      if (!response.ok) {
        console.error(`Error fetching file ${i}.md: ${response.statusText}`);
        return null;
      }

      const content = await response.text();
      files.push({ name: `${i}.md`, content });
    } catch (error: any) {
      console.error(`Error fetching file ${i}.md: ${error}`);
      return null;
    }
    i++;
  }

  if (files.length === 0) {
    return [{ name: "no-files-pseudo.file", content: "NO FILES FOUND..." }];
  }

  return files;
};

function KonspPage() {
  const [files, setFiles] = useState<post[] | null>([
    { name: "loading-pseudo.file", content: "LOADING CONTENT..." },
  ]);

  useEffect(() => {
    const fetchFiles = async () => {
      const fetchedFiles = await fetchPosts();
      setFiles(fetchedFiles);
    };

    fetchFiles();
  }, []);
  return (
    <section>
      <p>
        Čia patalpinti įvairūs 5-12 kl. matematikos (ir fizikos bei IT)
        konspektai (pagal senąją, iki 2023-08-31, mokyklos programą). 11-12 kl.
        temos orientuotos į A lygį ir VBE užduotis
      </p>
      <p>
        Deja, bet čia nerasit konspektų apie visą mokyklinę matematiką. Bet
        galiu papildyti konspektus pagal prašymą. Kitaip tai sau pačiam tikrai
        nėra reikalo rašinėtis konspektus. Man jau nebereikia, aš jau egzus
        išsilaikiau :D
      </p>
      <p>
        Idėja ateičiai: padaryti VBE matematikos konspektą, kur būtų TIK
        uždavinių visi šabloniniai tipai su šabloniniais sprendimo būdais
      </p>
      <h1 style={{ fontSize: "40px" }}>5-8 kl. testai ir užduotys</h1>
      ...
      <h1 style={{ fontSize: "40px" }}>Kita</h1>
      {files
        ? files.map((file: post) => (
            <BlogPost id={file.name} key={file.name} text={file.content} />
          ))
        : null}
      <p>
        You can probably find more school (or science in general) related stuff
        in
        <Link to="/blog/"> blog page</Link>
        {/* Padaryti blog post apie HOW MATH WORKS foudations... pirmakursiams */}
        {/* 11kl fizika: Mechanika. Skridiniai - T1 = T2. Dvi atskiros sistemos. Darbas - vidurkis, energijos pokytis... */}
      </p>
    </section>
  );
}

export default KonspPage;
