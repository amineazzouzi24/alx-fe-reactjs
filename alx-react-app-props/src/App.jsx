import UserContext from "./UserContext";
import UserProfile from "./UserProfile";

function App() {
  const userData = {
    name: "Jane Doe",
    age: 25,
    bio: "Web developer and music lover."
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
