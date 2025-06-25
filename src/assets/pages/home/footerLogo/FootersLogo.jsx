import { Image } from "react-bootstrap";
import FooterLogo from "../../../pages/home/images/footerLogo/footer-logo.png";

function FootersLogo() {
  return (
    <div className="container-xxl mt-5 p-3 p-md-0">
      <Image src={FooterLogo} />
    </div>
  );
}

export default FootersLogo;
