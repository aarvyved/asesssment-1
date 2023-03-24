/*
    Description: This is a mock API file which has methods that return promises which contain the mock data. 
    In an ideal environment these methods will be calling some back end api and return promises with real data
*/

import { transactions } from "../mocks/mockData";
import { getTotalRewards, getMonthlyRewards } from "../utils/index"

export const api = {

    // Simulation for GET/transactions endpoint results
    getTransactions: () => {
        return new Promise((resolve, reject) => {
            resolve(transactions);
        })
    },

    // Simulation for GET/rewards/endpoint results
    getRewards: (transactions) => {
        return new Promise((resolve, reject) => {
            const totalRewards = getTotalRewards(transactions)
            resolve(totalRewards);
        })
    },

    // Simulation for GET/rewards/:id endpoint results
    getRewardsById: (id) => {
        return new Promise((resolve, reject) => {

            const customerTransactions = transactions.filter((transaction) => {
                return transaction.customerId === id;
            });

            // get customer total rewards
            const totalRewards = getTotalRewards(customerTransactions);
            const monthlyRewards = getMonthlyRewards(customerTransactions);

            const responseData = {
                customerId: id,
                totalRewards: totalRewards || 0,
                monthlyRewards: monthlyRewards || []
            }
            resolve(responseData);
        })
    }
}