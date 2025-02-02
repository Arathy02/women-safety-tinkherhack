import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div
            className="home-container"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "20px",
                fontFamily: "'Poppins', sans-serif",  // Google Font for styling
                color: "#fff",  // White text for contrast
                background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", // Gradient background
            }}
        >
            {/* Header Section */}
            <header className="home-header">
                <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "10px" }}>Welcome to Nirbhaya</h1>
                <p style={{ fontSize: "1.2rem", marginTop: "10px", fontStyle: "italic" }}>
                    Your Personal Safety Companion
                </p>
            </header>

            {/* Navigation Buttons */}
            <div className="navigation-buttons" style={{ marginTop: "30px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <button
                    onClick={() => navigate('/safe-route')}
                    className="nav-button"
                    style={buttonStyle}
                >
                    Find Safe Route
                </button>
                <button
                    onClick={() => navigate('/guardian')}
                    className="nav-button"
                    style={buttonStyle}
                >
                    Live Guardian
                </button>
                <button
                    onClick={() => navigate('/checklist')}
                    className="nav-button"
                    style={buttonStyle}
                >
                    Precaution Checklist
                </button>
                <button
                    onClick={() => navigate('/siren')}
                    className="nav-button"
                    style={buttonStyle}
                >
                    Emergency Alert Siren
                </button>
            </div>
        </div>
    );
}

// Button style
const buttonStyle = {
    backgroundColor: "#1e90ff",  // Blue color for buttons
    color: "#fff",
    padding: "12px 24px",
    margin: "10px",
    border: "none",
    borderRadius: "10px",  // Rounded buttons for modern look
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",  // Light shadow for effect
    width: "200px",  // Uniform width for all buttons
};

// Hover effect for buttons
const buttonHoverStyle = {
    backgroundColor: "#3742fa",  // Darker shade of blue on hover
    transform: "scale(1.05)",  // Slight zoom effect
};

export default Home;
