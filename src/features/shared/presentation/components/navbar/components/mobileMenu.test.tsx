import { render, screen } from "@testing-library/react";
import MobileMenu from "./mobileMenu";
import { NavbarLink } from "../../../entities/navbar-link/navbar-link";

const mockLinks: NavbarLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Shop', href: '/shop' }
];

describe('Mobile Menu Component', () => {

    it('should render with correct styling classes', () => {
        const { container } = render(<MobileMenu links={mockLinks} />);
        
        const menuContainer = container.querySelector('.menu');
        expect(menuContainer).toBeInTheDocument();
        expect(menuContainer).toHaveClass('menu-compact', 'bg-base-100/80', 'backdrop-blur-md', 'shadow-lg');
    });

    it('should render all navigation links', () => {
        render(<MobileMenu links={mockLinks} />);

        mockLinks.forEach(link => {
            const linkElement = screen.getByRole('link', { name: link.label });
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', link.href);
        });
    });

    it('should render with empty links array', () => {
        const { container } = render(<MobileMenu links={[]} />);
        
        const menuContainer = container.querySelector('.menu');
        expect(menuContainer).toBeInTheDocument();
        
        const links = screen.queryAllByRole('link');
        expect(links).toHaveLength(0);
    });

    it('should apply correct layout and positioning classes', () => {
        const { container } = render(<MobileMenu links={mockLinks} />);
        
        const menuContainer = container.querySelector('span.menu');
        expect(menuContainer).toHaveClass('absolute', 'items-center', 'gap-2', 'rounded-lg');
    });

    it('should render links with correct styling', () => {
        render(<MobileMenu links={mockLinks} />);

        mockLinks.forEach(link => {
            const linkElement = screen.getByRole('link', { name: link.label });
            expect(linkElement).toHaveClass('text-white', 'hover:text-primary', 'transition-colors');
        });
    });
});