import { BLOCKS, Document, INLINES, Node } from '@contentful/rich-text-types';
import React from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Links, Block } from '@/core/infrastructure/entities/post';

export const renderRichText = (json: Document, links: Links) => {
  const assetMap: Map<string, Block> = new Map();
  links.assets.block.forEach((asset: Block) => {
    assetMap.set(asset.sys.id, asset);
  });

  const rendererOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
        <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: Node, children: React.ReactNode) => (
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 mt-10">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: Node, children: React.ReactNode) => (
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 mt-8">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: Node, children: React.ReactNode) => (
        <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-4 mt-6">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
        <ul className="list-disc list-inside pl-6 mb-4 text-gray-200">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: Node, children: React.ReactNode) => (
        <ol className="list-decimal list-inside pl-6 mb-4 text-gray-200">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => {
        const cleanChildren = React.Children.map(children, child => {
          if (React.isValidElement(child) && child.type === 'p') {
            return (child as React.ReactElement<{ children: React.ReactNode }>).props.children;
          }
          return child;
        });
        return <li className="mb-2">{cleanChildren}</li>;
      },
      [BLOCKS.QUOTE]: (node: Node, children: React.ReactNode) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-6">{children}</blockquote>
      ),
      [BLOCKS.HR]: () => (
        <hr className="my-8 border-t-2 border-base-300" />
      ),
      [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => (
        <a
          href={node.data.uri}
          className="text-blue-400 underline hover:text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const asset = assetMap.get(node.data.target.sys.id);
        if (!asset || !asset.url) return null;
        return (
          <figure className="my-8 flex flex-col items-center">
            <Image
              alt={asset.title || ''}
              src={asset.url}
              className="rounded-xl shadow-lg mx-auto max-h-[500px] object-contain"
              width={800}
              height={500}
              style={{ height: 'auto' }}
            />
            {asset.description && (
              <figcaption className="text-gray-400 text-sm mt-2">{asset.description}</figcaption>
            )}
          </figure>
        );
      },
    },
  };

  return documentToReactComponents(json, rendererOptions);
};

