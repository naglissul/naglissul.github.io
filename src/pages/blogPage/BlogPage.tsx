import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const readmePath = 'posts/1-marvel-karo-vertybes.md';
function BlogPage() {
  const [text, setText] = useState("");
  const fetchMarkdown = () => {
  fetch(readmePath)
  .then(response => {
    return response.text()
  })
  .then(txt => {
    setText(txt);
  })
}
useEffect(()=>{fetchMarkdown()}, []);
  return (
    <>
      <h1>Blog</h1>
      <br />
      <h2>MENU</h2>
      <ul>
        <li>
          <h3>
            <a href="/">Home</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="/#/contacts">Contacts</a>
          </h3>
        </li>
      </ul>
      <br />
      <ReactMarkdown>{text}</ReactMarkdown>
      <br />
      <br />
      <footer>Naglis/Audrius 2023</footer>
    </>
  );
}

export default BlogPage;
