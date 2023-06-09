import { useEffect, useState } from "react";
import BlogPost from "../blogPage/components/BlogPost";
import { TUTORIALS_URL } from "../../constants";
import CalcGrade from "./components/CalcGrade";

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

function TeachPage() {
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
    <>
      <main>
        <aside></aside>
        <section>
          <h1>In LT. Cuz addressed for LT</h1>
          <h1>Currently</h1>working on other projects (Coding and Writing), but
          when I get to the teaching category - first I will be creating some
          rules as of a teacher and writing summaries/tutorials about school
          maths/physics according to the national education programme in
          Lithuania. After that maybe improve my, as a math and physics tutor,
          work. Everything will be listed in this page.
          <ul>
            <li>Overleaf - slides...with more, with papildomi...</li>
            <li>Kahoot</li>
            <li>Dictionary for definitions EN-LT (or platform for that)</li>
            <li>Assignments/exams problems (but encrypted)</li>
          </ul>
          <h1>Lifetime idea:</h1>
          <p>
            To make a revolution in education system (everywhere) - add more
            phylosophy (related with math)
          </p>
          Links:
          <br />
          <a href="https://sodas.ugdome.lt/viesieji-puslapiai/7300">
            LT education programme till 2024-08-31
          </a>
          <h3>Here, in posts, you will find:</h3>
          <ul>
            <li>
              MATH:{" "}
              <ul>
                <li>
                  PROBLEMS - all types of problems (for VBE/12th grade course)
                </li>
                <li>
                  EVERYTHING - theory and all the content (for 5-8th grades)
                </li>
                <li>
                  ABOUT - rules from me, as a teacher, explanations and thoughts
                  about math and everything else that is not mentioned
                </li>
              </ul>
            </li>
            <li>PHYSICS - whatever I write about physics</li>
          </ul>
          <CalcGrade />
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
          <h1>Learning Can Be Interesting</h1>
          <p>
            (liet.: mokslas gali būti įdomus) - Lectures by students - uni in
            highschool style +Stud-stud (?)
          </p>
        </section>
        <aside></aside>
      </main>
      <footer></footer>
    </>
  );
}

export default TeachPage;
