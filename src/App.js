import { useState } from "react";
import DisplayCard from "./DisplayCard";
import Form from "./Form";
import Completed from "./Completed";

export default function App() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit() {
    if (!cardCvc || !cardMonth || !cardName || !cardNumber || !cardYear) {
      setError(true);
    } else {
      setSubmitted(true);
    }
  }

  return (
    <div className="app">
      <div className="app-display">
        <DisplayCard
          cardName={cardName}
          cardNumber={cardNumber}
          cardMonth={cardMonth}
          cardYear={cardYear}
          cardCvc={cardCvc}
        />
      </div>

      <div className="app-form">
        {submitted ? (
          <Completed />
        ) : (
          <Form
            cardName={cardName}
            cardNumber={cardNumber}
            cardMonth={cardMonth}
            cardYear={cardYear}
            cardCvc={cardCvc}
            setCardCvc={setCardCvc}
            setCardMonth={setCardMonth}
            setCardYear={setCardYear}
            setCardName={setCardName}
            setCardNumber={setCardNumber}
            error={error}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
