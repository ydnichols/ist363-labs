import { useState } from "react";
import Pioneer from "./Pioneer";

interface PioneerType {
  id: number;
  name: string;
  image: string;
  bio: string;
  born: string;
  knownFor: string;
  viewed: boolean;
}

function App() {
  const [pioneers, setPioneers] = useState<PioneerType[]>([
    {
      id: 1,
      name: "Tim Berners-Lee",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg",
      bio: "Tim Berners-Lee is a British computer scientist best known as the inventor of the World Wide Web. He made his proposal in 1989 while working at CERN.",
      born: "June 8, 1955",
      knownFor: "Inventing the World Wide Web",
      viewed: false,
    },
    {
      id: 2,
      name: "Vint Cerf",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Vint_Cerf_-_2010_%28cropped%29.jpg",
      bio: "Vint Cerf is an American internet pioneer recognized as one of the fathers of the internet for co-designing the TCP/IP protocols.",
      born: "June 23, 1943",
      knownFor: "Co-designing TCP/IP",
      viewed: false,
    },
    {
      id: 3,
      name: "Ada Lovelace",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
      bio: "Ada Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's Analytical Engine. She is often regarded as the first computer programmer.",
      born: "December 10, 1815",
      knownFor: "First computer programmer",
      viewed: false,
    },
    {
      id: 4,
      name: "Grace Hopper",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
      bio: "Grace Hopper was an American computer scientist and Navy rear admiral. She was a pioneer of computer programming and invented one of the first compilers.",
      born: "December 9, 1906",
      knownFor: "Pioneering computer programming, COBOL",
      viewed: false,
    },
  ]);

  const [selectedPioneer, setSelectedPioneer] = useState<PioneerType | null>(null);

  function handlePioneerClick(pioneer: PioneerType) {
    const updatedPioneers = pioneers.map((p) => {
      if (p.id === pioneer.id) {
        return { ...p, viewed: true };
      }
      return p;
    });
    setPioneers(updatedPioneers);
    setSelectedPioneer({ ...pioneer, viewed: true });
  }

  function handleBack() {
    setSelectedPioneer(null);
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#1a1a2e",
      padding: "40px",
      fontFamily: "Georgia, serif",
      color: "#eaeaea",
    }}>
      {selectedPioneer ? (
        <Pioneer pioneer={selectedPioneer} onBack={handleBack} />
      ) : (
        <>
          <h1 style={{ fontSize: "2.5rem", color: "#e2b96f", marginBottom: "40px", textAlign: "center" }}>
            Internet Pioneers
          </h1>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            maxWidth: "900px",
            margin: "0 auto",
          }}>
            {pioneers.map((pioneer) => (
              <div key={pioneer.id} style={{ textAlign: "center" }}>

                <span style={{
                  display: "inline-block",
                  marginBottom: "10px",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  background: pioneer.viewed ? "#2d6a4f" : "#c1121f",
                  color: "white",
                }}>
                  {pioneer.viewed ? "Viewed" : "Not Viewed"}
                </span>

                <br />

                <img
                  src={pioneer.image}
                  alt={pioneer.name}
                  onClick={() => handlePioneerClick(pioneer)}
                  style={{
                    width: "180px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                    transition: "transform 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />

                <h5 style={{ marginTop: "12px", color: "#e2b96f", fontSize: "1rem" }}>
                  {pioneer.name}
                </h5>

              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;