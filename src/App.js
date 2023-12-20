import styles from './App.module.css';
import Converter from './components/Converter/Converter';

function App() {
  return (
    <div className={styles.mainView}>
      <Converter/>
    </div>
  );
}

export default App;
