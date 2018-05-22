export default (expenses) => {
  return expenses
    .map(expense => expense.amount)
    .reduce((acc, num) => acc + num, 0)
}
