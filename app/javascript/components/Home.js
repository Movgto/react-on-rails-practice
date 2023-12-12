import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGreetings } from "../slices/greetingSlice";
import Greeting from "./Greeting";

function Home() {
  const { greeting } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!greeting) {
      dispatch(fetchGreetings());
    }
  }, [dispatch, greeting]);

  if (greeting) {
    return (
      <Greeting message={greeting} />
    );
  }

  return (
    <div></div>
  );
}

export default Home;