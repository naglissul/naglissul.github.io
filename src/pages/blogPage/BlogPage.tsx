import { useEffect, useState } from "react";
import BlogPost from "./components/BlogPost";
import { POSTS_URL } from "../../constants";

//Will have two basic sections: normal posts and articles AND fiction short stories and excerpts.

interface post {
  name: string;
  content: string;
}

const fetchPosts = async (): Promise<post[] | null> => {
  const files: post[] = [];
  let i = 0;

  while (true) {
    const url = `${POSTS_URL}${i}.md`;
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

function BlogPage() {
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
    <section>
      <h1>Currently</h1>working on other projects (Coding and Writing). I.e. in
      order for me to write some new blog posts, I need to write a code that
      would display and sort the posts I create. After that is done, I'm gonna
      write a few posts about:
      <ul>
        <li>
          3rd stage 1st sub-stage: Uni. Plans for 2nd sub-stage. Plans for
          summarizing passed uni courses
        </li>
        <li>
          Learning absurdities: independent learning / learning in a team.
          +intrinsic motivation
        </li>
        <li>
          Learning purpose: why did I learn physics (and why you shouldn't force
          yourself to like doing domething, but rather discover yourself)
        </li>
        <li>
          Math is like a religion OR why do scientist look even dumber when
          arguing against flat-earthers: What is truth? (more my point of view
          than researched phylosophy summary)
        </li>
      </ul>
      <p>
        Posts will usually are uploaded after my student life stage (usually one
        semester) is done
      </p>
      {files
        ? files.map((file: post) => (
            <BlogPost key={file.name} id={file.name} text={file.content} />
          ))
        : null}
    </section>
  );
}

export default BlogPage;
