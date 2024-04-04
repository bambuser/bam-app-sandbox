import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const appContext = await bambuserAppFramework.getContext();
const { screen } = appContext;

const App = () => {
  const onClickContinue = () => {
    screen.close({ action: 'next' });
  };

  useEffect(() => {
    screen.setReady();
  }, []);

  return (
    <div className="bam-container" data-padding="normal">
      <div className="bam-container" data-spacing="x-small">
        <div className="bam-headline1">Welcome  👋</div>
        <div className="bam-title">A sandbox for the Bambuser App Framework</div>
      </div>
      <div className="bam-container">
        <p>Edit <b>view/startScreen/startScreen.jsx</b> and remove the disabled attribute on "Continue" button below 👷‍♀️</p>
        <button data-variant="primary" onClick={onClickContinue} disabled>Continue 🚀</button>
      </div>
    </div>
  )
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
