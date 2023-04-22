import "./Footer.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div className="mt-3">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <p className="text-uppercase colorDesign footer-p">ProjectBoard</p>
            <p> Built by Ravindra, Harsh & Shyam (2023)</p>
          </div>
          <div className="col-lg3 col-md-6 mb-4 mb-md-0">
            <p className="text-uppercase colorDesign footer-p">Links</p>
            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="https://github.com/Ravindra9555/ProjectBoard"
                  className="text-dark"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
