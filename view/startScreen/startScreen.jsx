import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const appContext = await bambuserAppFramework.getContext();
const { screen } = appContext;

const App = () => {
  useEffect(() => {
    screen.setReady();
  }, []);

  return (
    <div className="bam-container" data-padding="normal">
      <div className="bam-container" data-spacing="x-small">
        <div className="bam-headline1">Welcome</div>
        <div className="bam-title">A Bambuser App Framework custom view</div>
      </div>
      <div className="bam-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet enim feugiat, blandit mi in, volutpat tellus. Phasellus eget erat at nibh pulvinar interdum. Vivamus imperdiet pharetra nulla, ac imperdiet nisl finibus at. Praesent cursus elementum viverra. Duis tempus erat risus, at auctor quam malesuada vel. Praesent sit amet magna at massa finibus aliquam.</p>
        <button data-variant="primary">Click click click</button>
      </div>
    </div>
  )
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
