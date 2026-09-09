import logo from "./assets/Asset 16@4x.png";
import Nav from "./Nav";
function Header() {
  return (
    <header>
      <img src={logo} alt="logo of little lemon restaurant" width="500px" />
      <Nav />
    </header>
  );
}
export default Header;
