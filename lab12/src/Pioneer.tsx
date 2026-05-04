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
      <div className="container mt-4">
  
        <button className="btn btn-secondary mb-3" onClick={onBack}>
          Back
        </button>
  
        <div className="row">
          <div className="col-md-4">
            <img
              src={pioneer.image}
              alt={pioneer.name}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-8">
            <h2>{pioneer.name}</h2>
            <p>{pioneer.bio}</p>
            <p><strong>Born:</strong> {pioneer.born}</p>
            <p><strong>Known for:</strong> {pioneer.knownFor}</p>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Pioneer;
  