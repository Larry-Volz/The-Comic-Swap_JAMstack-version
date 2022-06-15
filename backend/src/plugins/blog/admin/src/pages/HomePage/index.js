/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from "react";

// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

import { Layout } from '@strapi/design-system/Layout';
import {ContentLayout, BaseHeaderLayout } from '@strapi/design-system/Layout';


const HomePage = () => {
  const [blogData, setBlogData] = useState([]);

  return (
    <div>

      <Layout>

        <BaseHeaderLayout
          title="Blog Plugin"
          subtitle ="What's new in YOUR universe?"
          as="h2"
        />

        <ContentLayout>
          <p>The Official Comic Swap Blog</p>
        </ContentLayout>

        {blogData.length === 0  ? 
          (
            <p>add emptystate component here</p>
          ) : ( 
            <p>add count and table component here</p>
         )
        }


      </Layout>

    </div>
  );
};

export default memo(HomePage);
