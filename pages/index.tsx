import type { NextPage } from "next";
import { Alert } from "nmgix-components/src";

const Home: NextPage = () => {
  return (
    <div>
      <Alert type='header' scheme='interest'>
        <>какое-тое уведомление!!!</>
      </Alert>
      <span>Helloooooo</span>
    </div>
  );
};

export default Home;
