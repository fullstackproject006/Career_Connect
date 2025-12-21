import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Career connect</div>

      <nav className="nav">
        <a href="#">Jobs</a>
        <a href="#">Companies</a>
        <a href="#">Services</a>
      </nav>

      <div className="actions">
        <button className="btn ghost">Login</button>
        <button className="btn outline">Sign Up</button>
        <button className="btn primary">Post a Job</button>
      </div>
    </header>
  );
}
