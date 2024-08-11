var customSkuData = {
    '9218B005': {
        "price": {
            "priceWithTax": "47.49",
            "voucherCode": "",
            "voucherDiscount": ""
        }
    },
    '3113C008': {
        "price": {
            "priceWithTax": "334.99",
            "voucherCode": "",
            "voucherDiscount": ""
        }
    },
    '9808A016': {
        "price": {
            "priceWithTax": "8.59",
            "voucherCode": "",
            "voucherDiscount": ""
        }
    }
};
 function calculateTotalPrice(jsonData){
    let totalPrice =0;
 
  for(let item in jsonData) {
    let price = customSkuData[item].price.priceWithTax ;
    price = parseInt(price)
    totalPrice +=price
  };

  return totalPrice;
}
    console.log("Total Price is - "+calculateTotalPrice(customSkuData));

    let result=0;
    function Calculate(){
        let a =55;
        let b=55;
        result = a+b;
    }
    Calculate()
    console.log(result);
