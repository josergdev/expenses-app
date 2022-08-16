interface Compensation {
    compensationItems: CompensationItem[]
}

interface CompensationItem {
    debtorId: string
    creditorId: string
    amount: string
}

export { Compensation, CompensationItem }