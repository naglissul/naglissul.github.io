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
    <div>
      <h1 style={{ paddingTop: "1em", textAlign: "center" }}>Blog</h1>
      <hr style={{ margin: "0 10%" }} />
      <h3 style={{ paddingTop: "5%", textAlign: "center" }}>
        <em>More coming soon...</em>
      </h3>
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
    </div>
  );
}

export default BlogPage;
