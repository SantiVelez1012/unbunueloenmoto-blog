import { render, screen } from '@testing-library/react';
import PostCardHorizontal from './postCardHorizontal';
import { PostListed } from '@/features/blog/domain/entities/postListed';
import { DateFormatter } from '@/features/shared/presentation/utils/dateFormatter';
import React from 'react';

// Mock Next.js components
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => {
        const { fill, ...rest } = props;
        // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
        return <img {...rest} data-fill={fill} />;
    },
}));

jest.mock('next/link', () => ({
    __esModule: true,
    default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>,
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, className }: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) => {
            return <div className={className}>{children}</div>;
        },
    },
}));

// Mock DateFormatter
jest.mock('@/features/shared/presentation/utils/dateFormatter', () => ({
    DateFormatter: {
        formatDateToSpanishColombia: jest.fn(),
    },
}));

describe('PostCardHorizontal', () => {
    const mockPost: PostListed = {
        title: 'Test Post Title',
        postSummary: 'This is a test post summary describing the content.',
        urlSlug: 'test-post-slug',
        coverImage: {
            url: 'https://example.com/image.jpg',
            title: 'Test Cover Image',
            fileName: 'image.jpg',
            contentType: 'image/jpeg',
        },
        createdAt: '2024-01-15T00:00:00.000Z',
        tagsCollection: {
            items: [
                { tagId: '1', name: 'React' },
                { tagId: '2', name: 'Testing' },
            ],
        },
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (DateFormatter.formatDateToSpanishColombia as jest.Mock).mockReturnValue(
            '15 de enero de 2024'
        );
    });

    describe('Rendering', () => {
        it('renders the post card with all main elements', () => {
            render(<PostCardHorizontal post={mockPost} />);

            expect(screen.getByText('Test Post Title')).toBeInTheDocument();
            expect(screen.getByText('This is a test post summary describing the content.')).toBeInTheDocument();
            expect(screen.getByText('15 de enero de 2024')).toBeInTheDocument();
        });

        it('renders the cover image with correct attributes', () => {
            render(<PostCardHorizontal post={mockPost} />);

            const image = screen.getByAltText('Test Cover Image');
            expect(image).toBeInTheDocument();
            expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
        });

        it('renders all tags from the post', () => {
            render(<PostCardHorizontal post={mockPost} />);

            expect(screen.getByText('React')).toBeInTheDocument();
            expect(screen.getByText('Testing')).toBeInTheDocument();
        });

        it('renders "Leer más" text', () => {
            render(<PostCardHorizontal post={mockPost} />);

            expect(screen.getByText('Leer más')).toBeInTheDocument();
        });

        it('renders link with correct href', () => {
            render(<PostCardHorizontal post={mockPost} />);

            const link = screen.getByRole('link');
            expect(link).toHaveAttribute('href', '/blog/test-post-slug');
        });
    });

    describe('Date Formatting', () => {
        it('calls DateFormatter with the post createdAt date', () => {
            render(<PostCardHorizontal post={mockPost} />);

            expect(DateFormatter.formatDateToSpanishColombia).toHaveBeenCalledWith(
                '2024-01-15T00:00:00.000Z'
            );
            expect(DateFormatter.formatDateToSpanishColombia).toHaveBeenCalledTimes(1);
        });

        it('displays the formatted date', () => {
            (DateFormatter.formatDateToSpanishColombia as jest.Mock).mockReturnValue(
                '1 de febrero de 2025'
            );

            render(<PostCardHorizontal post={mockPost} />);

            expect(screen.getByText('1 de febrero de 2025')).toBeInTheDocument();
        });
    });

    describe('Tags', () => {
        it('renders multiple tags correctly', () => {
            const postWithMultipleTags: PostListed = {
                ...mockPost,
                tagsCollection: {
                    items: [
                        { tagId: '1', name: 'JavaScript' },
                        { tagId: '2', name: 'TypeScript' },
                        { tagId: '3', name: 'NextJS' },
                    ],
                },
            };

            render(<PostCardHorizontal post={postWithMultipleTags} />);

            expect(screen.getByText('JavaScript')).toBeInTheDocument();
            expect(screen.getByText('TypeScript')).toBeInTheDocument();
            expect(screen.getByText('NextJS')).toBeInTheDocument();
        });

        it('renders no tags when tagsCollection is empty', () => {
            const postWithoutTags: PostListed = {
                ...mockPost,
                tagsCollection: {
                    items: [],
                },
            };

            render(<PostCardHorizontal post={postWithoutTags} />);

            expect(screen.queryByText('React')).not.toBeInTheDocument();
            expect(screen.queryByText('Testing')).not.toBeInTheDocument();
        });

        it('renders each tag with unique key', () => {
            render(<PostCardHorizontal post={mockPost} />);

            const tags = screen.getAllByText(/React|Testing/);
            expect(tags).toHaveLength(2);
        });
    });

    describe('Content Display', () => {
        it('renders post title as heading', () => {
            render(<PostCardHorizontal post={mockPost} />);

            const title = screen.getByText('Test Post Title');
            expect(title).toBeInTheDocument();
            expect(title.tagName).toBe('H3');
        });

        it('renders post summary as paragraph', () => {
            render(<PostCardHorizontal post={mockPost} />);

            const summary = screen.getByText('This is a test post summary describing the content.');
            expect(summary).toBeInTheDocument();
            expect(summary.tagName).toBe('P');
        });

        it('handles long post titles', () => {
            const longTitlePost: PostListed = {
                ...mockPost,
                title: 'This is a very long post title that might wrap to multiple lines in the card component',
            };

            render(<PostCardHorizontal post={longTitlePost} />);

            expect(
                screen.getByText('This is a very long post title that might wrap to multiple lines in the card component')
            ).toBeInTheDocument();
        });

        it('handles long post summaries', () => {
            const longSummaryPost: PostListed = {
                ...mockPost,
                postSummary: 'This is a very long summary that contains a lot of text and describes the post content in great detail. It might span multiple lines and needs to be displayed properly in the card.',
            };

            render(<PostCardHorizontal post={longSummaryPost} />);

            expect(
                screen.getByText(/This is a very long summary that contains a lot of text/)
            ).toBeInTheDocument();
        });
    });

    describe('Link Behavior', () => {
        it('creates correct blog post URL from urlSlug', () => {
            const customSlugPost: PostListed = {
                ...mockPost,
                urlSlug: 'my-awesome-blog-post',
            };

            render(<PostCardHorizontal post={customSlugPost} />);

            const link = screen.getByRole('link');
            expect(link).toHaveAttribute('href', '/blog/my-awesome-blog-post');
        });

        it('wraps entire card content in a link', () => {
            render(<PostCardHorizontal post={mockPost} />);

            const links = screen.getAllByRole('link');
            expect(links).toHaveLength(1);
        });
    });

    describe('Edge Cases', () => {
        it('handles post with single tag', () => {
            const singleTagPost: PostListed = {
                ...mockPost,
                tagsCollection: {
                    items: [{ tagId: '1', name: 'Solo' }],
                },
            };

            render(<PostCardHorizontal post={singleTagPost} />);

            expect(screen.getByText('Solo')).toBeInTheDocument();
        });

        it('handles special characters in post title', () => {
            const specialCharsPost: PostListed = {
                ...mockPost,
                title: 'Test & Title with "Quotes" and <Special> Characters!',
            };

            render(<PostCardHorizontal post={specialCharsPost} />);

            expect(screen.getByText('Test & Title with "Quotes" and <Special> Characters!')).toBeInTheDocument();
        });

        it('handles URL slugs with hyphens and numbers', () => {
            const slugPost: PostListed = {
                ...mockPost,
                urlSlug: 'post-123-test-slug',
            };

            render(<PostCardHorizontal post={slugPost} />);

            const link = screen.getByRole('link');
            expect(link).toHaveAttribute('href', '/blog/post-123-test-slug');
        });

        it('handles different date formats', () => {
            (DateFormatter.formatDateToSpanishColombia as jest.Mock).mockReturnValue(
                '31 de diciembre de 2023'
            );

            const datePost: PostListed = {
                ...mockPost,
                createdAt: '2023-12-31T23:59:59.999Z',
            };

            render(<PostCardHorizontal post={datePost} />);

            expect(screen.getByText('31 de diciembre de 2023')).toBeInTheDocument();
        });
    });

    describe('Accessibility', () => {
        it('has accessible link element', () => {
            render(<PostCardHorizontal post={mockPost} />);

            const link = screen.getByRole('link');
            expect(link).toBeInTheDocument();
        });

        it('has accessible image with alt text', () => {
            render(<PostCardHorizontal post={mockPost} />);

            const image = screen.getByAltText('Test Cover Image');
            expect(image).toBeInTheDocument();
        });

        it('has semantic heading for title', () => {
            render(<PostCardHorizontal post={mockPost} />);

            const heading = screen.getByRole('heading', { name: 'Test Post Title' });
            expect(heading).toBeInTheDocument();
        });
    });
});
