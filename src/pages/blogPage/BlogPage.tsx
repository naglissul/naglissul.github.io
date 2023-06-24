import { useEffect, useState } from "react";
import BlogPost from "./components/BlogPost";
import { POSTS_URL } from "../../constants";

// 3 categories: normal posts, fiction short stories also excerpts, other (uni stuff with conspects, later a few articles), archive
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
      files.unshift({ name: `${i}.md`, content });
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
      <h3>
        Here are some blog posts. Lekker lezing! <sub>NL</sub>
      </h3>
      {files
        ? files.map((file: post) => (
            <BlogPost key={file.name} id={file.name} text={file.content} />
          ))
        : null}
    </section>
  );
}

export default BlogPage;
