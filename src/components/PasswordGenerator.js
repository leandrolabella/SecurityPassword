import React, { useState } from 'react'
import './PasswordGenerator.css';

function PasswordGenerator() {
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [symbols, setSymbols] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [chars, setChars] = useState(12);
    const [generatedPassword, setGeneratedPassword] = useState("");

    const updateSizeInput = (event) => {
        if (event.target.value >= 6 && event.target.value <= 30) {
            setChars(event.target.value);
        }
    }

    function copyToClipboard() {
        if (generatedPassword !== '') {
            navigator.clipboard.writeText(generatedPassword);

            var tooltip = document.getElementById("myTooltip");
            tooltip.innerHTML = "Copiado: " + generatedPassword;
        }
    }

    function mouseOut() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copiar para área de transferência";
    }

    function generatePassword() {
        let url = `http://security-password-production.up.railway.app/api/v1/password?uppercase=${uppercase}&lowercase=${lowercase}&symbols=${symbols}&numbers=${numbers}&size=${chars}`;
        fetch(url).then(res => {
            return res.json()
        })
            .then(json => {
                setGeneratedPassword(json['password'])
            })
    }

    return (
        <div>
            <header>
                <div className='header-container'>
                    <span className='span-checked'>PASSWORD GENERATOR</span>
                    <span className='span-no-checked'>PASSWORD CHECK</span>
                </div>
            </header>
            <div className='generator-container'>
                <div className='generated-input-container'>
                    <input type="text" disabled={true} value={generatedPassword} className='generator-input'></input>
                    <div class="tooltip">
                        <button onClick={copyToClipboard} onMouseOut={mouseOut} className='generator-button-copy'><span class="tooltiptext" id="myTooltip">Copiar para área de transferência</span>COPIAR</button>
                    </div>
                </div>
                <div className='generator-input-container'>
                    <div className='generator-checkbox-container'>
                        <label className='generator-label-container'>
                            <input type="checkbox" defaultChecked={uppercase} onChange={(e) => setUppercase(e.target.checked)} className='generator-checkbox'></input>
                            <span className='span-checkbox'>LETRAS MAIÚSCULAS</span>
                        </label>
                        <label className='generator-label-container'>
                            <input type="checkbox" defaultChecked={lowercase} onChange={(e) => setLowercase(e.target.checked)} className='generator-checkbox'></input>
                            <span className='span-checkbox'>LETRAS MINÚSCULAS</span>
                        </label>
                    </div>
                    <div className='generator-checkbox-container'>
                        <label className='generator-label-container'>
                            <input type="checkbox" defaultChecked={symbols} onChange={(e) => setSymbols(e.target.checked)} className='generator-checkbox'></input>
                            <span className='span-checkbox'>SÍMBOLOS</span>
                        </label>
                        <label className='generator-label-container'>
                            <input type="checkbox" defaultChecked={numbers} onChange={(e) => setNumbers(e.target.checked)} className='generator-checkbox'></input>
                            <span className='span-checkbox'>NÚMEROS</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='generator-size-container'>
                <label className='generator-size-label-container'>
                    <input type="number" min="6" max="30" step="1" value={chars} onChange={updateSizeInput} className='generator-size-number-input'></input>
                    <span className='generator-size-span'>QUANTIDADE DE CARACTERES</span>
                </label>
                <div className='generator-range-container'>
                    <input type="range" min="6" max="30" step="1" value={chars} onChange={updateSizeInput} className='generator-input-range'></input>
                </div>
            </div>
            <button onClick={generatePassword} className='generate-pass-button'>GERAR SENHA</button>
        </div>
    );
}

export default PasswordGenerator;
