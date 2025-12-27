import { render, screen } from '@testing-library/react';
import { SocialButton } from './socialButton';

describe('SocialButton', () => {
    const mockIcon = <svg data-testid="mock-icon">Icon</svg>;
    const defaultProps = {
        href: 'https://twitter.com/example',
        icon: mockIcon,
        label: 'Follow us on Twitter',
        color: 'hover:bg-blue-500 hover:text-white',
    };

    it('renders the link with correct href', () => {
        render(<SocialButton {...defaultProps} />);
        const link = screen.getByRole('link', { name: /follow us on twitter/i });
        expect(link).toHaveAttribute('href', 'https://twitter.com/example');
    });

    it('renders the icon correctly', () => {
        render(<SocialButton {...defaultProps} />);
        expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    });

    it('has correct aria-label for accessibility', () => {
        render(<SocialButton {...defaultProps} />);
        const link = screen.getByLabelText('Follow us on Twitter');
        expect(link).toBeInTheDocument();
    });

    it('opens link in new tab with security attributes', () => {
        render(<SocialButton {...defaultProps} />);
        const link = screen.getByRole('link', { name: /follow us on twitter/i });
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('applies base styling classes', () => {
        render(<SocialButton {...defaultProps} />);
        const link = screen.getByRole('link', { name: /follow us on twitter/i });
        expect(link).toHaveClass('w-10', 'h-10', 'flex', 'items-center', 'justify-center');
        expect(link).toHaveClass('rounded-full', 'bg-white/5', 'border', 'border-white/10');
        expect(link).toHaveClass('text-gray-300', 'transition-all', 'duration-300');
    });

    it('applies custom color class', () => {
        render(<SocialButton {...defaultProps} />);
        const link = screen.getByRole('link', { name: /follow us on twitter/i });
        expect(link).toHaveClass('hover:bg-blue-500', 'hover:text-white');
    });

    it('works with different color values', () => {
        render(
            <SocialButton
                {...defaultProps}
                color="hover:bg-red-500 hover:border-red-400"
            />
        );
        const link = screen.getByRole('link', { name: /follow us on twitter/i });
        expect(link).toHaveClass('hover:bg-red-500', 'hover:border-red-400');
    });

    it('works with different icons', () => {
        const differentIcon = <span data-testid="different-icon">Different</span>;
        render(<SocialButton {...defaultProps} icon={differentIcon} />);
        expect(screen.getByTestId('different-icon')).toBeInTheDocument();
        expect(screen.queryByTestId('mock-icon')).not.toBeInTheDocument();
    });

    it('is keyboard accessible', () => {
        render(<SocialButton {...defaultProps} />);
        const link = screen.getByRole('link', { name: /follow us on twitter/i });
        expect(link).toHaveAttribute('href'); // Links are naturally keyboard accessible
    });
});