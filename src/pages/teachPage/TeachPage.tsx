import { useEffect, useState } from "react";
import BlogPost from "../blogPage/components/BlogPost";
import { TUTORIALS_URL } from "../../constants";

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

function TeachPage() {
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
    <>
      <main>
        <aside></aside>
        <section>
          <h1>Currently</h1>working on other projects (Coding and Writing), but
          when I get to the teaching category - first I will be creating some
          rules as of a teacher and writing summaries/tutorials about school
          maths/physics according to the national education programme in
          Lithuania. After that maybe improve my, as a math and physics tutor,
          work. Everything will be listed in this page.
          <ul>
            <li>Overleaf - slides...with more, with papildomi...</li>
            <li>Kahoot</li>
            <li>Dictionary for definitions EN-LT (or platform for that)</li>
          </ul>
          Links:
          <a href="https://sodas.ugdome.lt/viesieji-puslapiai/7300">
            LT education programme till 2024-08-31
          </a>
          {files
            ? files.map((file: post) => (
                <BlogPost key={file.name} text={file.content} />
              ))
            : null}
        </section>
        <aside></aside>
      </main>
      <footer></footer>
    </>
  );
}

export default TeachPage;
