import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { BsCurrencyDollar, BsCurrencyEuro } from 'react-icons/bs';

const Header = ({ rates, isloading }) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.logo}>
            {' '}
            <h4>Конвертер валют</h4>
         </div>
         {!isloading ? (
            <div className={styles.currencyWrapp}>
               <div className={styles.currencyDollar}>
                  <BsCurrencyDollar />
                  <div className={styles.dollar}>
                     <span>{Number(rates['UAH'].toFixed(3))}</span>
                  </div>
               </div>
               <div className={styles.currencyEuro}>
                  <BsCurrencyEuro />
                  <div className={styles.euro}>
                     {Number((rates['UAH'] / rates['EUR']).toFixed(3))}
                  </div>
               </div>
            </div>
         ) : (
            '...'
         )}
      </div>
   );
};

export default Header;
