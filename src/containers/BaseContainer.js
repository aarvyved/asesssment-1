/*
    Description: this is container component where most of the data calls usually happen.
    It is also an ideal place to integrate with the store when using Redux and flux patterns
*/

import CustomerCard from '../components/CustomerCard';
import { customers } from '../mocks/mockData';

const BaseContainer = () => {

    return (
        <div className='main-container'>
            {
                customers.map((customer, i) => {
                    return (
                        <CustomerCard key={i} customer={customer} />
                    )
                })
            }
        </div>
    );
}

export default BaseContainer;