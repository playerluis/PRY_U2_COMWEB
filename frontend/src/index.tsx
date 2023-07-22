import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {getMensaje} from "./api";


function App(): React.JSX.Element {
    const [mensaje, setMensaje] = useState<string>('');
    useEffect(():void => {
        getMensaje()
            .then((data) => {
                console.log(data);
                setMensaje(data.message)
            })
            .catch((error) => console.error('Error al obtener el mensaje:', error));
    }, []);
    return (
        <div>
            <h1>Mensaje desde la API:</h1>
            <p>{mensaje}</p>
        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

reportWebVitals();
