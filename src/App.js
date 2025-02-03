import { useState } from 'react'
import './App.css'
import { data } from './data'
import Header from './Header'
import Footer from './Footer';
import Slide from './Slide';


function App() {
  const [gifts, setGifts] = useState(data);

  const removeGift = (id) => {
    let newGifts = gifts.filter(gift => gift.id!==id);
    setGifts(newGifts)
  }

  return (<div>
    <Header />
    
    <div className='title'>
      <h1>List of {gifts.length} gifts</h1>
    </div>

    {gifts.map((element => {
      const {id, name, description, price, image } = element;
      return (<div className='box'key={id}>
        
        <div>
          <img src={image} width='300px'/>
        </div>
        
        <div className='container'>
          <div>
            <h2>{id} - {name}</h2>
          </div>

          <div>
            <p>{description}</p>
          </div>

          <div>
            <h2>{price}</h2>
          </div>

          <div className='container'>
            <button onClick={() => removeGift(id)}>REMOVE ITEM</button>
          </div>
      </div>
      </div>)
    }))}

    <div className='btn'>
      <button onClick={() => setGifts([])}>delete all</button>
    </div>

    <Slide />

    <Footer />
   </div>
  );
}
export default App;
