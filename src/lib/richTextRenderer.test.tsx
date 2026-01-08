import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderRichText } from './richTextRenderer';
import { BLOCKS, INLINES, Document } from '@contentful/rich-text-types';
import { Links } from '@/features/blog/infrastructure/entities/post';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, width, height, className, style } = props;
    return <img src={src} alt={alt} width={width} height={height} className={className} style={style} />;
  },
}));

describe('renderRichText', () => {
  const mockLinks: Links = {
    assets: {
      block: [
        {
          sys: { id: 'asset-1' },
          url: 'https://example.com/image.jpg',
          title: 'Test Image',
          description: 'Test Description',
        },
      ],
    },
  };

  it('renders a paragraph with correct styling', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.PARAGRAPH,
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Test paragraph',
              marks: [],
              data: {},
            },
          ],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const paragraph = container.querySelector('p');

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent('Test paragraph');
    expect(paragraph).toHaveClass('text-base', 'font-sans', 'text-gray-200');
  });

  it('renders heading 1 with correct styling', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.HEADING_1,
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Heading 1',
              marks: [],
              data: {},
            },
          ],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const heading = container.querySelector('h1');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Heading 1');
    expect(heading).toHaveClass('text-3xl', 'font-extrabold', 'text-white');
  });

  it('renders heading 2 with correct styling', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.HEADING_2,
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Heading 2',
              marks: [],
              data: {},
            },
          ],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const heading = container.querySelector('h2');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Heading 2');
    expect(heading).toHaveClass('text-2xl', 'font-bold', 'text-white');
  });

  it('renders heading 3 with correct styling', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.HEADING_3,
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'Heading 3',
              marks: [],
              data: {},
            },
          ],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const heading = container.querySelector('h3');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Heading 3');
    expect(heading).toHaveClass('text-xl', 'font-semibold', 'text-gray-100');
  });

  it('renders unordered list with correct styling', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.UL_LIST,
          data: {},
          content: [
            {
              nodeType: BLOCKS.LIST_ITEM,
              data: {},
              content: [
                {
                  nodeType: BLOCKS.PARAGRAPH,
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'List item 1',
                      marks: [],
                      data: {},
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const list = container.querySelector('ul');

    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('list-disc', 'list-inside', 'text-gray-200');
  });

  it('renders ordered list with correct styling', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.OL_LIST,
          data: {},
          content: [
            {
              nodeType: BLOCKS.LIST_ITEM,
              data: {},
              content: [
                {
                  nodeType: BLOCKS.PARAGRAPH,
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'List item 1',
                      marks: [],
                      data: {},
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const list = container.querySelector('ol');

    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('list-decimal', 'list-inside', 'text-gray-200');
  });

  it('renders list items without nested paragraph tags', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.UL_LIST,
          data: {},
          content: [
            {
              nodeType: BLOCKS.LIST_ITEM,
              data: {},
              content: [
                {
                  nodeType: BLOCKS.PARAGRAPH,
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: 'List item',
                      marks: [],
                      data: {},
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const listItem = container.querySelector('li');

    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent('List item');
    expect(listItem?.querySelector('p')).not.toBeInTheDocument();
  });

  it('renders list items with non-paragraph children', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.UL_LIST,
          data: {},
          content: [
            {
              nodeType: BLOCKS.LIST_ITEM,
              data: {},
              content: [
                {
                  nodeType: 'text',
                  value: 'Direct text node',
                  marks: [],
                  data: {},
                },
              ],
            },
          ],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const listItem = container.querySelector('li');

    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveTextContent('Direct text node');
  });

  it('renders blockquote with correct styling', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.QUOTE,
          data: {},
          content: [
            {
              nodeType: BLOCKS.PARAGRAPH,
              data: {},
              content: [
                {
                  nodeType: 'text',
                  value: 'Quote text',
                  marks: [],
                  data: {},
                },
              ],
            },
          ],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const blockquote = container.querySelector('blockquote');

    expect(blockquote).toBeInTheDocument();
    expect(blockquote).toHaveClass('border-l-4', 'border-blue-500', 'italic', 'text-gray-300');
  });

  it('renders horizontal rule', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.HR,
          data: {},
          content: [],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const hr = container.querySelector('hr');

    expect(hr).toBeInTheDocument();
    expect(hr).toHaveClass('my-8', 'border-t-2', 'border-base-300');
  });

  it('renders hyperlink with correct attributes', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.PARAGRAPH,
          data: {},
          content: [
            {
              nodeType: INLINES.HYPERLINK,
              data: { uri: 'https://example.com' },
              content: [
                {
                  nodeType: 'text',
                  value: 'Link text',
                  marks: [],
                  data: {},
                },
              ],
            },
          ],
        },
      ],
    };

    render(<>{renderRichText(document, mockLinks)}</>);
    const link = screen.getByRole('link', { name: 'Link text' });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveClass('text-blue-400', 'underline');
  });

  it('renders embedded asset with image', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.EMBEDDED_ASSET,
          data: {
            target: {
              sys: {
                id: 'asset-1',
              },
            },
          },
          content: [],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const image = container.querySelector('img');
    const figure = container.querySelector('figure');
    const figcaption = container.querySelector('figcaption');

    expect(figure).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(image).toHaveAttribute('alt', 'Test Image');
    expect(figcaption).toBeInTheDocument();
    expect(figcaption).toHaveTextContent('Test Description');
  });

  it('renders embedded asset without description', () => {
    const linksWithoutDescription: Links = {
      assets: {
        block: [
          {
            sys: { id: 'asset-2' },
            url: 'https://example.com/image2.jpg',
            title: 'Image without description',
            description: '',
          },
        ],
      },
    };

    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.EMBEDDED_ASSET,
          data: {
            target: {
              sys: {
                id: 'asset-2',
              },
            },
          },
          content: [],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, linksWithoutDescription)}</>);
    const figcaption = container.querySelector('figcaption');

    expect(figcaption).not.toBeInTheDocument();
  });

  it('renders embedded asset without title', () => {
    const linksWithoutTitle: Links = {
      assets: {
        block: [
          {
            sys: { id: 'asset-4' },
            url: 'https://example.com/image4.jpg',
            title: '',
            description: 'Image description',
          },
        ],
      },
    };

    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.EMBEDDED_ASSET,
          data: {
            target: {
              sys: {
                id: 'asset-4',
              },
            },
          },
          content: [],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, linksWithoutTitle)}</>);
    const image = container.querySelector('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', '');
  });

  it('returns null for embedded asset without url', () => {
    const linksWithoutUrl: Links = {
      assets: {
        block: [
          {
            sys: { id: 'asset-3' },
            url: '',
            title: 'Image without URL',
            description: '',
          },
        ],
      },
    };

    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.EMBEDDED_ASSET,
          data: {
            target: {
              sys: {
                id: 'asset-3',
              },
            },
          },
          content: [],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, linksWithoutUrl)}</>);
    const image = container.querySelector('img');

    expect(image).not.toBeInTheDocument();
  });

  it('returns null for embedded asset not in asset map', () => {
    const document: Document = {
      nodeType: BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: BLOCKS.EMBEDDED_ASSET,
          data: {
            target: {
              sys: {
                id: 'non-existent-asset',
              },
            },
          },
          content: [],
        },
      ],
    };

    const { container } = render(<>{renderRichText(document, mockLinks)}</>);
    const image = container.querySelector('img');

    expect(image).not.toBeInTheDocument();
  });
});
