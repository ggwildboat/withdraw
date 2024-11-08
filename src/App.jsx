import React, { useState } from 'react'

const App = () => {
  const [balance, setbalance] = useState(10000);
  const [withhdrrawAmount, setwithrawAmount] = useState(0);

  const withdraw = (amount) => {
    if (balance - amount > 0) {
      setbalance(balance - amount)
    } else {
      alert('ไม่สามารถถอนเงินจนหมดบัญชีได้')
    }
  }

  const handleInputchange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setwithrawAmount(value);
  };

  const handlewithdraw = () => {
    if (withhdrrawAmount < balance) {
      setbalance(balance - withhdrrawAmount);
    } else {
      alert('ไม่สามารถถอนเงินเกินจํานวนที่มีอยู่ในบัญชีได้')
    }
  };

  return (
    <>
      <div>
        <h2>ระบบถอนเงิน</h2>
        <p>ยอดเงินคงเหลือ : <span>{balance}</span></p>
        <button onClick={() => withdraw(100)}>ถอนเงิน 100 บาท</button>
        <button onClick={() => withdraw(500)}>ถอนเงิน 500 บาท</button>
        <button onClick={() => withdraw(1000)}>ถอนเงิน 1000 บาท</button>
        <button onClick={() => withdraw(5000)}>ถอนเงิน 5000 บาท</button>
        <input type="number" value={withhdrrawAmount} onChange={handleInputchange} />
        <button onClick={handlewithdraw}>ถอนเงิน</button>
      </div>
    </>
  )
}

export default App