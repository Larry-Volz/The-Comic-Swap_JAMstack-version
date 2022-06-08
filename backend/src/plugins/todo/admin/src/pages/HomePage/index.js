/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { Layout } from '@strapi/design-system/Layout';
import { BaseHeaderLayout, HeaderLayout, ContentLayout } from '@strapi/design-system/Layout';

const HomePage = () => {
  return (
    <Layout>
      
      <BaseHeaderLayout
        title="Larry's Home made Todo Plugin"
        subtitle="Keepin' it organized"
        as='h2'
      />

      <ContentLayout>
        <p>Great things are afoot!</p>
      </ContentLayout>
      
    </Layout>
  );
};

export default memo(HomePage);
