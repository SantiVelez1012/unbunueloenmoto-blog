import { BLOCKS, Document, INLINES, Node } from '@contentful/rich-text-types';
import React from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export const renderRichText = (json: Document, links: any) => {
  const assetMap = new Map();
  links.assets.block.forEach((asset: any) => {
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
        [BLOCKS.EMBEDDED_ASSET]: (node: Node, children: React.ReactNode) => {
          const asset = assetMap.get(node.data.target.sys.id);
  
          if (!asset) return null;
    
          return (
            <div className="my-6">
              <Image
                alt={''}
                src={asset.url}
                className="rounded-xl shadow-md mx-auto"
                width={600}
                height={400}
                style={{ height: 'auto', width: '100%' }}
              />
            </div>
          );
        },
      },
    };

    return documentToReactComponents(json, rendererOptions);




}

