import '../styles/Header.css';

// Create a styles object
const styles = {
  header: {
    backgroundColor: 'green', 
    padding: '15px', 
  },
  title: {
    color: 'white', 
    fontSize: '36px', 
  },
};

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Welcome</h1>
    </header>
  );
}

export default Header;