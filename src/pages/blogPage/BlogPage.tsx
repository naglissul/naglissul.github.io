import { ComponentType, ReactNode, useEffect, useState } from "react";
import BlogPost from "./components/BlogPost";
import { POSTS_URL } from "../../constants";

interface post {
  name: string;
  content: string;
}

//sample for mdx
const components: { [key: string]: ComponentType<{ children: ReactNode }> } = {
  button: (props) => <button {...props} />,
};

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
      <h2>COMING SOON: SHOR'S ALGORITHM ANALYSIS, very basic neural network</h2>

      {files
        ? files.map((file: post) => (
            <BlogPost key={file.name} id={file.name} text={file.content} />
          ))
        : null}
    </section>
  );
}

export default BlogPage;
