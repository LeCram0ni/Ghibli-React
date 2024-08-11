function Header() {
  let name = null;
  let text = "";
  if (name != null) {
    text = "waddup";
  }

  return (
    <header>
      <a href="https://www.google.de"> <img src="src\media\ghibli_logo.png" /></a>
      <ul>
        <a href="https://www.google.de"><li>ABC</li></a>
        <a href="https://www.google.de"><li>DEF</li></a>
      </ul>
    </header>
  );
}

export default Header;
