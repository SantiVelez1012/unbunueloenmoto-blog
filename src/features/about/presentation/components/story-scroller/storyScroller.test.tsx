import { render, screen } from '@testing-library/react';
import StoryScroller from './storyScroller';

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className, style, ...props }: any) => (
            <div className={className} style={style} {...props}>
                {children}
            </div>
        ),
    },
    useScroll: jest.fn(() => ({
        scrollYProgress: { get: () => 0, set: jest.fn() },
    })),
    useTransform: jest.fn((value, input, output) => ({
        get: () => output[0],
        set: jest.fn(),
    })),
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
    __esModule: true,
    default: ({ src, alt, className, priority }: any) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className={className} data-priority={priority} />
    ),
}));

describe('StoryScroller', () => {
    describe('Rendering', () => {
        it('renders the main container with correct height', () => {
            const { container } = render(<StoryScroller />);
            
            const mainContainer = container.querySelector(String.raw`.h-\[300vh\]`);
            expect(mainContainer).toBeInTheDocument();
            expect(mainContainer).toHaveClass('bg-black');
        });

        it('renders sticky container with correct positioning', () => {
            const { container } = render(<StoryScroller />);
            
            const stickyContainer = container.querySelector('.sticky');
            expect(stickyContainer).toBeInTheDocument();
            expect(stickyContainer).toHaveClass('top-0', 'h-screen');
        });

        it('renders scroll progress indicator', () => {
            const { container } = render(<StoryScroller />);
            
            const progressIndicator = container.querySelector(String.raw`.right-4.top-1\/2`);
            expect(progressIndicator).toBeInTheDocument();
            expect(progressIndicator).toHaveClass('bg-white/10', 'rounded-full');
        });
    });

    describe('Story Sections', () => {
        it('renders all three story sections', () => {
            render(<StoryScroller />);
            
            expect(screen.getByText('La Identidad')).toBeInTheDocument();
            expect(screen.getByText('El Origen')).toBeInTheDocument();
            expect(screen.getByText('La Misión')).toBeInTheDocument();
        });

        it('renders section titles with correct styling', () => {
            render(<StoryScroller />);
            
            const titleIdentidad = screen.getByText('La Identidad');
            expect(titleIdentidad).toHaveClass('text-4xl', 'md:text-6xl', 'font-display', 'font-bold', 'text-white');
        });

        it('renders section descriptions', () => {
            render(<StoryScroller />);
            
            expect(screen.getByText(/Me llamo Santiago Velez/i)).toBeInTheDocument();
            expect(screen.getByText(/En Colombia, 'buñuelo' es el novato/i)).toBeInTheDocument();
            expect(screen.getByText(/100 videos. 2 años/i)).toBeInTheDocument();
        });

        it('renders section descriptions with correct styling', () => {
            render(<StoryScroller />);
            
            const description = screen.getByText(/Me llamo Santiago Velez/i);
            expect(description).toHaveClass('text-lg', 'md:text-xl', 'text-gray-200');
        });
    });

    describe('Images', () => {
        it('renders images for all sections', () => {
            render(<StoryScroller />);
            
            const images = screen.getAllByRole('img');
            expect(images).toHaveLength(3);
        });

        it('renders first image with priority', () => {
            render(<StoryScroller />);
            
            const identidadImage = screen.getByAltText('La Identidad');
            expect(identidadImage).toHaveAttribute('data-priority', 'true');
        });

        it('renders correct image sources', () => {
            render(<StoryScroller />);
            
            const identidadImage = screen.getByAltText('La Identidad');
            const origenImage = screen.getByAltText('El Origen');
            const misionImage = screen.getByAltText('La Misión');
            
            expect(identidadImage).toHaveAttribute('src', '/imgs/about/1.jpeg');
            expect(origenImage).toHaveAttribute('src', '/imgs/about/2.jpeg');
            expect(misionImage).toHaveAttribute('src', '/imgs/about/3.jpg');
        });

        it('renders images with opacity and object-cover classes', () => {
            render(<StoryScroller />);
            
            const images = screen.getAllByRole('img');
            images.forEach(image => {
                expect(image).toHaveClass('object-cover', 'opacity-60');
            });
        });
    });

    describe('Layout Alignment', () => {
        it('applies correct alignment classes to sections', () => {
            const { container } = render(<StoryScroller />);
            
            // All sections should have flex flex-col and justify-center
            const sectionContainers = container.querySelectorAll('.flex.flex-col');
            expect(sectionContainers.length).toBeGreaterThanOrEqual(3);
        });

        it('renders gradient overlays on all sections', () => {
            const { container } = render(<StoryScroller />);
            
            const gradients = container.querySelectorAll('.bg-gradient-to-t');
            expect(gradients.length).toBeGreaterThanOrEqual(3);
        });
    });

    describe('Responsive Design', () => {
        it('applies responsive text sizes to titles', () => {
            render(<StoryScroller />);
            
            const title = screen.getByText('La Identidad');
            expect(title).toHaveClass('text-4xl', 'md:text-6xl');
        });

        it('applies responsive text sizes to descriptions', () => {
            render(<StoryScroller />);
            
            const description = screen.getByText(/Me llamo Santiago Velez/i);
            expect(description).toHaveClass('text-lg', 'md:text-xl');
        });

        it('hides progress indicator on mobile', () => {
            const { container } = render(<StoryScroller />);
            
            const progressIndicator = container.querySelector(String.raw`.right-4.top-1\/2`);
            expect(progressIndicator).toHaveClass('hidden', 'md:block');
        });

        it('applies responsive padding to section containers', () => {
            const { container } = render(<StoryScroller />);
            
            const contentContainers = container.querySelectorAll('.px-6');
            expect(contentContainers.length).toBeGreaterThanOrEqual(3);
        });
    });

    describe('Accessibility', () => {
        it('provides alt text for all images', () => {
            render(<StoryScroller />);
            
            const identidadImage = screen.getByAltText('La Identidad');
            const origenImage = screen.getByAltText('El Origen');
            const misionImage = screen.getByAltText('La Misión');
            
            expect(identidadImage).toBeInTheDocument();
            expect(origenImage).toBeInTheDocument();
            expect(misionImage).toBeInTheDocument();
        });

        it('renders semantic HTML structure', () => {
            render(<StoryScroller />);
            
            const headings = screen.getAllByRole('heading', { level: 3 });
            expect(headings).toHaveLength(3);
        });
    });

    describe('Content Structure', () => {
        it('renders content in max-width containers', () => {
            const { container } = render(<StoryScroller />);
            
            const maxWidthContainers = container.querySelectorAll('.max-w-xl');
            expect(maxWidthContainers).toHaveLength(3);
        });

        it('renders container with mx-auto class for centering', () => {
            const { container } = render(<StoryScroller />);
            
            const containerElements = container.querySelectorAll('.container.mx-auto');
            expect(containerElements.length).toBeGreaterThanOrEqual(3);
        });
    });

    describe('Framer Motion Integration', () => {
        it('uses useScroll hook with correct target', () => {
            const { useScroll } = require('framer-motion');
            
            render(<StoryScroller />);
            
            expect(useScroll).toHaveBeenCalled();
        });

        it('uses useTransform for animations', () => {
            const { useTransform } = require('framer-motion');
            
            render(<StoryScroller />);
            
            expect(useTransform).toHaveBeenCalled();
        });
    });

    describe('Visual Styling', () => {
        it('applies drop shadow to titles', () => {
            render(<StoryScroller />);
            
            const titles = screen.getAllByRole('heading', { level: 3 });
            titles.forEach(title => {
                expect(title).toHaveClass('drop-shadow-lg');
            });
        });

        it('applies drop shadow to descriptions', () => {
            render(<StoryScroller />);
            
            const description = screen.getByText(/Me llamo Santiago Velez/i);
            expect(description).toHaveClass('drop-shadow-md');
        });

        it('applies leading styles for text readability', () => {
            render(<StoryScroller />);
            
            const title = screen.getByText('La Identidad');
            expect(title).toHaveClass('leading-tight');
            
            const description = screen.getByText(/Me llamo Santiago Velez/i);
            expect(description).toHaveClass('leading-relaxed');
        });
    });
});
