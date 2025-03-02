import Accordings from "./components/Accordings";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordings title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
