import './WeeklyBar.css';
import infoAPI from '../../Back/information';
import { useEffect, useState } from 'react';
import {WiDaySunny, WiDayCloudy, WiDayRain, WiDayWindy, WiDaySnow} from 'react-icons/wi';

function WeeklyBar({data, onClick}){
    const [element, setElement] = useState(1);
    const [infoData, setInfoData] = useState({
        climaActual: null,
        climaMax: null,
        climaMin: null,
        dia: null,
    });

    const ClimaSign = ( clima ) => {
        switch(clima){
            case 'soleado':
                return 'Sunny';
            case 'nublado':
                return 'Cloudy';
            case 'lluvioso':
                return 'Rain';
            case 'ventoso':
                return 'Windy';
            case 'nevado': 
                return 'Snow';
            default: 
                return 'No hay clima seleccionado'
        }
    }

    const GetClickedElement = ( id ) => {
        setElement( id );
    }

    const GetInfoClickedItem = () => {
        const item = infoAPI().registros.find(item => element === item.id);
        
        if (item) {
            setInfoData({
                climaActual: item.temperaturaActual,
                climaMax: item.temperaturaMaxima,
                climaMin: item.temperaturaMinima,
                dia: item.diaDeLaSemana,
            });
        }
    }

    const FormatDay = ( day ) => {
        let first = day.charAt(0);
        let rest = day.slice(1);
        return first.toUpperCase() + rest;
    }
    
    useEffect(() => {
        GetInfoClickedItem();
    }, [element]);

    return(
        <div className='father-container'>
                <div className='global'>
                    <div className='upper'>
                        <div className='marker'>
                            <div className='grades'>
                                <h2>{infoData.climaActual}<sub>°C</sub></h2>
                            </div>
                            <div className='min-max'>
                                <div className='min'>
                                    <p className='text'>min</p>
                                    <p className='number'>{infoData.climaMin}<sub>°C</sub></p>
                                </div>
                                <div className='max'>
                                    <p className='text'>max</p>
                                    <p className='number'>{infoData.climaMax}<sub>°C</sub></p>
                                </div>
                            </div>
                        </div>
                        <div className='days'>
                            <h2>{FormatDay(infoData.dia)}</h2>
                        </div>
                    </div>
                    <div className='down'>
                        {infoAPI()['registros'].map(( item ) => (
                            <div onClick={() => GetClickedElement(item.id)} className={element === item.id ? 'selected' : ''}>
                                <p>{item.diaDeLaSemana.slice(0, 3)}</p>
                                {ClimaSign( item.clima ) === 'Sunny' 
                                    ? <WiDaySunny/>
                                : 
                                    null
                                }
                                {ClimaSign( item.clima ) === 'Cloudy'
                                    ? <WiDayCloudy/>
                                :
                                    null
                                }
                                {ClimaSign( item.clima ) === 'Rain'
                                    ? <WiDayRain/>
                                :
                                    null
                                }
                                {ClimaSign( item.clima ) === 'Windy'
                                    ? <WiDayWindy/>
                                :
                                    null
                                }
                                {ClimaSign( item.clima ) === 'Snow'
                                    ? <WiDaySnow/>
                                :
                                    null
                                }
                                <p>{item.temperaturaActual}°C</p>
                            </div>
                        ))}  
                    </div>
                </div>
        </div>
    )
};

export default WeeklyBar;