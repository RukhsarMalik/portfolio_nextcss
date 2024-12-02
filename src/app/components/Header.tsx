export default function Header(){
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img className="logo_img" src="/images/logo/logo.png" alt="Logo" />
          <a className="logo_name">Rukhsar Malik</a>
        </div>
        <nav className="nav">
          <a href="#Hero">Home</a>
          <a href="#About">About</a>
          <a href="#Skill">Skills</a>
          <a href="#Project">Projects</a>
          <a href="#Contact">Contact</a>
        </nav>
      </div>
    </header>
  )
};
