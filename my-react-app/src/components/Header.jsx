function Header() {
  let name = null;
  let text = "";
  if (name != null) {
    text = "waddup";
  }

  return (
    <header>
      <a href="https://www.google.de"> <img src="src\media\ghibli-logo.png" /></a>
      <ul>
        <a href="https://www.google.de"><li>Overview</li></a>
        <a href="https://www.google.de"><li>About</li></a>
        <a href="https://www.google.de"><li>Links</li></a>
      </ul>
    </header>
  );
}

export default Header;
