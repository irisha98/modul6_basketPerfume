import { useState } from 'react';
import { also } from './also';
import './App.css';

function Slide(){
    const [item, setItem] = useState(0);
    const {name, description, price, image} = also[item]
    const nextItem = () => {
        setItem((item => {
            item ++;
            if(item > also.length -1){
                item = 0;
            }
            return item
        }))
    }
    const previousItem = () => {
        setItem ((item => {
            item --;
            if(item < 0){
                return also.length -1;
            }
            return item
        }))
    }


    return(<div>
        <div className='title'>
            <h1>We Think You'll Also Love</h1>
        </div>
        <div className='also'>
        <div>
            <img src={image} width='150px' alt='parfum' />
        </div>

        <div>
            <h1>{name}</h1>
        </div>

        <div>
            <h2>{description}</h2>
        </div>

        <div>
            <h2>{price}</h2>
        </div>

        <div>
            <button onClick={previousItem}>Previous</button>
            <button onClick={nextItem}>Next</button>
        </div>
        </div>
           
    </div>
    )
}
export default Slide;