
import Header from "../components/Header";

import WriteForm from "../components/Board/WriteFormContainer";
import SelectCategory from "../components/Board/CategorySelect";
import WriteButton from "../components/Board/SubmitButton";

const WrtiePage = () => {

  return (
    <>
      <Header />
      <SelectCategory />
    <WriteForm />
    <WriteButton/>
    </>
  );
}

export default WrtiePage;