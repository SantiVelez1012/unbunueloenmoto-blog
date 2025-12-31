import { NavbarLink } from "../../entities/navbar-link/navbar-link";
import Navbar from "./navbar";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";

// Mock motion/react
let scrollYCallback: ((value: number) => void) | null = null;

jest.mock('framer-motion', () => {
    const actual = jest.requireActual('framer-motion');
    return {
        ...actual,
        useScroll: jest.fn(() => ({
            scrollY: {
                get: () => 0,
            }
        })),
        useMotionValueEvent: jest.fn((motionValue, event, callback) => {
            scrollYCallback = callback;
        }),
        motion: {
            ...actual.motion,
            button: actual.motion.button,
            div: actual.motion.div,
        },
    };
});

// Mock next/navigation
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(() => '/'),
}));

// Mock cart store
jest.mock('@/features/shop/infrastructure/state/cartStore', () => ({
    useCartStore: jest.fn((selector) => {
        const state = { items: [] };
        return selector ? selector(state) : state;
    }),
}));

const navbarLinks: NavbarLink[] = [
    { label: 'Inicio', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Tienda', href: '/shop' }
];

describe('Navbar Component', () => {

    beforeEach(() => {
        scrollYCallback = null;
        Object.defineProperty(globalThis, 'scrollY', {
            writable: true,
            configurable: true,
            value: 0
        });
    });

    it('should render correctly with default props', () => {
        render(<Navbar links={navbarLinks} />);

        const nav = screen.getByRole('navigation');

        expect(nav).toBeInTheDocument();
        expect(screen.getByText('unbunueloenmoto.com')).toBeInTheDocument();
        expect(screen.getByAltText('Buñuelo Logo')).toBeInTheDocument();
    });

    it('should render the logo with correct link to home', () => {
        render(<Navbar links={navbarLinks} />);

        const logoLinks = screen.getAllByRole('link', { name: /buñuelo logo/i });
        expect(logoLinks[0]).toHaveAttribute('href', '/');
    });

    it('should render site name with link to home', () => {
        render(<Navbar links={navbarLinks} />);

        const siteNameLink = screen.getByRole('link', { name: /unbunueloenmoto.com/i });
        expect(siteNameLink).toHaveAttribute('href', '/');
    });

    it('should render all navigation links', () => {
        render(<Navbar links={navbarLinks} />);

        navbarLinks.forEach(link => {
            const linkElements = screen.getAllByRole('link', { name: link.label });
            expect(linkElements.length).toBeGreaterThan(0);
            linkElements.forEach(element => {
                expect(element).toHaveAttribute('href', link.href);
            });
        });
    });

    it('should toggle mobile menu when hamburger button is clicked', () => {
        render(<Navbar links={navbarLinks} />);

        // Mobile menu should not be visible initially
        let mobileMenus = screen.queryAllByText('Tienda');
        const initialMobileMenuCount = mobileMenus.length;

        // Find and click the hamburger menu (it's a span with the Menu icon inside)
        const hamburgerButton = screen.getByRole('navigation').querySelector('.btn-ghost');
        expect(hamburgerButton).toBeInTheDocument();
        fireEvent.click(hamburgerButton!);

        // Mobile menu should now be visible (additional links appear)
        mobileMenus = screen.queryAllByText('Tienda');
        expect(mobileMenus.length).toBeGreaterThan(initialMobileMenuCount);

        // Click again to close
        fireEvent.click(hamburgerButton!);

        // Menu count should return to initial state
        mobileMenus = screen.queryAllByText('Tienda');
        expect(mobileMenus.length).toBe(initialMobileMenuCount);
    });

    it('should render with empty links array', () => {
        render(<Navbar links={[]} />);

        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
        expect(screen.getByText('unbunueloenmoto.com')).toBeInTheDocument();
    });

    it('should apply initial navbar styles when not scrolled', () => {
        render(<Navbar links={navbarLinks} />);

        const nav = screen.getByRole('navigation');
        expect(nav.className).toContain('bg-transparent');
        expect(nav.className).toContain('py-4');
    });

    it('should render hamburger menu icon', () => {
        render(<Navbar links={navbarLinks} />);

        // The hamburger is rendered as an SVG Menu icon from lucide-react
        const hamburger = screen.getByRole('navigation').querySelector('.lucide-menu');
        expect(hamburger).toBeInTheDocument();
    });

    it('should apply scrolled styles when scrollY is greater than 15', async () => {
        render(<Navbar links={navbarLinks} />);

        const nav = screen.getByRole('navigation');

        // Initially should have transparent background
        expect(nav.className).toContain('bg-transparent');
        expect(nav.className).toContain('py-4');

        // Simulate scroll event with value > 15
        await act(async () => {
            if (scrollYCallback) {
                scrollYCallback(20);
            }
        });

        // Wait for state update and re-render
        await waitFor(() => {
            expect(nav.className).toContain('bg-base-100/90');
            expect(nav.className).toContain('backdrop-blur-md');
            expect(nav.className).toContain('shadow-lg');
            expect(nav.className).toContain('border-b');
            expect(nav.className).toContain('border-white/5');
            expect(nav.className).toContain('py-2');
        });
    });

    it('should revert to transparent styles when scrollY is 15 or less', async () => {
        render(<Navbar links={navbarLinks} />);

        const nav = screen.getByRole('navigation');

        // Simulate scroll down (> 15)
        await act(async () => {
            if (scrollYCallback) {
                scrollYCallback(20);
            }
        });

        await waitFor(() => {
            expect(nav.className).toContain('bg-base-100/90');
        });

        // Simulate scroll back to top (<= 15)
        await act(async () => {
            if (scrollYCallback) {
                scrollYCallback(10);
            }
        });

        await waitFor(() => {
            expect(nav.className).toContain('bg-transparent');
            expect(nav.className).toContain('py-4');
            expect(nav.className).not.toContain('shadow-lg');
        });
    });

    it('should handle scroll event at exactly 15px threshold', async () => {
        render(<Navbar links={navbarLinks} />);

        const nav = screen.getByRole('navigation');

        // At exactly 15, should NOT be scrolled (condition is > 15)
        await act(async () => {
            if (scrollYCallback) {
                scrollYCallback(15);
            }
        });

        await waitFor(() => {
            expect(nav.className).toContain('bg-transparent');
        });

        // At 16, should be scrolled
        await act(async () => {
            if (scrollYCallback) {
                scrollYCallback(16);
            }
        });

        await waitFor(() => {
            expect(nav.className).toContain('bg-base-100/90');
        });
    });
});