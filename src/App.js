import { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Block from './components/Block/Block';

function App() {
   const ratesRef = useRef({});
   const [isloading, setIsLoading] = useState(true);
   const [fromCurrency, setFromCurrency] = useState('USD');
   const [toCurrency, setToCurrency] = useState('UAH');
   const [fromPrice, setFromPrice] = useState(1);
   const [toPrice, setToPrice] = useState(0);

   useEffect(() => {
      fetch('https://openexchangerates.org/api/latest.json?app_id=b417c28f0c6b414b85b1237fbde01656')
         .then((res) => res.json())
         .then((response) => {
            ratesRef.current = response.rates;
            setIsLoading(false);
            onChangeFromPrice(1);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   const onChangeFromPrice = (value) => {
      const price = value / ratesRef.current[fromCurrency];
      const result = price * ratesRef.current[toCurrency];

      setToPrice(result.toFixed(3));
      setFromPrice(value);
   };
   useEffect(() => {
      onChangeFromPrice(fromPrice);
   }, [fromCurrency]);

   const onChangeToPrice = (value) => {
      const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
      setToPrice(value);
      setFromPrice(result.toFixed(3));
   };
   useEffect(() => {
      onChangeToPrice(toPrice);
   }, [toCurrency]);

   return (
      <div className="wrapper">
         <Header
            rates={ratesRef.current}
            isloading={isloading}
         />
         {!isloading && (
            <Block
               value={fromPrice}
               currency={fromCurrency}
               onChangeCurrency={setFromCurrency}
               onChangeValue={onChangeFromPrice}
            />
         )}
         {!isloading && (
            <Block
               value={toPrice}
               currency={toCurrency}
               onChangeCurrency={setToCurrency}
               onChangeValue={onChangeToPrice}
            />
         )}
      </div>
   );
}

export default App;
