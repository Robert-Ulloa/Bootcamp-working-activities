// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"
const styles =  {
  nav: {
    backgroundColor: 'red',
    padding: '10px',
  },
  link: {
    color: 'blue', 
    textDecoration: 'none',
  },
};

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav style={styles.nav}>
      <a href={styles.link}>Welcome</a>
    </nav>
  );
}

export default Navbar;
