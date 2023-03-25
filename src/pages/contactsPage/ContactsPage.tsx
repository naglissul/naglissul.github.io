function ContactsPage() {
  return (
    <div style={{ paddingLeft: "10px" }}>
      <h1>Contacts</h1>
      <br />
      <h2>MENU</h2>
      <ul>
        <li>
          <h3>
            <a href="/#/home">Home</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="/">Blog</a>
          </h3>
        </li>
      </ul>
      <br />
      <h5>
        email:
        <a href="mailto:naglis.suliokas@gmail.com">
          {" "}
          naglis.suliokas@gmail.com
        </a>
      </h5>
      <h5>
        ig:
        <a href="https://www.instagram.com/naglisaudrius/"> @naglisaudrius</a>
      </h5>
      <h5>
        writing email:
        <a href="mailto:tyliunas.audrius@gmail.com">
          {" "}
          tyliunas.audrius@gmail.com
        </a>
      </h5>
      <h5>
        writing ig:
        <a href="https://www.instagram.com/audriustyliunas/">
          @audriustyliunas
        </a>
      </h5>
      <footer>Naglis/Audrius 2023</footer>
    </div>
  );
}

export default ContactsPage;
