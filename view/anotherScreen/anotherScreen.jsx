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
    <div className="bam-container" data-padding="normal" style={style.root}>
      <div className="bam-container">
        <div className="bam-container" data-spacing="x-small">
          <div className="bam-headline1">Woho! 🎉</div>
        </div>
        <div className="bam-container" style={style.content}>
          <p>Congratulations, you have just modified the app and navigated to another screen provided by the app!</p>
          <p>To see another example of a custom view press the <b>Continue</b> button and find <b>My tool</b> in the <b>"..."</b> menu</p>
          <button data-variant="primary" onClick={onClickContinue}>Continue</button>
        </div>
      </div>
      <p>Edit this screen in <b>view/anotherScreen/anotherScreen.jsx</b> 🚧</p>
    </div>
  )
};

const style = {
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    textAlign: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 140,
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
