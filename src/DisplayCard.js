export default function DisplayCard({
  cardMonth,
  cardYear,
  cardCvc,
  cardName,
  cardNumber,
}) {
  const errorStyle = {
    borderColor: "hsl(0, 100%, 66%)",
  };

  return (
    <div className="cards">
      <div className="display-card">
        <div className="front-card">
          <svg
            className="logo"
            width="84"
            height="47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
            <path
              d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
              stroke="#fff"
            />
          </svg>
          <h3 style={!cardNumber ? errorStyle : {}}>
            {cardNumber
              ? cardNumber
                  .replaceAll(" ", "")
                  .padEnd(16, "0")
                  .match(/.{1,4}/g)
                  .join(" ")
              : "0000 0000 0000 0000"}
          </h3>
          <p>{cardName ? cardName : "Jane Appleseed"}</p>
          <span>
            {cardMonth <= 9
              ? "0" + cardMonth
              : cardMonth || cardMonth
              ? cardMonth
              : "00"}
            /{cardYear ? cardYear : "00"}
          </span>
        </div>
        <div className="back-card">
          <p>{cardCvc ? cardCvc : "000"}</p>
        </div>
      </div>
    </div>
  );
}
