import MyList from "../Components/MyList/MyList";

function MyListPage({ myList, setMyList }) {
  return (
    <>
      <MyList myList={myList} setMyList={setMyList} />
    </>
  );
}

export default MyListPage;
