import React from 'react';
import styles from './style.module.scss';

const Block = ({ value, onChangeValue, currency, onChangeCurrency }) => {
   const defaultCurrencies = ['UAH', 'USD', 'EUR'];

   return (
      <div className={styles.wrapper}>
         <ul className={styles.currencies}>
            {defaultCurrencies.map((val) => (
               <li
                  onClick={() => onChangeCurrency(val)}
                  key={val}
                  className={val === currency ? 'active' : ''}
               >
                  {val}
               </li>
            ))}
         </ul>
         <input
            type="number"
            onChange={(e) => onChangeValue(e.target.value)}
            value={value}
            placeholder={0}
         />
      </div>
   );
};

export default Block;
