import { useState } from "react";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0)
  const [percent1, setPercent1] = useState(0)
  const [percent2, setPercent2] = useState(0)

  const totalPercent = (percent1 + percent2) / 2
  const totalTip = (bill * totalPercent) / 100
  const totalBill = bill + totalTip

  function handleReset() {
    setBill(0)
    setPercent1(0)
    setPercent2(0)
  }
  return (
    <>
      <div>
        <BillInput bill={bill} onbill={setBill}/>
        <SelectPercentage percent={percent1} onSelect={setPercent1}>How did you like the service?</SelectPercentage> <br/>
        <SelectPercentage percent={percent2} onSelect={setPercent2}>How did your friend like the service?</SelectPercentage>
      </div>
      { bill > 0 ? 
      (
      <>
      <h1>You pay ${totalBill} (${bill} + ${totalTip} tip)</h1> 
      <button onClick={handleReset}>Reset</button>
      </>
      ) : '' }
      
    </>
  )
}

function BillInput({bill, onbill}) {
  function handleBillChange(e) {
    onbill(+e.target.value)
  }
  return (
    <div>
      <lebel>How much was the bill?</lebel>
      <input type="text" placeholder="Bill Value" value={bill} onChange={handleBillChange}/>
    </div>
  )
}

function SelectPercentage({children, percent, onSelect}) {

  function handleSelectChange(e) {
    onSelect(+e.target.value)
  }

  return(
    <>
      <lebel>{children}</lebel>
      <select value={percent} onChange={handleSelectChange}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was Okay(5%)</option>
        <option value="10">It was Good(10%)</option>
        <option value="15">It was Amazing(15%)</option>
      </select>
    </>
  )
}

export default App;
