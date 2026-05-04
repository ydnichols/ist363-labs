interface PioneerType {
    id: number;
    name: string;
    image: string;
    bio: string;
    born: string;
    knownFor: string;
    viewed: boolean;
  }
  
  interface Props {
    pioneer: PioneerType;
    onBack: () => void;
  }
  
  function Pioneer({ pioneer, onBack }: Props) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#2b2b2b",
        padding: "40px",
        color: "#eaeaea",
        fontFamily: "Georgia, serif",
      }}>
        <button
          onClick={onBack}
          style={{
            background: "#1a6fc4",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 22px",
            fontSize: "1rem",
            cursor: "pointer",
            marginBottom: "32px",
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          Back
        </button>
  
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          <img
            src={pioneer.image}
            alt={pioneer.name}
            style={{
              width: "220px",
              height: "260px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
            }}
          />
          <div style={{ flex: 1, minWidth: "260px" }}>
            <h2 style={{ fontSize: "2rem", color: "#e2b96f", marginBottom: "16px" }}>
              {pioneer.name}
            </h2>
            <p style={{ lineHeight: "1.7", marginBottom: "16px", color: "#ccc" }}>
              {pioneer.bio}
            </p>
            <p style={{ marginBottom: "8px" }}>
              <strong style={{ color: "#e2b96f" }}>Born:</strong> {pioneer.born}
            </p>
            <p>
              <strong style={{ color: "#e2b96f" }}>Known for:</strong> {pioneer.knownFor}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Pioneer;