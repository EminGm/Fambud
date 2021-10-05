import "./ExpenceItem.css";

function ExpenceItem() {
  const expenceItemDate = new Date(2001, 1, 23);
  const expenceItemDescription = "Car Insurance";
  const expenceItemPrice = "435";
  return (
    <div className="expense-item">
      <div>{expenceItemDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenceItemDescription}</h2>
        <div className="expense-item__price">${expenceItemPrice}</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
