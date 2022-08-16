interface BalanceItem {
    friendId: string,
    amount: string
}

interface Balance {
    balanceItems: BalanceItem[]
}

export { BalanceItem, Balance }