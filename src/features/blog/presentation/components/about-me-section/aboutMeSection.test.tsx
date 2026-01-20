import { render, screen } from '@testing-library/react';
import AboutMeSection from './aboutMeSection';
import { Copies } from '../../constants/copies/copies';

// Mock Next.js Image component
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <img {...props} />;
    },
}));

// Mock Next.js Link component
jest.mock('next/link', () => ({
    __esModule: true,
    default: ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => <a href={href} className={className}>{children}</a>,
}));

describe('AboutMeSection', () => {
    describe('Rendering', () => {
        it('renders the component without crashing', () => {
            render(<AboutMeSection />);
            expect(screen.getByText(Copies.aboutMeSection.title)).toBeInTheDocument();
        });

        it('renders the title with correct text', () => {
            render(<AboutMeSection />);
            const title = screen.getByText(Copies.aboutMeSection.title);
            expect(title).toBeInTheDocument();
            expect(title.tagName).toBe('H3');
        });

        it('renders the title with correct styling classes', () => {
            render(<AboutMeSection />);
            const title = screen.getByText(Copies.aboutMeSection.title);
            expect(title).toHaveClass('text-4xl', 'text-transparent', 'bg-clip-text', 'bg-gradient-to-r', 'from-primary', 'to-yellow-300', 'font-display', 'text-center', 'mt-10');
        });
    });

    describe('Image Section', () => {
        it('renders the image with correct src', () => {
            render(<AboutMeSection />);
            const image = screen.getByAltText(Copies.aboutMeSection.imageAlt);
            expect(image).toBeInTheDocument();
            expect(image).toHaveAttribute('src', Copies.aboutMeSection.imageUrl);
        });

        it('renders the image with correct alt text', () => {
            render(<AboutMeSection />);
            const image = screen.getByAltText(Copies.aboutMeSection.imageAlt);
            expect(image).toBeInTheDocument();
        });

        it('renders the image with correct dimensions', () => {
            render(<AboutMeSection />);
            const image = screen.getByAltText(Copies.aboutMeSection.imageAlt);
            expect(image).toHaveAttribute('width', '300');
            expect(image).toHaveAttribute('height', '300');
        });

        it('renders the image with correct styling classes', () => {
            render(<AboutMeSection />);
            const image = screen.getByAltText(Copies.aboutMeSection.imageAlt);
            expect(image).toHaveClass('object-cover', 'rounded-lg');
        });

        it('renders the image container with correct styling', () => {
            render(<AboutMeSection />);
            const image = screen.getByAltText(Copies.aboutMeSection.imageAlt);
            const imageContainer = image.parentElement;
            expect(imageContainer).toHaveClass('w-[300px]', 'h-[300px]');
        });
    });

    describe('Description Section', () => {
        it('renders the description text', () => {
            render(<AboutMeSection />);
            const description = screen.getByText(Copies.aboutMeSection.description);
            expect(description).toBeInTheDocument();
            expect(description.tagName).toBe('P');
        });

        it('renders the description with correct styling classes', () => {
            render(<AboutMeSection />);
            const description = screen.getByText(Copies.aboutMeSection.description);
            expect(description).toHaveClass('font-sans', 'font-normal', 'max-w-md', 'text-start', 'px-2');
        });
    });

    describe('Call to Action Link', () => {
        it('renders the CTA link with correct text', () => {
            render(<AboutMeSection />);
            const ctaLink = screen.getByRole('link', { name: 'Conoce más sobre mí' });
            expect(ctaLink).toBeInTheDocument();
        });

        it('renders the CTA link with correct href', () => {
            render(<AboutMeSection />);
            const ctaLink = screen.getByRole('link', { name: 'Conoce más sobre mí' });
            expect(ctaLink).toHaveAttribute('href', Copies.aboutMeSection.moreInfoUrl);
        });

        it('renders the CTA link with correct styling classes', () => {
            render(<AboutMeSection />);
            const ctaLink = screen.getByRole('link', { name: 'Conoce más sobre mí' });
            expect(ctaLink).toHaveClass('btn-primary', 'btn', 'mt-8', 'max-w-96', 'self-center', 'font-display');
        });
    });

    describe('Layout and Structure', () => {
        it('renders the main container with correct layout classes', () => {
            const { container } = render(<AboutMeSection />);
            const mainDiv = container.firstChild as HTMLElement;
            expect(mainDiv).toHaveClass('flex', 'flex-col', 'justify-center', 'items-center', 'self-center', 'min-h-96', 'pt-8', 'px-4');
        });

        it('renders content in correct responsive layout', () => {
            render(<AboutMeSection />);
            const image = screen.getByAltText(Copies.aboutMeSection.imageAlt);
            const contentContainer = image.closest('.flex');
            expect(contentContainer).toHaveClass('flex-col', 'md:flex-row');
        });

        it('renders all main elements in correct order', () => {
            render(<AboutMeSection />);
            
            // Verify all elements are present
            expect(screen.getByText(Copies.aboutMeSection.title)).toBeInTheDocument();
            expect(screen.getByAltText(Copies.aboutMeSection.imageAlt)).toBeInTheDocument();
            expect(screen.getByText(Copies.aboutMeSection.description)).toBeInTheDocument();
            expect(screen.getByRole('link', { name: 'Conoce más sobre mí' })).toBeInTheDocument();
        });
    });

    describe('Accessibility', () => {
        it('has semantic HTML structure', () => {
            render(<AboutMeSection />);
            
            expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
            expect(screen.getByRole('img')).toBeInTheDocument();
            expect(screen.getByRole('link')).toBeInTheDocument();
        });

        it('renders article and section tags correctly', () => {
            const { container } = render(<AboutMeSection />);
            
            const article = container.querySelector('article');
            const section = container.querySelector('section');
            
            expect(article).toBeInTheDocument();
            expect(section).toBeInTheDocument();
        });

        it('image has proper alt text for screen readers', () => {
            render(<AboutMeSection />);
            const image = screen.getByAltText(Copies.aboutMeSection.imageAlt);
            expect(image).toHaveAttribute('alt', Copies.aboutMeSection.imageAlt);
        });
    });
});
