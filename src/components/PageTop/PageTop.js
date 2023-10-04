import './PageTop.css';
import { BiHealth } from 'react-icons/bi';
import { IconContext } from 'react-icons';

function PageTop({data}){
    
    /*
    const {forecast} = data;
    //Es como hacer un if y un else en una línea:
    
    const img = !data.sprites ? '' : data.sprites.other['official-artwork'].front_default;
    
    const colorType = !types ? [] : types.map(type => {
        return getComputedStyle(document.body).getPropertyValue('--'+type.type.name);
    });
    */
    
    return(
        <div className='topFather'>
            <div className='left'>
                <h2 className='greetings'>Good Evening!</h2>
            </div>
            <div className='right'>
                <IconContext.Provider value={{className: 'icon'}}>
                    <BiHealth/>
                </IconContext.Provider>
            </div>
        </div>
    )
};

export default PageTop;