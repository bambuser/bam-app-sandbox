import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const appContext = await bambuserAppFramework.getContext();
const { tool, hostId } = appContext;

const App = () => {
  useEffect(() => {
    tool.setReady();
  }, []);

  return (
    <div className="bam-container" data-padding="normal">
      <div className="bam-container">
        {hostId === 'showsPlayer' && (
          <>
            <p>This is a custom tool for shoppers in Bambuser Live Player.</p>
            <p>The app is also built to support Bambuser Video Consultation and provides the same custom views. Just switch to either <b>1:1 Widget</b> or <b>1:1 Agent Tool</b> in the upper right corner and then open <b>My tool</b> in the <b>"..." More</b> menu.</p>
          </>
        )}
        {hostId === 'callsWidget' && (
          <>
            <p>This is a custom tool for shoppers in Bambuser Video Consultation.</p>
            <p>You can also go to <a href="http://localhost:5173/devenv/?screen=pre-call#callsWidget" target='_blank'>http://localhost:5173/devenv/?screen=pre-call#callsWidget</a> and see the custom pre-call screens provided by the app for Video Consultation.</p>
          </>
        )}
        {hostId === 'callsAgentTool' && (
          <p>This is a custom tool for agent in Bambuser Video Consultation.</p>
        )}
      </div>
      <p>Edit this tool in <b>view/myTool/myTool.jsx</b> 🚧</p>
    </div>
  )
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
