import { useEffect, useState } from "react";
import BlogPost from "../blogPage/components/BlogPost";
import { TUTORIALS_URL } from "../../constants";

interface post {
  name: string;
  content: string;
}

const fetchPosts = async (): Promise<post[] | null> => {
  const files: post[] = [];
  let i = 0;

  while (true) {
    const url = `${TUTORIALS_URL}${i}.md`;
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

function KonspPage() {
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
      <h3>Here, in posts, you will find:</h3>
      <ul>
        <li>
          MATH:{" "}
          <ul>
            <li>
              PROBLEMS - all types of problems (for VBE/12th grade course)
            </li>
            <li>EVERYTHING - theory and all the content (for 5-8th grades)</li>
            <li>
              ABOUT - rules from me, as a teacher, explanations and thoughts
              about math and everything else that is not mentioned
            </li>
          </ul>
        </li>
        <li>PHYSICS - whatever I write about physics</li>
        <li>IT - mostly for 5-7th grades</li>
      </ul>
      {files
        ? files.map((file: post) => (
            <BlogPost id={file.name} key={file.name} text={file.content} />
          ))
        : null}
      <h3>ARCHIVE</h3>
      <img
        src="assets\func-basic-10.png"
        alt="basics of functions problems 10 grade"
      ></img>
    </section>
  );
}

export default KonspPage;
