import { useEffect, useRef } from "react";
import  mount  from 'payments_list/Transactions';

const TransactionsRemote = () : JSX.Element => {

    const transactions = useRef<HTMLDivElement>(null);

    useEffect( () => {
      mount(transactions.current, {serverUrl : "https://payments.multicode.uk"});
    }, [])
  
    return  <div ref={transactions}></div>
}


export default TransactionsRemote;