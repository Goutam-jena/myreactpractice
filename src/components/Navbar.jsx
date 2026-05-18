import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#4f46e5' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>ShopSphere</Link>
      </div>
      <div className="nav-links" style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Products</Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Cart (0)</Link>
      </div>
    </nav>
  );
}
export default Navbar;