import { useEffect, useState } from "react";
import { SLAMS_URL, readingsSlam } from "../../constants";
import Reading from "./components/Reading";
import BlogPost from "../blogPage/components/BlogPost";

interface post {
  name: string;
  content: string;
}

const fetchPosts = async (): Promise<post[] | null> => {
  const files: post[] = [];
  let i = 0;

  while (true) {
    const url = `${SLAMS_URL}${i}.md`;
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

export default function SlamPage() {
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
      <h1>Texts</h1>
      <p>Sėkmės skaitant! ALL FEEDBACK IS APPRECIATED</p>
      {files
        ? files.map((file: post) => (
            <BlogPost id={file.name} key={file.name} text={file.content} />
          ))
        : null}
      <h2>Download PDF</h2>
      <div
        style={{
          display: "flex",
          gap: "2em",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {readingsSlam.map((reading) => (
          <Reading
            key={reading.name}
            name={reading.name}
            src={`assets/readings/slam/${reading.fileName}`}
          />
        ))}
        <Reading
          name="EN | Part 5. Second chapter: The beetles are real"
          src="assets/readings/slam/19.pdf"
        />
      </div>
    </section>
  );
}
