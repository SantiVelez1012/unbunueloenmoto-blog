import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './loader';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, fill, priority, className, ...rest } = props;
    return <img src={src} alt={alt} className={className} {...rest} />;
  },
}));

describe('Loader', () => {
  it('renders loader with fullScreen by default', () => {
    const { container } = render(<Loader />);
    const loaderContainer = container.firstChild;
    
    expect(loaderContainer).toHaveClass('fixed', 'inset-0', 'min-h-[100dvh]');
  });

  it('renders loader without fullScreen when prop is false', () => {
    const { container } = render(<Loader fullScreen={false} />);
    const loaderContainer = container.firstChild;
    
    expect(loaderContainer).toHaveClass('h-full', 'min-h-[200px]');
    expect(loaderContainer).not.toHaveClass('fixed', 'inset-0', 'min-h-[100dvh]');
  });

  it('renders the logo image with correct attributes', () => {
    render(<Loader />);
    const image = screen.getByAltText('Cargando...');
    
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/logos/channel-logo.png');
  });

  it('renders the loading text', () => {
    render(<Loader />);
    const loadingText = screen.getByText('CALENTANDO MOTORES...');
    
    expect(loadingText).toBeInTheDocument();
    expect(loadingText).toHaveClass('animate-pulse');
  });

  it('applies animation classes to spinner elements', () => {
    const { container } = render(<Loader />);
    const spinners = container.querySelectorAll('.animate-spin');
    
    expect(spinners).toHaveLength(2);
  });

  it('applies correct base styles to container', () => {
    const { container } = render(<Loader />);
    const loaderContainer = container.firstChild;
    
    expect(loaderContainer).toHaveClass('w-full', 'flex', 'justify-center', 'items-center', 'bg-base-100/50', 'backdrop-blur-sm', 'z-50');
  });
});
