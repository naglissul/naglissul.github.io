import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface post {
  text: string;
  id: string;
}

function BlogPost(props: post) {
  return (
    <div id={props.id}>
      <hr />
      <ReactMarkdown>{props.text}</ReactMarkdown>
    </div>
  );
}

export default BlogPost;
