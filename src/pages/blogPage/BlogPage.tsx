import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function BlogPage() {
  const [text, setText] = useState("");

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
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h1>Blog</h1>

        <h3>
          <a href="/#/home">Home</a>
        </h3>

        <h3>
          <a href="/#/contacts">Contacts</a>
        </h3>
      </header>
      <br />
      <br />
      <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
      <br />
      <br />
      <footer>Naglis/Audrius 2023</footer>
    </>
  );
}

export default BlogPage;
