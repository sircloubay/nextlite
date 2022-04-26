import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link href="/">
        <a className="navbar-brand">Nextlite</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <Link className="nav-item" href="/">
              <a className="nav-link active" >Home <span className="sr-only">(current)</span></a>
            </Link>
            <Link className="nav-item" href="/movie">
              <a className="nav-link active" >Movie <span className="sr-only">(current)</span></a>
            </Link>
            <Link className="nav-item" href="#">
              <a className="nav-link active" >Subscribe <span className="sr-only">(current)</span></a>
            </Link>
            <Link className="nav-item" href="#">
              <a className="nav-link login active" >Sign In <span className="sr-only">(current)</span></a>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;