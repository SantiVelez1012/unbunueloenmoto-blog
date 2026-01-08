import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './footer';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, fill, className, ...rest } = props;
    return <img src={src} alt={alt} className={className} {...rest} />;
  },
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, className }: any) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

jest.mock('lucide-react', () => ({
  Heart: () => <svg data-testid="heart-icon" />,
}));

jest.mock('react-icons/fa', () => ({
  FaInstagram: () => <svg data-testid="instagram-icon" />,
  FaYoutube: () => <svg data-testid="youtube-icon" />,
}));

jest.mock('../social-button/socialButton', () => ({
  SocialButton: ({ href, label, icon }: any) => (
    <a href={href} aria-label={label} data-testid={`social-button-${label.toLowerCase()}`}>
      {icon}
    </a>
  ),
}));

describe('Footer', () => {
  beforeEach(() => {
    jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2026);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the footer element', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('relative', 'w-full', 'bg-[#0a0a0a]');
  });

  it('renders the logo image with correct attributes', () => {
    render(<Footer />);
    const logo = screen.getByAltText('Un Buñuelo en Moto Logo');
    
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logos/channel-logo.png');
  });

  it('renders the brand name and tagline', () => {
    render(<Footer />);
    const brandName = screen.getByText('Un Buñuelo en Moto');
    const tagline = screen.getByText('Aventuras y aprendizajes constantes...');
    
    expect(brandName).toBeInTheDocument();
    expect(tagline).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Footer />);
    const description = screen.getByText(/La comunidad para los que aprendemos en cada kilómetro/i);
    
    expect(description).toBeInTheDocument();
  });

  it('renders social media buttons', () => {
    render(<Footer />);
    const youtubeButton = screen.getByTestId('social-button-youtube');
    const instagramButton = screen.getByTestId('social-button-instagram');
    
    expect(youtubeButton).toBeInTheDocument();
    expect(instagramButton).toBeInTheDocument();
    expect(youtubeButton).toHaveAttribute('href', 'https://youtube.com/@unbunueloenmoto');
    expect(instagramButton).toHaveAttribute('href', 'https://instagram.com/unbunueloenmoto');
  });

  it('renders footer navigation sections', () => {
    render(<Footer />);
    const explorarSection = screen.getByText('Explorar');
    
    expect(explorarSection).toBeInTheDocument();
  });

  it('renders footer navigation links', () => {
    render(<Footer />);
    const inicioLink = screen.getByRole('link', { name: 'Inicio' });
    const blogLink = screen.getByRole('link', { name: 'Blog de Rutas' });
    const tiendaLink = screen.getByRole('link', { name: 'Tienda Buñuelística' });
    
    expect(inicioLink).toBeInTheDocument();
    expect(inicioLink).toHaveAttribute('href', '/');
    expect(blogLink).toBeInTheDocument();
    expect(blogLink).toHaveAttribute('href', '/blog');
    expect(tiendaLink).toBeInTheDocument();
    expect(tiendaLink).toHaveAttribute('href', '/shop');
  });

  it('renders the newsletter subscription box', () => {
    render(<Footer />);
    const subscriptionTitle = screen.getByText('¿Nuevo video?');
    const subscriptionDescription = screen.getByText('No te pierdas ninguna rodada. Suscríbete al canal.');
    const subscriptionButton = screen.getByRole('link', { name: /Ir al Canal/i });
    
    expect(subscriptionTitle).toBeInTheDocument();
    expect(subscriptionDescription).toBeInTheDocument();
    expect(subscriptionButton).toBeInTheDocument();
    expect(subscriptionButton).toHaveAttribute('href', 'https://youtube.com/@unbunueloenmoto');
    expect(subscriptionButton).toHaveAttribute('target', '_blank');
  });

  it('renders the copyright text with current year', () => {
    render(<Footer />);
    const copyright = screen.getByText('© 2026 Un Buñuelo en Moto. Todos los derechos reservados.');
    
    expect(copyright).toBeInTheDocument();
  });

  it('renders the footer tagline with heart icon', () => {
    render(<Footer />);
    const taglineText = screen.getByText('Hecho con');
    const heartIcon = screen.getByTestId('heart-icon');
    const gasolinaText = screen.getByText('y mucha gasolina.');
    
    expect(taglineText).toBeInTheDocument();
    expect(heartIcon).toBeInTheDocument();
    expect(gasolinaText).toBeInTheDocument();
  });

  it('renders YouTube icons', () => {
    render(<Footer />);
    const youtubeIcons = screen.getAllByTestId('youtube-icon');
    
    expect(youtubeIcons.length).toBeGreaterThan(0);
  });

  it('renders Instagram icon', () => {
    render(<Footer />);
    const instagramIcon = screen.getByTestId('instagram-icon');
    
    expect(instagramIcon).toBeInTheDocument();
  });

  it('renders the brand logo link with correct href', () => {
    render(<Footer />);
    const logoLinks = screen.getAllByRole('link');
    const homeLink = logoLinks.find(link => link.getAttribute('href') === '/' && link.querySelector('img'));
    
    expect(homeLink).toBeInTheDocument();
  });
});
