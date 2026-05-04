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
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg?utm_source=en.wikiquote.org&utm_campaign=index&utm_content=originalS",
      bio: "Tim Berners-Lee is a British computer scientist best known as the inventor of the World Wide Web. He made his proposal in 1989 while working at CERN.",
      born: "June 8, 1955",
      knownFor: "Inventing the World Wide Web",
      viewed: false,
    },
    {
      id: 2,
      name: "Vint Cerf",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Dr_Vint_Cerf_ForMemRS_%28cropped%29.jpg",
      bio: "Vint Cerf is an American internet pioneer recognized as one of the fathers of the internet for co-designing the TCP/IP protocols.",
      born: "June 23, 1943",
      knownFor: "Co-designing TCP/IP",
      viewed: false,
    },
    {
      id: 3,
      name: "Ada Lovelace",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png",
      bio: "Ada Lovelace was an English mathematician and writer, chiefly known for her work on Charles Babbage's Analytical Engine. She is often regarded as the first computer programmer.",
      born: "December 10, 1815",
      knownFor: "First computer programmer",
      viewed: false,
    },
    {
      id: 4,
      name: "Grace Hopper",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9yrzLTpENXSKGckFKHsd2OxayD7tSPxdSQ&s",
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
    <div className="container mt-4">

      {selectedPioneer ? (
        <Pioneer pioneer={selectedPioneer} onBack={handleBack} />
      ) : (
        <>
          <h1 className="mb-4">Internet Pioneers</h1>

          <div className="row">
            {pioneers.map((pioneer) => (
              <div key={pioneer.id} className="col-md-3 mb-4 text-center">

                <span className={`badge mb-2 ${pioneer.viewed ? "bg-success" : "bg-danger"}`}>
                  {pioneer.viewed ? "Viewed" : "Not Viewed"}
                </span>

                <img
                  src={pioneer.image}
                  alt={pioneer.name}
                  className="img-fluid rounded"
                  style={{ cursor: "pointer", maxHeight: "200px", objectFit: "cover" }}
                  onClick={() => handlePioneerClick(pioneer)}
                />

                <h5 className="mt-2">{pioneer.name}</h5>

              </div>
            ))}
          </div>
        </>
      )}

    </div>
  );
}

export default App;