import { useEffect, useState } from "react";
import BlogPost from "./components/BlogPost";

function BlogPage() {
  const [posts, setPosts] = useState<Set<string>>(new Set());

  const fetchMarkdown = (readmePath: string) => {
    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((txt) => {
        setPosts((prevPosts) => {
          const newSet = new Set(prevPosts);
          newSet.add(txt);
          return newSet;
        });
      });
  };

  useEffect(() => {
    fetchMarkdown(
      "https://raw.githubusercontent.com/naglissul/blog-posts/main/posts/1-marvel-karo-vertybes.md"
    );
    fetchMarkdown(
      "https://raw.githubusercontent.com/naglissul/blog-posts/main/posts/2-electromagnetism.txt"
    );
  }, []);

  return (
    <>
      <main>
        <aside></aside>
        <section>
          <h1>Currently</h1>working on other projects (Coding and Writing). I.e.
          in order for me to write some new blog posts, I need to write a code
          that would display and sort the posts I create. After that is done,
          I'm gonna write a few posts about:
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
              Learning purpose: why did I learn physics (and why you shouldn't
              force yourself to like doing domething, but rather discover
              yourself)
            </li>
            <li>
              Math is like a religion OR why do scientist look even dumber when
              arguing against flat-earthers: What is truth? (more my point of
              view than researched phylosophy summary)
            </li>
          </ul>
          {Array.from(posts).map((post) => (
            <BlogPost key={post} text={post} />
          ))}
        </section>
        <aside></aside>
      </main>
      <footer></footer>
    </>
  );
}

export default BlogPage;
