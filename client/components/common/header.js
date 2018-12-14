import Link from 'next/link';

const Header = () => (
  <div className="pt-2 text-right header">
    <Link as="/register" href="/register">
      <a>Register</a>
    </Link>
    <Link as="/login" href="/login">
      <a>Login</a>
    </Link>
  </div>
);

export default Header;