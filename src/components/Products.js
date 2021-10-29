import React, {useState, useEffect} from 'react';
import {Link, Route} from 'react-router-dom';
import Product from './Product';
import ProductsData from './ProductsData';
import './products.css';

function Products({match, location}){

    
    const [data, setData] = useState([]);


    useEffect(() =>{
        
        let locPath = location.pathname;
        if(locPath == "/products"){
            setData([...ProductsData]);
            console.log(data);
        }else{
            console.log(locPath);
            let arrLocPath = locPath.split('/'); //  ['', 'products', '5']
            //récuperer l'element qui a le id = arrLocPath[2]
            console.log('id de produit : ' + arrLocPath[2]);
            let intermediaire = data.find((elt) => elt.id == parseInt(arrLocPath[2]));
            console.log('intermediaire : ');
            console.log(intermediaire);
            if(intermediaire != undefined){
                setData([intermediaire]);
            }else{
                setData([]);
            }
           
           console.log('nouvelle data : ');
           console.log(data);
            
        }
       
        
    },[location.pathname]); 

    console.log('nouvelle data 1 : ');
    console.log(data);

    // créer les Link 
        // undifined si data est vide
        let linkList;
        if(data != []){
             linkList = data.map( (product) => {
            
                return(
                    <li className="link-product" key={product.id} > {/* key={product.id}  */}
                      <Link to={`${match.url}/${product.id}`}> 
                        <div className="img-container"  >
                            <img className="img-respensive"  src={product.img} alt={product.description} />
                        </div>
          
                      </Link>
                    </li>
                    )  
           });
        }else{
            return   linkList = ''
         }
            
        
        




    return(<div className="container-products">
            <div className="box-products">
               <h3 className="title-products"> {data.length > 1 ? 'Produits' :  'Détails de Produit'} </h3>

               <ul className="list-products"> {linkList} </ul>

               

            </div>

            <Route strict path={`${match.path}/:productId`} render={(props) => <Product data={data} match={props.match} /> }></Route>
            {/* <Route path={match.url} render={()=> <h1>Select a product</h1>}></Route> */}
            <Route exact path={match.url} render={() => (<div className="select-product">Selectionnez un produit.</div>)} />
            


            
        </div>)
}
export default Products