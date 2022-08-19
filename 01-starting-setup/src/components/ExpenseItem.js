import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
      <div className="expense-item">
        <div>{props[0].date.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{props[0].title}</h2>
          <div className="expense-item__price">{props[0].amount}</div>
        </div>
      </div>
  );
}

export default ExpenseItem;
