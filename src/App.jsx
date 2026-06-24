import Calculate from "./CalculateDiscount"
import { useState } from 'react';

function App() {

  const [itemName, setItemName] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPer, setDiscountPer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const isFormValid =
    itemName.trim() !== "" &&
    originalPrice !== "" &&
    discountPer !== "";

  const handleSubmit = () => {
    setShowResult(true);
};


  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Enter Product Details</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Item Name: </label>
        <input 
          type="text" 
          value={itemName} 
          placeholder="enter item-name"
          onChange={(e) => {setItemName(e.target.value);setShowResult(false);}}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Original Price ($): </label>
        <input 
          type="number" 
          value={originalPrice} 
          placeholder="enter price"
          onChange={(e) => {setOriginalPrice(Number(e.target.value)); setShowResult(false);}}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Discount Percentage (%): </label>
        <input 
          type="number" 
          value={discountPer} 
          placeholder="enter discount percentage"
          onChange={(e) => {setDiscountPer(Number(e.target.value)); setShowResult(false);}} 
        />
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          style={{marginLeft: "10px",cursor: isFormValid ? "pointer" : "not-allowed",}}>Submit</button>
      </div>

      <hr />

       {showResult && (
        <Calculate
          ItemName={itemName}
          OriginalPrice={Number(originalPrice)}
          DiscountPer={Number(discountPer)}
        />
      )}
    </div>
  );
}

export default App
