/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from "react";

import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";

import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../components/Illo";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";

// import PropTypes from 'prop-types';



const HomePage = () => {
  const [todoData, setTodoData] = useState([]);

  return (
    <>
      
      <BaseHeaderLayout
        title="Larry's Home made Todo Plugin"
        subtitle="Keepin' it organized"
        as='h2'
      />

      <ContentLayout>
        {todoData.length === 0 ? (
          <EmptyStateLayout
          icon={<Illo />}
          content="You don't have any todos yet..."
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
        ):(
          "you have some"
          // add count and table componennet here
        )}
      </ContentLayout>
      
    </>
  );
};

export default memo(HomePage);
