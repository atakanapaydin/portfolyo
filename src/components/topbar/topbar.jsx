import './topbar.scss';
import {Person, Mail, LinkedIn, GitHub, Twitter} from '@material-ui/icons';

export default function Topbar({menuOpen, setmenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Apaydin.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+90 505 417 9446</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>atakanapaydinn@gmail.com</span>
          </div>
        </div>
        <div className="center">
          <div className="itemContainer">
            <a target="_blank" href="https://www.linkedin.com/in/atakan-apaydin-ba0664199/">
              <LinkedIn className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a target="_blank" href="https://github.com/atakanapaydin/">
              <GitHub className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a target="_blank" href="https://twitter.com/AtakanApaydinnn">
              <Twitter className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
