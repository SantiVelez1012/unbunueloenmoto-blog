import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroBanner from './heroBanner';
import { HeroBannerInfo } from '@/features/shared/presentation/entities/hero-banner-info/heroBannerInfo';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, fill, priority, className, ...rest } = props;
    return <img src={src} alt={alt} className={className} {...rest} />;
  },
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, target, className }: any) => (
    <a href={href} target={target} className={className}>
      {children}
    </a>
  ),
}));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => <div className={className} {...props}>{children}</div>,
    h1: ({ children, className, ...props }: any) => <h1 className={className} {...props}>{children}</h1>,
    p: ({ children, className, ...props }: any) => <p className={className} {...props}>{children}</p>,
  },
}));

jest.mock('lucide-react', () => ({
  ChevronRight: () => <svg data-testid="chevron-right-icon" />,
}));

const mockHeroBannerInfo: HeroBannerInfo = {
  topInfo: 'Latest Updates',
  footerInfo: 'Scroll Down',
  title: 'Welcome to Our Blog',
  description: 'Discover amazing stories and insights',
  imageUrl: '/test-image.jpg',
  imageAlt: 'Hero Banner Image',
  actions: {
    primary: {
      label: 'Get Started',
      url: '/get-started',
    },
    secondary: {
      label: 'Learn More',
      url: '/learn-more',
      blank: true,
    },
  },
};

describe('HeroBanner', () => {
  it('renders the hero banner section', () => {
    const { container } = render(<HeroBanner info={mockHeroBannerInfo} />);
    const section = container.querySelector('section');
    
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('relative', 'w-full', 'h-screen', 'overflow-hidden');
  });

  it('renders the background image with correct attributes', () => {
    render(<HeroBanner info={mockHeroBannerInfo} />);
    const image = screen.getByAltText('Hero Banner Image');
    
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  it('renders the top info text', () => {
    render(<HeroBanner info={mockHeroBannerInfo} />);
    const topInfo = screen.getByText('Latest Updates');
    
    expect(topInfo).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<HeroBanner info={mockHeroBannerInfo} />);
    const title = screen.getByRole('heading', { name: 'Welcome to Our Blog' });
    
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('font-display', 'font-extrabold', 'text-white');
  });

  it('renders the description', () => {
    render(<HeroBanner info={mockHeroBannerInfo} />);
    const description = screen.getByText('Discover amazing stories and insights');
    
    expect(description).toBeInTheDocument();
  });

  it('renders the footer info text', () => {
    render(<HeroBanner info={mockHeroBannerInfo} />);
    const footerInfo = screen.getByText('Scroll Down');
    
    expect(footerInfo).toBeInTheDocument();
  });

  it('renders primary action button when actions are provided', () => {
    render(<HeroBanner info={mockHeroBannerInfo} />);
    const primaryButton = screen.getByRole('link', { name: 'Get Started' });
    
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton).toHaveAttribute('href', '/get-started');
    expect(primaryButton).toHaveClass('btn-primary');
  });

  it('renders secondary action button when provided', () => {
    render(<HeroBanner info={mockHeroBannerInfo} />);
    const secondaryButton = screen.getByRole('link', { name: /Learn More/i });
    
    expect(secondaryButton).toBeInTheDocument();
    expect(secondaryButton).toHaveAttribute('href', '/learn-more');
    expect(secondaryButton).toHaveAttribute('target', '_blank');
  });

  it('renders chevron icon in secondary button', () => {
    render(<HeroBanner info={mockHeroBannerInfo} />);
    const chevronIcon = screen.getByTestId('chevron-right-icon');
    
    expect(chevronIcon).toBeInTheDocument();
  });

  it('does not render actions when not provided', () => {
    const infoWithoutActions = { ...mockHeroBannerInfo, actions: undefined };
    render(<HeroBanner info={infoWithoutActions} />);
    
    const primaryButton = screen.queryByRole('link', { name: 'Get Started' });
    expect(primaryButton).not.toBeInTheDocument();
  });

  it('renders only primary button when secondary is not provided', () => {
    const infoWithOnlyPrimary: HeroBannerInfo = {
      ...mockHeroBannerInfo,
      actions: {
        primary: mockHeroBannerInfo.actions!.primary,
        secondary: undefined as any,
      },
    };
    
    render(<HeroBanner info={infoWithOnlyPrimary} />);
    
    const primaryButton = screen.getByRole('link', { name: 'Get Started' });
    const secondaryButton = screen.queryByRole('link', { name: /Learn More/i });
    
    expect(primaryButton).toBeInTheDocument();
    expect(secondaryButton).not.toBeInTheDocument();
  });

  it('does not set target blank when secondary action blank is false', () => {
    const infoWithNoBlank: HeroBannerInfo = {
      ...mockHeroBannerInfo,
      actions: {
        primary: mockHeroBannerInfo.actions!.primary,
        secondary: {
          ...mockHeroBannerInfo.actions!.secondary,
          blank: false,
        },
      },
    };
    
    render(<HeroBanner info={infoWithNoBlank} />);
    const secondaryButton = screen.getByRole('link', { name: /Learn More/i });
    
    expect(secondaryButton).not.toHaveAttribute('target');
  });

  it('renders the live indicator dot', () => {
    const { container } = render(<HeroBanner info={mockHeroBannerInfo} />);
    const pingElement = container.querySelector('.animate-ping');
    
    expect(pingElement).toBeInTheDocument();
    expect(pingElement).toHaveClass('bg-green-400');
  });
});
