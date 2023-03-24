import { render, screen, shallow, waitFor } from '@testing-library/react';
import BaseContainer from '../containers/BaseContainer';


//   render(<BaseContainer />);
describe('Base Component', () => {
    it('Renders base component', async () => {
        const { container } = render(<BaseContainer />);
        await waitFor(() => {
            expect(container.firstChild).toHaveClass('main-container')
        });
    });
});
