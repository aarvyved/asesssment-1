
export const getTotalRewards = (transactions) => {
    const totalTransactionAmount = transactions.reduce((sum, val) => sum + val.charge, 0);
    const rewards = calculateRewards(totalTransactionAmount);
    return rewards;
}

/*
For this use case i am using the month literal from the date key in the transaction object to compare and filter out monthly rewards
In a real world scenario this can be taken can be handled at the db query level or back end level
*/

export const getMonthlyRewards = (transactions) => {
    const monthlyRewards = [];
    const monthMap = {};
    transactions.forEach((transaction, i) => {
        const checkMonth = transaction.date.slice(0, 2);

        const filteredTransactions = transactions.filter((transaction) => {
            const transactionMonth = transaction.date.slice(0, 2);
            return transactionMonth === checkMonth
        });

        if (!(checkMonth in monthMap)) {
            monthlyRewards.push({
                transactionMonth: checkMonth,
                monthlyRewards: getTotalRewards(filteredTransactions)
            })
            monthMap[checkMonth] = true;
        }
    });
    return monthlyRewards;
}


export const calculateRewards = (amountSpent) => {
    let totalPoints = 0;

    // Calculate points for spending over $100
    if (amountSpent > 100) {
        const over100Points = Math.floor(amountSpent - 100) * 2;
        totalPoints += over100Points;
    }

    // Calculate points for spending between $50 and $100
    if (amountSpent >= 50 && amountSpent <= 100) {
        const between50and100Points = Math.floor(amountSpent - 50);
        totalPoints += between50and100Points;
    } else if (amountSpent > 100) {
        const between50and100Points = 50;
        totalPoints += between50and100Points;
    }

    return totalPoints;
}

