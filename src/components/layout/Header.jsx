import './Header.css';
import { useAppNavigation } from '../../helpers/navigationHelper';
import { Button } from 'react-bootstrap';

export default function Header() {
  const {goLogin,goSignup} = useAppNavigation()
  return (
    <header className="header">  
      <div className="logo">Career connect</div>

      <nav className="nav">
        <a href="#">Jobs</a>
        <a href="#">Companies</a>
        <a href="#">Services</a>
      </nav>

      <div className="actions">
        <Button className="app-btn ghost" onClick={goLogin}>Login</Button>
        <Button className="app-btn outline" onClick={goSignup}>Sign Up</Button>
        <Button className="app-btn primary">Post a Job</Button>
      </div>
    </header>
  );
}
