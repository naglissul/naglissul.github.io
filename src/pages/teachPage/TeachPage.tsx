import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import BlogPost from "../blogPage/components/BlogPost";

function TeachPage() {
  const [tutorials, setTutorials] = useState<Set<string>>(new Set());

  const fetchMarkdown = (readmePath: string) => {
    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((txt) => {
        setTutorials((prevTutorials) => {
          const newSet = new Set(prevTutorials);
          newSet.add(txt);
          return newSet;
        });
      });
  };
  useEffect(() => {
    fetchMarkdown(
      "https://raw.githubusercontent.com/naglissul/blog-posts/main/tutorials/fizika-8-kl-bangos.md"
    );
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
          {Array.from(tutorials).map((tutorial) => (
            <BlogPost key={tutorial} text={tutorial} />
          ))}
        </section>
        <aside></aside>
      </main>
      <footer></footer>
    </>
  );
}

export default TeachPage;