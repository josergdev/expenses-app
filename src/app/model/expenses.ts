interface NewExpense {
    name: string
    amount: string
    description: string
}

interface Expense {
    name: string
    amount: string
    payDate: Date
    description: string
}

interface Expenses {
    expenses: Expense[]
}

export { NewExpense, Expenses, Expense }