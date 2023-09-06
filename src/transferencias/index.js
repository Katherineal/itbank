import './index.css'
import React, {useState} from 'react';
import ConvertirDe from '../componentes/convertirde/ConvertirDe.jsx';
import ConvertirA from '../componentes/convertira/ConvertirA.jsx';
import Monedas from '../componentes/monedas/Monedas.jsx';

export function Transferencias() {
    const [monedaDe, setMonedaDe] = useState('');
    const [monedaA, setMonedaA] = useState('');
    const [cantidad, setCantidad] = useState(0);


    const handleMonedaDeChange = (moneda) => {
        setMonedaDe(moneda);
    };

    const handleMonedaAChange = (moneda) => {
        setMonedaA(moneda);
    };

    const handleCantidadCambiada = (nuevaCantidad) => {
        setCantidad(nuevaCantidad);
    }
    return (
            <div className='App'>
                <ConvertirDe 
                    onMonedaDeSeleccionada={handleMonedaDeChange}
                    onCantidadCambiada={handleCantidadCambiada}
                />
                <ConvertirA 
                    onMonedaASeleccionada={handleMonedaAChange}
                    onCantidadCambiada={handleCantidadCambiada}
                />
                <Monedas  monedaDe={monedaDe} monedaA={monedaA} cantidad={cantidad}/>
            </div>
    )
}

export default Transferencias;
