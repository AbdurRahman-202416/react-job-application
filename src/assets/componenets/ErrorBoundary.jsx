import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI
      return (
        <div>
          <div className="h-full" style={styles.container}>
            <h1 style={styles.title}>Oops! Something went wrong 😟</h1>
            <p style={styles.message}>
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button
              style={styles.button}
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    color: "#343a40",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2em",
    marginBottom: "0.5em",
  },
  message: {
    fontSize: "1.2em",
    marginBottom: "1.5em",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1em",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ErrorBoundary;
