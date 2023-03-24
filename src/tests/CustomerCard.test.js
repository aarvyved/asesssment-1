import { render, screen, waitFor, waitForElement, act } from '@testing-library/react';
import CustomerCard from '../components/CustomerCard';
import { api } from "../mockApi";

describe('Customer Card Component', () => {
    it('Renders customer data when simulated API call succeeds', async () => {
        const customer = {
            customerId: 3,
            customerName: 'Bruce'
        }
        const fakeResponse = {
            "customerId": 3,
            "totalRewards": 766,
            "monthlyRewards": [
                {
                    "transactionMonth": "03",
                    "monthlyRewards": 378
                },
                {
                    "transactionMonth": "01",
                    "monthlyRewards": 236
                }
            ]
        }
        api.getRewardsById = jest.fn().mockResolvedValue(fakeResponse);


        render(<CustomerCard customer={customer} />)
        expect(await screen.findByText(/Customer Name/i)).toBeInTheDocument();
        expect(await screen.findByText(/Bruce/i)).toBeInTheDocument();

        await waitFor(() => {
            expect(api.getRewardsById).toBeCalledTimes(1);
        });
    });
});
