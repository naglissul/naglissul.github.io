import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface post {
  text: string;
}

function BlogPost(props: post) {
  return (
    <>
      <hr />
      <ReactMarkdown>{props.text}</ReactMarkdown>
    </>
  );
}

export default BlogPost;
