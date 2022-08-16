interface NewExpense {
    payerId: string
    amount: string
    description: string
}

interface Expense {
    payerId: string
    amount: string
    dateTime: string
    description: string
}

interface Expenses {
    expenses: Expense[]
}

export { NewExpense, Expenses, Expense }