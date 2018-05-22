import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
  const totals = selectExpensesTotal([])
  expect(totals).toBe(0)
})

test('should correctly add up a single expense', () => {
  const totals = selectExpensesTotal([expenses[0]])
  expect(totals).toBe(195)
})

test('should correctly add up multiple expenses', () => {
  const totals = selectExpensesTotal(expenses)
  expect(totals).toBe(114195)
})
