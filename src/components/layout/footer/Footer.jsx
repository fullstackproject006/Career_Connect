import { footerData } from "./FooterData";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>{footerData.company.name}</h3>
          <p>{footerData.company.description}</p>
        </div>

        <div>
          <h4>Job Seekers</h4>
          <ul>
            {footerData.jobSeekers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Employers</h4>
          <ul>
            {footerData.employers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Resources</h4>
          <ul>
            {footerData.resources.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="footer-bottom">{footerData.copyright}</p>
    </footer>
  );
};

export default Footer;
