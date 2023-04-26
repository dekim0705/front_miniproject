import Header from "../components/Header";
import Main from "../components/Main/Main";
import MainBoard from "../components/Main/MainBoard";
import MentorButton from "../components/Main/MentorButton";
import WriteButton from "../components/Main/WriteButton";

const HomePage = () => {

  return (
    <>
      <Header />
      <Main />
      <MainBoard />
      <WriteButton />
      <MentorButton />
    </>
  );
}

export default HomePage;