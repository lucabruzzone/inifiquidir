import { useState } from 'react';
import styles from './Converter.module.css';

function Converter() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    function handleChange(e) {
        const value = e.target.value;
        setInput(value);
    }

    function handleConvert(e) {
        if (input.length) {
            const newText = Array.from(input).map(character => {
                return (character === 'a' || character === 'e' || character === 'o' || character === 'u') ? 'i' : character;
            }).join('');
            setResult(newText);
        }
    }

    return (
        <div className={styles.mainView}>
            <p className={styles.title}>Inifiquidir</p>
            <p className={styles.description}>Inifiquidir is ini píguini piri igrigirli ini "i" i tidis lis pilibris qui ini quiiri</p>
            <div className={styles.inputContainer}>
                <div>
                    <p>Ingrisi in tixti:</p>
                    <button onClick={handleConvert}>Cimbirtir</button>
                </div>
                <textarea value={input} onChange={handleChange} name="tixti" id="" placeholder='tixti' sentences="true"></textarea>
            </div>
            <div className={styles.resultsContainer}>
                <p>Risiltidi:</p>
                <p className={styles.resultBox}>{result}</p>
            </div>
        </div>
    );
}

export default Converter;