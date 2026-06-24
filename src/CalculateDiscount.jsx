
function Calculate({ItemName,DiscountPer,OriginalPrice}){

    const calculateDiscount = (OriginalPrice,DiscountPer) => {
        const discount = (OriginalPrice * DiscountPer)/100;
        return OriginalPrice - discount;
    }

    const discountedPrice = calculateDiscount(OriginalPrice,DiscountPer);

    function displayDiscount({ItemName,DiscountPer,OriginalPrice}){
        console.log("Item-Name: "+ItemName)
        console.log("Original Price: "+OriginalPrice)
        console.log("Discount Percentage: "+DiscountPer)
        console.log("Discounted Price: "+discountedPrice)
    }

    displayDiscount({ItemName,DiscountPer,OriginalPrice})

    return(
        <div>
            <h2>SHOP CARD</h2>
            <p>Item-Name: {ItemName}</p>
            <p>Original Price: ${OriginalPrice}</p>
            <p>Discount Percentage: {DiscountPer}</p>
            <p>Discounted Price: ${discountedPrice}</p>
        </div>
    )
}

export default Calculate