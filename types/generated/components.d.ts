import type { Schema, Struct } from '@strapi/strapi';

export interface FooterQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_quick_links';
  info: {
    description: 'A quick navigation link in the footer';
    displayName: 'QuickLink';
    icon: 'link';
  };
  attributes: {
    className: Schema.Attribute.String;
    path: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    description: 'A social media link';
    displayName: 'SocialLink';
    icon: 'link';
  };
  attributes: {
    handle: Schema.Attribute.String & Schema.Attribute.Required;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface InitiativeBreakdownItem extends Struct.ComponentSchema {
  collectionName: 'components_initiative_breakdown_items';
  info: {
    description: 'A spending breakdown line item';
    displayName: 'BreakdownItem';
    icon: 'priceTag';
  };
  attributes: {
    cost: Schema.Attribute.Decimal & Schema.Attribute.Required;
    item: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    description: 'A navigation menu item with optional submenu';
    displayName: 'MenuItem';
    icon: 'bulletList';
  };
  attributes: {
    className: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    path: Schema.Attribute.String & Schema.Attribute.Required;
    submenu: Schema.Attribute.Component<'navigation.submenu-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationSubmenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_submenu_items';
  info: {
    description: 'A submenu link within a navigation menu item';
    displayName: 'SubmenuItem';
    icon: 'arrowRight';
  };
  attributes: {
    path: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.quick-link': FooterQuickLink;
      'footer.social-link': FooterSocialLink;
      'initiative.breakdown-item': InitiativeBreakdownItem;
      'navigation.menu-item': NavigationMenuItem;
      'navigation.submenu-item': NavigationSubmenuItem;
    }
  }
}
