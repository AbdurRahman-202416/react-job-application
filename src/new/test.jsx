const names = ["Shanto", "Abdur rahman", "Sabbir ahmed"];
const loggedIn = false;
const style = {
  color: "red",
  fontSize: "50px",
};
const App22 = () => {
  return (
    <div>
      <h1
        style={{ backgroundColor: "tomato" }}
        className="text-5xl text-yellow-50"
      >
        Hello ,{names[0]}!
      </h1>
      <ol style={{ color: "blueviolet" }}>
        {names.map((name, index) => (
          <li className="text-3xl" key={index}>
            {index + 1}) {name}
          </li>
        ))}
      </ol>
      {loggedIn ? (
        <h1 className="text-teal-900 text-8xl">Hello Memeber </h1>
      ) : (
        <h1 className="text-teal-900 text-8xl">Please login</h1>
      )}
    </div>
  );
};

export default App22;
