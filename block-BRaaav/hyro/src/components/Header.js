
function Header() {
    return (
      <>
        <header className='navbar'>
          <div className='container flex'>
            <div className='flex'>
              <a className='brand' href='_#'>
                <strong>Hydro</strong>
              </a>
              <nav>
                <ul className='flex nav-menu nav-menu-primary'>
                  <li>
                    <a href='_#'>Home</a>
                  </li>
                  <li>
                    <a href='_#'>About</a>
                  </li>
                  <li>
                    <a href='_#'>Blog</a>
                  </li>
                  <li>
                    <a href='_#'>Our Work</a>
                  </li>
                  <li>
                    <a href='_#'>Contacts</a>
                  </li>
                </ul>
              </nav>
            </div>
            <nav>
              <ul className='flex nav-menu nav-menu-secondary'>
                <li className='social-media-item'>
                  <a href='_#'>
                    <i className='fab fa-facebook-square'></i>
                  </a>
                </li>
                <li className='social-media-item'>
                  <a href='_#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li className='social-media-item'>
                  <a href='_#'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a className='btn btn-primary' href='_#'>
                    {' '}
                    Sign in / Join{' '}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
  
  export default Header;