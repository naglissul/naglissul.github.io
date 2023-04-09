import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function BlogPage() {
  const [text, setText] = useState("Loading...");

  const fetchMarkdown = (readmePath: string) => {
    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((txt) => {
        setText(txt);
      });
  };

  useEffect(() => {
    fetchMarkdown(
      "https://raw.githubusercontent.com/naglissul/blog-posts/main/1-marvel-karo-vertybes.md"
    );
  }, []);

  return (
    <>
      <main>
        <aside></aside>
        <section>
          <nav style={{}}>This gonna be a filter bar</nav>
          <ReactMarkdown>{text}</ReactMarkdown>
        </section>
        <aside></aside>
      </main>
      <footer></footer>
    </>
  );
}

export default BlogPage;
