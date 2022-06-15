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
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../../../../todo/admin/src/components/Illo";

import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";


const HomePage = () => {
  const [blogData, setBlogData] = useState([]);

  return (
    <div>

      <Layout>

        <BaseHeaderLayout
          title="Blog"
          subtitle ="What's new in YOUR universe?"
          as="h2"
        />

        <ContentLayout>
          <p>The Official Comic Swap Blog</p>
        </ContentLayout>

        {blogData.length === 0  ? 
          (
            <EmptyStateLayout
              icon={<Illo />}
              content="You don't have any blog articles yet..."
              action={
                <Button
                  onClick={() => setShowModal(true)}
                  variant="secondary"
                  startIcon={<Plus />}
                >
                  Add your first todo
                </Button>
              }
            />
          ) : ( 
            <p>add count and table component here</p>
         )
        }


      </Layout>

    </div>
  );
};

export default memo(HomePage);
