import { yellowBackground } from '../css/extra.css';

const NavigationBar = () => (
  <>
    <div style={{zIndex: "50", maxHeight: "3rem"}}>
      <div className="title-bar-left" style={{yellowBackground}}>
        <span className="title-bar-title">Get Baking!</span>
      </div>
    </div>
  </>
);

ReactDOM.render(<NavigationBar />, document.querySelector("#navigationBar"))