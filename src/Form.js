export default function Form({
  cardMonth,
  cardYear,
  cardCvc,
  cardName,
  cardNumber,
  setCardCvc,
  setCardMonth,
  setCardYear,
  setCardName,
  setCardNumber,
  error,
  onSubmit,
}) {
  return (
    <div className="form">
      <label>CardHolder Name</label>
      <input
        type="text"
        placeholder="e.g. Jane Appleseed"
        minLength={5}
        value={cardName}
        onChange={(e) => setCardName(e.target.value)}
      />
      {!cardName && error && (
        <p className="error name-error">cant't be blank</p>
      )}
      <label>Card Number</label>
      <input
        type="text"
        placeholder="e.g. 1234 5678 9123 000"
        maxLength={16}
        pattern="[0-9.]+"
        value={cardNumber.replace(/[^0-9]/g, "")}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      {!cardNumber && error && (
        <p className="error num-error">cant't be blank</p>
      )}

      <div className="exp-cvc">
        <div className="exp-date">
          <label>exp. date (mm/yy)</label>
          <input
            type="text"
            placeholder="MM"
            maxLength={2}
            value={cardMonth.replace(/[^0-9]/g, "")}
            onChange={(e) => setCardMonth(e.target.value)}
          />
          <input
            type="text"
            placeholder="YY"
            maxLength={2}
            value={cardYear.replace(/[^0-9]/g, "")}
            onChange={(e) => setCardYear(e.target.value)}
          />
          {!cardMonth && !cardYear && error && (
            <p className="error">cant't be blank</p>
          )}
        </div>

        <div className="cvc">
          <label>cvc</label>
          <input
            type="text"
            placeholder="e.g. 123"
            maxLength={3}
            value={cardCvc.replace(/[^0-9]/g, "")}
            onChange={(e) => setCardCvc(e.target.value)}
          />
          {!cardCvc && error && <p className="error">cant't be blank</p>}
        </div>
      </div>

      <button onClick={onSubmit}>Confirm</button>
    </div>
  );
}
