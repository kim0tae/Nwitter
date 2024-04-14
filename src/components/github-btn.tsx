import {
  GithubAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../\bfirebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: black;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GitHubButton() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithRedirect(auth, provider);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/github-mark.svg"></Logo>
      Continue with Github
    </Button>
  );
}
