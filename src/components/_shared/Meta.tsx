import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { APP_KEYWORDS, APP_TITLE, SITE_AUTHOR, SITE_DESCRIPTION } from 'common/utils/constants';
import { sanitizeEncodedChar } from 'common/utils/index';

interface IMetaProps {
  title?: string;
  description?: string;
  meta?: Partial<IMetaTag>[];
  keywords?: string[];
  ogType?: string;
}

interface IMetaTag {
  id: string;
  content: string;
  name?: string;
  property?: string;
}

const Meta: FunctionComponent<IMetaProps> = ({
  description,
  meta = [],
  title,
  ogType = 'website'
}) => {
  const metaDescription = description || SITE_DESCRIPTION;
  const pageTitle = title
    ? sanitizeEncodedChar(title)
    : sanitizeEncodedChar(APP_TITLE);
  const defaultKeywordsMetaTag: IMetaTag = {
    id: 'keywords',
    name: 'keywords',
    content: APP_KEYWORDS
  };

  const defaultMetaTags: IMetaTag[] = [
    {
      id: 'description',
      name: 'description',
      content: metaDescription
    },
    {
      id: 'og:title',
      property: 'og:title',
      content: pageTitle
    },
    {
      id: 'og:description',
      property: 'og:description',
      content: metaDescription
    },
    {
      id: 'og:type',
      property: 'og:type',
      content: ogType
    },
    {
      id: 'twitter:card',
      name: 'twitter:card',
      content: 'summary'
    },
    {
      id: 'twitter:creator',
      name: 'twitter:creator',
      content: SITE_AUTHOR
    },
    {
      id: 'twitter:title',
      name: 'twitter:title',
      content: pageTitle
    },
    {
      id: 'twitter:description',
      name: 'twitter:description',
      content: metaDescription
    },
    {
      ...defaultKeywordsMetaTag
    }
  ];

  const metaTags: Array<Partial<IMetaTag>> = [...defaultMetaTags, ...meta];

  return (
    <Head>
      <title>{`${pageTitle} | Joel Pierre`}</title>
      {metaTags.map((metaTag: IMetaTag, index) => (
        <React.Fragment
          key={`${metaTag.id} ${index}`}
        >
          <meta
            id={metaTag.id}
            name={metaTag.name}
            property={metaTag.property}
            content={metaTag.content}
          />
        </React.Fragment>
      ))}
    </Head>
  );
};

export default Meta;
