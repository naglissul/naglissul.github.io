import rec from "../../posts/post.json";
function BlogPage() {
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
      <h4>Post no. 1 - World's a mess</h4>
      {rec.text}
      <br />
      <br />
      <footer>Naglis/Audrius 2023</footer>
    </>
  );
}

export default BlogPage;
