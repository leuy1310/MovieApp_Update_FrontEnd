import ContentMain from "../Components/Content/ContentMain";
import Intro from "../Components/Intro/intro";

function HomePage(props) {
  const { handleAddToMyList } = props;
  return (
    <>
      <Intro />
      <ContentMain handleAddToMyList={handleAddToMyList} />
    </>
  );
}

export default HomePage;
