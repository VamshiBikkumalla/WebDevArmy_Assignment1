import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books =[
  {
    id:1,
    img:'https://m.media-amazon.com/images/I/41sc4JBJHJL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg',
    title:'WRITTEN IN THE STARS',
    author:'Divya Anand',
   price1: 'RS. 125',
    price2: 'RS. 75'
  },
  {
    id:2,
    img:'https://m.media-amazon.com/images/I/51CmIwiqg0L._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg',
    title:'MAGICAL MYTHOLOGY',
    author:'Stuti Guptha',
   price1: 'RS. 225',
    price2: 'RS. 125'
  },
  {
    id:3,
    img:'https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY327_FMwebp_QL65_.jpg',
    title:'IKIGAI',
    author:'Francesc Miralles ',
   price1: 'RS. 185',
    price2: 'RS. 105'
  },
  {
    id:4,
    img:'https://images-eu.ssl-images-amazon.com/images/I/51-nXsSRfZL._AC_SX368_.jpg',
    title:'ATOMIC HABBITS',
    author:'James Clear',
   price1: 'RS. 325',
    price2: 'RS. 225'
  },
  {
    id:5,
    img:'https://images-eu.ssl-images-amazon.com/images/I/41r6F2LRf8L._AC_SX368_.jpg',
    title:'THE PHYSCHOLOGY OF MONEY',
    author:'Morgan Housel',
   price1: 'RS. 125',
    price2: 'RS. 65'
  },
  {
    id:6,
    img:'https://images-eu.ssl-images-amazon.com/images/I/516pmXNNmCL._AC_SX368_.jpg',
    title:'THE SUBTLE ART OF NOT GIVING A F*CK',
    author:'Mark Manson',
   price1: 'RS. 245',
    price2: 'RS. 165'
  },
  {
    id:7,
    img:'https://images-eu.ssl-images-amazon.com/images/I/51m34-qLjUL._AC_SX368_.jpg',
    title:'IT ENDS WITH US',
    author:'Colleen Hoover',
   price1: 'RS. 165',
    price2: 'RS. 115'
  },
  {
    id:8,
    img:'https://images-eu.ssl-images-amazon.com/images/I/41oYp387k8L._AC_SX368_.jpg',
    title:'DO EPIC SHIT',
    author:'Ankur Warikoo',
   price1: 'RS. 295',
    price2: 'RS. 245'
  },
  {
    id:9,
    img:'https://images-eu.ssl-images-amazon.com/images/I/41VC-6wmHsL._AC_SX368_.jpg',
    title:'HOW TO TALK TO ANYONE',
    author:'Leil Lowndes',
    
   price1: 'RS. 185',
    price2: 'RS. 95'
  },
  {
    id:10,
    img:'https://images-eu.ssl-images-amazon.com/images/I/51oVTRsjcqL._AC_SX368_.jpg',
    title:'THE SILENT PATIENT',
    author:'Alex Michaelides',
   price1: 'RS. 190',
    price2: 'RS. 100'
  },
  
  
];


function Booklist(){
  return(
    <section className='booklist'>
      {
         books.map((bookdetails)=>{
          return(
           
              <Book  bookinfo={bookdetails} key={bookdetails.id}></Book>
           
          )
        })
      }
    </section>
  )
};

const Book= (props) =>{
  const {img,title,author,price1,price2} = props.bookinfo;

  /*const HandleChange =()=>{
    return(
      
    )
  }*/
  const [priceone , srtPriceOne] = useState(false);
  const [pricetwo , setPriceTwo] = useState(false);

  return(
   <section className='book'>
    <img src={img} alt="img" className='image'/>
    <h2>{title}</h2>
    <h4>{author}</h4>
    <button className='btn' onClick={()=> srtPriceOne(!priceone)}>Paperback Price </button>
    {priceone && <span className='price1'>{price1}</span>}
    <br/>
    
    <button className='btn' onClick={()=> setPriceTwo(!pricetwo)}>Kindle Edition Price</button>
    {pricetwo && <span className='price2'>{price2}</span>}
   </section>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Booklist/>)
