function Header() {
    return (
        <>
        <header className="navbar">
    <div className="container flex">
      <div class="flex">
        <a className="brand" href="#">
          <strong>Hydro</strong>
        </a>
        <nav>
          <ul className="flex nav-menu nav-menu-primary">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a href="index.html">Blog</a>
            </li>
            <li>
              <a href="index.html">Our Work</a>
            </li>
            <li>
              <a href="index.html">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
      <nav>
        <ul classname="flex nav-menu nav-menu-secondary">
          <li class="social-media-item">
            <a href="#"><i class="fab fa-facebook-square"></i></a>
          </li>
          <li className="social-media-item">
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li classname="social-media-item">
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a classname="btn btn-primary" href="index.html"> Sign in / Join </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  </>

    );
}
   
export default Header;