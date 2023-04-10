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
          <h1>Currently</h1>working on other projects (Coding and Writing). I.e.
          in order for me to write some new blog posts, I need to write a code
          that would display and sort the posts I create. After that is done,
          I'm gonna write a few posts about:
          <ul>
            <li>
              Learning absurdities: independent learning / learning in a team
            </li>
            <li>
              Learning purpose: why did I learn physics (and why you shouldn't
              force yourself to like doing domething, but rather discover
              yourself)
            </li>
            <li>
              Math is like a religion OR why do scientist look even dumber when
              arguing against flat-earthers: What is truth? (more my point of
              view than researched phylosophy summary)
            </li>
          </ul>
          <ReactMarkdown>{text}</ReactMarkdown>
        </section>
        <aside></aside>
      </main>
      <footer></footer>
    </>
  );
}

export default BlogPage;
