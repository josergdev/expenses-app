interface BalanceItem {
    name: string,
    amount: string
}

interface Balance {
    balanceItems: BalanceItem[]
}

export { BalanceItem, Balance }