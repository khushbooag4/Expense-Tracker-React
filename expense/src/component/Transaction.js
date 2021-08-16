import React , {useContext} from 'react';
import { GlobalContext } from './context/GlobalState';


export const Transaction = () => {
    const { transactions }= useContext(GlobalContext);
    const { Delete } = useContext(GlobalContext)
    
    
    return (
        <>
            <h3>History</h3>
      <ul className="list">
          {
          transactions.map(transactions => (
            <li className= {transactions.amount>0?"plus":"minus"}>
           {transactions.text} <span>{transactions.amount}$</span>
           <button className="delete-btn">x</button> 
        </li>  
       )
           )
           }
      
      </ul>

     </>
        
    )
}
