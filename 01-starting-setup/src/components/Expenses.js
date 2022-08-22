import ExpenseItem from "./ExpenseItem"

function Expenses (props) {
    const expensesList = [
        {
          id: "e1",
          title: "Toilet Paper",
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        {
          id: "e2",
          title: "New TV",
          amount: 799.49,
          date: new Date(2021, 2, 12),
        },
        {
          id: "e3",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: "e4",
          title: "New Desk (Wooden)",
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];

    return (
        <div>
        <ExpenseItem
        title={expensesList[0].title}
        date={expensesList[0].date}
        amount={expensesList[0].amount}
      />
      <ExpenseItem
        title={expensesList[1].title}
        date={expensesList[1].date}
        amount={expensesList[1].amount}
      />
      <ExpenseItem
        title={expensesList[2].title}
        date={expensesList[2].date}
        amount={expensesList[2].amount}
      />
      <ExpenseItem
        title={expensesList[3].title}
        date={expensesList[3].date}
        amount={expensesList[3].amount}
      />
      </div>
    )
}

export default Expenses;