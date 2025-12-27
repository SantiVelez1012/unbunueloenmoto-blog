import { render, screen } from "@testing-library/react";
import NavbarLinks from "./navbarLinks";
import { NavbarLink } from "../../../entities/navbar-link/navbar-link";

const mockLinks: NavbarLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
];

describe('NavbarLinks Component', () => {

    it('should render all links correctly', () => {
        render(<NavbarLinks links={mockLinks} />);

        mockLinks.forEach(link => {
            const linkElement = screen.getByRole('link', { name: link.label });
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', link.href);
        });
    });

    it('should render links with correct styling classes', () => {
        render(<NavbarLinks links={mockLinks} />);

        mockLinks.forEach(link => {
            const linkElement = screen.getByRole('link', { name: link.label });
            expect(linkElement).toHaveClass('text-white', 'hover:text-primary', 'transition-colors');
        });
    });

    it('should render links within list items', () => {
        const { container } = render(<NavbarLinks links={mockLinks} />);

        const listItems = container.querySelectorAll('li');
        expect(listItems).toHaveLength(mockLinks.length);
        
        listItems.forEach(li => {
            expect(li).toHaveClass('mx-2', 'list-none');
        });
    });

    it('should render empty when links array is empty', () => {
        render(<NavbarLinks links={[]} />);

        const links = screen.queryAllByRole('link');
        expect(links).toHaveLength(0);
    });

    it('should use href as key for each link', () => {
        const { container } = render(<NavbarLinks links={mockLinks} />);
        
        const listItems = container.querySelectorAll('li');
        expect(listItems).toHaveLength(mockLinks.length);
    });

    it('should render link with empty target attribute', () => {
        render(<NavbarLinks links={mockLinks} />);

        mockLinks.forEach(link => {
            const linkElement = screen.getByRole('link', { name: link.label });
            expect(linkElement).toHaveAttribute('target', '');
        });
    });
});
