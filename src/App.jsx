import { useAppStyle } from "./common/styles";
import HomePage from "./containers/HomePage";

function App() {
  const classes = useAppStyle();
  return (
    <div className={classes.root}>
      <HomePage />
    </div>
  );
}

export default App;
