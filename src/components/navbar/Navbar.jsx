import "./navbar.css";

const navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">MBooking</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
