function Header() {
  let name = null;
  let text = "";
  if (name != null) {
    text = "waddup";
  }

  return (
    <header>
      <h1>My website {text}</h1>

      <nav>
        <ul id="nav-ul">
          <li>
            <a href="https://www.google.de/?hl=de">Home</a>
          </li>
          <li>
            <a href="https://www.google.de/?hl=de">About</a>
          </li>
          <li>
            <a href="https://www.google.de/?hl=de">Services</a>
          </li>
          <li>
            <a href="https://www.google.de/?hl=de">Contact</a>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
}

export default Header;
