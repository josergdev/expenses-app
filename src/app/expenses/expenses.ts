interface Expense {
    name: string
    amount: string
    payDate: Date
    description: string
}

interface Expenses {
    expenses: Expense[]
}

export { Expenses, Expense }