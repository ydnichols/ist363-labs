const students = [
    {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'},
    {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'},
    {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
  ];
  
  function Students() {
    const filtered = students.filter(item => item.name === "Sue Flay");
    return (
      <ul>
        {filtered.map(item => (
          <li key={item.suid}>
            {item.name} | {item.year} | {item.major}
          </li>
        ))}
      </ul>
    );
  }
  
  function handleClick(message) {
    console.log(message);
  }
  
  export default function App() {
    return (
      <div>
        <h1>Students</h1>
        <Students />
        <button onClick={() => handleClick("Button was clicked!")}>Click Me</button>
      </div>
    );
  }