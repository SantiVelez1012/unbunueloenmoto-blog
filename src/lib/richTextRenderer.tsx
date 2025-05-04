import { BLOCKS, Document, INLINES, Node } from '@contentful/rich-text-types';
import React from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Links, Block } from '@/core/infrastructure/entities/post'; // Ensure Block is imported

export const renderRichText = (json: Document, links: Links) => {
  const assetMap: Map<string, Block> = new Map();
  links.assets.block.forEach((asset: Block) => {
    assetMap.set(asset.sys.id, asset);
  });

  const rendererOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => (
        <p className="text-base mb-4">{children}</p>
      ),
      [INLINES.HYPERLINK]: (node: Node, children: React.ReactNode) => (
        <a href={node.data.uri} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const asset = assetMap.get(node.data.target.sys.id);

        if (!asset || !asset.url) return null;

        return (
          <div className="my-6">
            <Image
              alt={''}
              src={asset.url}
              className="rounded-xl my-12 shadow-md mx-auto md:w-[75%] max-h-[500px]"
              width={600}
              height={400}
              style={{ height: 'auto' }}
            />
          </div>
        );
      },
    },
  };

  return documentToReactComponents(json, rendererOptions);
};

