export default function Footer() {
  return (
    <footer style={{
      background: "#222",
      color: "#fff",
      padding: "20px",
      marginTop: "40px",
      textAlign: "center"
    }}>
      © {new Date().getFullYear()} My React Website
    </footer>
  );
}