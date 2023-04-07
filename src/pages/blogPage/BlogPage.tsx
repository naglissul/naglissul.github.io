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
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "1em" }}>Blog</h1>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10%",
        }}
      >
        <div style={{ width: "750px" }}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
      <br />
      <br />
      <footer>Naglis/Audrius 2023</footer>
    </div>
  );
}

export default BlogPage;
