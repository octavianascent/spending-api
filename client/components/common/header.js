import Link from 'next/link';

const Header = () => (
  <div className="row mb-2">
    <div className="col pt-2">
      <Link href="/">
        <a className="logo">SPENDING</a>
      </Link>
    </div>
    <div className="pt-2 text-right header col">
      <Link as="/register" href="/register">
        <a>Register</a>
      </Link>
      <Link as="/login" href="/login">
        <a>Login</a>
      </Link>
    </div>
  </div>

);

export default Header;