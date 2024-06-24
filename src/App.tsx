import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Investors } from "./screens";

import ROUTES from "./routes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.investors} element={<Investors />} />
      </Routes>
    </Router>
  );
};

export default App;
