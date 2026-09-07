import copylogo from "./assets/Asset 20@4x.png";
function Footer() {
  return (
    <footer>
      <div>
        <img src={copylogo} alt="logo" width="40px" />
      </div>
      <div>
        <p>&copy; Copyright Little Lemon</p>
      </div>
    </footer>
  );
}
export default Footer;
