import React, { useState } from "react";

import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
} from "@strapi/design-system";


export default function BlogModal({ setShowModal, addBlog }) {

  const [storyTitle, setStoryTitle] = useState("");

  const handleSubmit = async (e) => {
    // Prevent submitting parent form
    e.preventDefault();
    e.stopPropagation();

    try {
      await addBlog({ storyTitle: storyTitle });
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getError = () => {
    // Form validation error

    if (storyTitle.length > 40) {
      return "Title is too long";
    }

    return null;
  };

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Add a blog article
        </Typography>
      </ModalHeader>

      <ModalBody>
        <TextInput
          placeholder="Story title?"
          label="storyTitle"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e) => setStoryTitle(e.target.value)}
          value={storyTitle}
        />
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Add Article</Button>}
      />
    </ModalLayout>
  );
}