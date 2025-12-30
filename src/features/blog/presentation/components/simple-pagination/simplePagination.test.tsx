import { render, screen, fireEvent } from '@testing-library/react';
import SimplePagination from './simplePagination';

describe('SimplePagination', () => {
    const mockOnPageChange = jest.fn();

    beforeEach(() => {
        mockOnPageChange.mockClear();
    });

    describe('Rendering', () => {
        it('renders pagination with current page', () => {
            render(
                <SimplePagination
                    currentPage={2}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            expect(screen.getByText('2')).toBeInTheDocument();
            expect(screen.getByText('Página')).toBeInTheDocument();
        });

        it('renders previous and next buttons', () => {
            render(
                <SimplePagination
                    currentPage={2}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            expect(screen.getByLabelText('Página anterior')).toBeInTheDocument();
            expect(screen.getByLabelText('Página siguiente')).toBeInTheDocument();
        });
    });

    describe('Previous Button', () => {
        it('is disabled on first page', () => {
            render(
                <SimplePagination
                    currentPage={1}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            const prevButton = screen.getByLabelText('Página anterior');
            expect(prevButton).toBeDisabled();
        });

        it('is enabled when not on first page', () => {
            render(
                <SimplePagination
                    currentPage={2}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            const prevButton = screen.getByLabelText('Página anterior');
            expect(prevButton).not.toBeDisabled();
        });

        it('calls onPageChange with previous page number when clicked', () => {
            render(
                <SimplePagination
                    currentPage={3}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            const prevButton = screen.getByLabelText('Página anterior');
            fireEvent.click(prevButton);

            expect(mockOnPageChange).toHaveBeenCalledWith(2);
            expect(mockOnPageChange).toHaveBeenCalledTimes(1);
        });

        it('has correct styling when disabled', () => {
            render(
                <SimplePagination
                    currentPage={1}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            const prevButton = screen.getByLabelText('Página anterior');
            expect(prevButton).toHaveClass('cursor-not-allowed');
        });
    });

    describe('Next Button', () => {
        it('is disabled on last page', () => {
            render(
                <SimplePagination
                    currentPage={5}
                    isLastPage={true}
                    onPageChange={mockOnPageChange}
                />
            );

            const nextButton = screen.getByLabelText('Página siguiente');
            expect(nextButton).toBeDisabled();
        });

        it('is enabled when not on last page', () => {
            render(
                <SimplePagination
                    currentPage={2}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            const nextButton = screen.getByLabelText('Página siguiente');
            expect(nextButton).not.toBeDisabled();
        });

        it('calls onPageChange with next page number when clicked', () => {
            render(
                <SimplePagination
                    currentPage={2}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            const nextButton = screen.getByLabelText('Página siguiente');
            fireEvent.click(nextButton);

            expect(mockOnPageChange).toHaveBeenCalledWith(3);
            expect(mockOnPageChange).toHaveBeenCalledTimes(1);
        });

        it('has correct styling when disabled', () => {
            render(
                <SimplePagination
                    currentPage={5}
                    isLastPage={true}
                    onPageChange={mockOnPageChange}
                />
            );

            const nextButton = screen.getByLabelText('Página siguiente');
            expect(nextButton).toHaveClass('cursor-not-allowed');
        });
    });

    describe('Edge Cases', () => {
        it('handles first page correctly', () => {
            render(
                <SimplePagination
                    currentPage={1}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            expect(screen.getByText('1')).toBeInTheDocument();
            expect(screen.getByLabelText('Página anterior')).toBeDisabled();
            expect(screen.getByLabelText('Página siguiente')).not.toBeDisabled();
        });

        it('handles last page correctly', () => {
            render(
                <SimplePagination
                    currentPage={10}
                    isLastPage={true}
                    onPageChange={mockOnPageChange}
                />
            );

            expect(screen.getByText('10')).toBeInTheDocument();
            expect(screen.getByLabelText('Página anterior')).not.toBeDisabled();
            expect(screen.getByLabelText('Página siguiente')).toBeDisabled();
        });

        it('handles navigation from first to second page', () => {
            render(
                <SimplePagination
                    currentPage={1}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            const nextButton = screen.getByLabelText('Página siguiente');
            fireEvent.click(nextButton);

            expect(mockOnPageChange).toHaveBeenCalledWith(2);
        });

        it('handles navigation from last to second-to-last page', () => {
            render(
                <SimplePagination
                    currentPage={5}
                    isLastPage={true}
                    onPageChange={mockOnPageChange}
                />
            );

            const prevButton = screen.getByLabelText('Página anterior');
            fireEvent.click(prevButton);

            expect(mockOnPageChange).toHaveBeenCalledWith(4);
        });

        it('handles middle page with both buttons enabled', () => {
            render(
                <SimplePagination
                    currentPage={3}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            expect(screen.getByLabelText('Página anterior')).not.toBeDisabled();
            expect(screen.getByLabelText('Página siguiente')).not.toBeDisabled();
        });
    });

    describe('Accessibility', () => {
        it('has proper aria-labels on buttons', () => {
            render(
                <SimplePagination
                    currentPage={2}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            expect(screen.getByLabelText('Página anterior')).toBeInTheDocument();
            expect(screen.getByLabelText('Página siguiente')).toBeInTheDocument();
        });

        it('buttons are keyboard accessible', () => {
            render(
                <SimplePagination
                    currentPage={2}
                    isLastPage={false}
                    onPageChange={mockOnPageChange}
                />
            );

            const prevButton = screen.getByLabelText('Página anterior');
            const nextButton = screen.getByLabelText('Página siguiente');

            expect(prevButton.tagName).toBe('BUTTON');
            expect(nextButton.tagName).toBe('BUTTON');
        });
    });
});