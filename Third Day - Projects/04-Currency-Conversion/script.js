// Day 3 CUrrency COnverter

function convertSterling(currency, value) {
    if (currency==='USD' || currency === 'usd') {
      return sterling*1.4;
    } else if ((currency==='BRL' || currency === 'brl')){
      return (sterling*0.99)*5.7;
    }
  }
  
  function convertTest(){
    let currency = "brl";
    let value = 150;
    let expected = (convertSterling(currency, value));
    console.log (expected);
  }