/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from "react";

// import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

import pluginId from '../../pluginId';

import { Layout } from '@strapi/design-system/Layout';
import {ContentLayout, BaseHeaderLayout } from '@strapi/design-system/Layout';
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../../../../todo/admin/src/components/Illo";

import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";

import BlogModal from "../../components/BlogModal";


const HomePage = () => {
  const [blogData, setBlogData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  

  async function addBlog(data) {
    setBlogData([...blogData, { ...data, id: nanoid(), storyCopy: "test" }]);
  }

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
                  Write your first Article
                </Button>
              }
            />
          ) : ( 
            <h2>You have {blogData.length} articles</h2>
         )
        }

      </Layout>

      {showModal && <BlogModal setShowModal={setShowModal} addBlog={addBlog} />}

    </div>
  );
};

export default memo(HomePage);
