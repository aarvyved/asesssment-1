/*
    Description: This component shows each customers reward data. 
    Note: Initially i wanted this to be just a presentational/dumb component but I wanted to demonstrate the useEffect hook usage and API call simulation
    Another way to approach the problem would be to have the data calculation happen at base component but that would mean we will have to loop 
    or make parallel API calls for each customer ID using something like axios.all() etc.
*/

import { useEffect, useState } from "react";
import { api } from "../mockApi";

const CustomerCard = ({ customer }) => {
    const [rewardsData, setRewardsData] = useState({});

    const getCustomerRewards = async (id) => {
        id = Number(id)
        const rewards = await api.getRewardsById(id);
        setRewardsData({ ...rewards })
    }

    useEffect(() => {
        getCustomerRewards(customer.customerId);
    }, []);

    return (
        <div data-testid="customer-card-test" className="card" >
            <div className="container row">
                <div className="column">
                    <h3>
                        Customer Name: {customer.customerName}
                    </h3>
                </div>
                <div className="column">
                    <table>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Rewards</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rewardsData.monthlyRewards?.map((reward, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>
                                                {reward.transactionMonth}
                                                &nbsp;
                                            </td>
                                            <td>{reward.monthlyRewards} pts</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>
                    <p>
                        <b>Total Reward points</b>: {rewardsData.totalRewards} pts
                    </p>
                </div>
            </div>
            {/* <hr /> */}
        </div>
    )


}

export default CustomerCard;