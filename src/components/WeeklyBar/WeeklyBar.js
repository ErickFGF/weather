import './WeeklyBar.css';

function WeeklyBar({data, onClick}){

    //const {day, cTemp, condition, types} = data;

    return(
        <div className='father-container'>
            <div className='global'>
                <div>
                    <div className='marker'>
                        <div className='grades'>
                            <h2>5<sub>°C</sub></h2>
                        </div>
                        <div>
                            <div>
                                <p>min</p>
                                <p>x</p>
                            </div>
                            <div>
                                <p>max</p>
                                <p>y</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
};

export default WeeklyBar;