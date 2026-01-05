import Navbar from "./components/navbar";

import Home from "./partials/home";
import Abstract from "./partials/abstract";
import Intro from "./partials/intro";
import DesignSolution from "./partials/designSolution";
import Analytics from "./partials/analytics";
import Recommendation from "./partials/recommendation";
import ProblemAnalytic from "./partials/problemAnalytic";

const App = () => {
  return (
    <>
      <Navbar />

      <Home />
      <Abstract />
      <Intro />
      <ProblemAnalytic />
      <DesignSolution />
      <Analytics />
      <Recommendation />
    </>
  );
};

export default App;
