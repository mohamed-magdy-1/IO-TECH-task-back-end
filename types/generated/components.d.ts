import type { Schema, Struct } from '@strapi/strapi';

export interface HeaderLinksLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_links_links';
  info: {
    displayName: 'links';
    icon: 'link';
  };
  attributes: {
    name: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface HeroContentContent extends Struct.ComponentSchema {
  collectionName: 'components_hero_content_contents';
  info: {
    displayName: 'content';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    imgContent: Schema.Attribute.Media<'images' | 'files'>;
    mainImage: Schema.Attribute.Media<'files' | 'videos' | 'images', true>;
    ReadMoreUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'header-links.links': HeaderLinksLinks;
      'hero-content.content': HeroContentContent;
    }
  }
}
