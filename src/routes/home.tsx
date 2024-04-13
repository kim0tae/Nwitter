import { auth } from "../\bfirebase";

export default function Home() {
  const logOut = () => {
    auth.signOut();
  };
  return (
    <h1>
      <button onClick={logOut}>Log Out</button> Home{" "}
    </h1>
  );
}
