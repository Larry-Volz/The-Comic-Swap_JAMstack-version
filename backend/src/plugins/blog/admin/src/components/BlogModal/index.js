import React, { useState } from "react";

import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
  Textarea
} from "@strapi/design-system";


export default function BlogModal({ setShowModal, addBlog }) {

  const [storyTitle, setStoryTitle] = useState("");
  const [storyContent, setStoryContent] = useState("");

  const handleSubmit = async (e) => {
    // Prevent submitting parent form
    e.preventDefault();
    e.stopPropagation();

    try {
      await addBlog({ 
        storyTitle: storyTitle,
        storyContent: storyContent
       });
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
       <>
       <TextInput
          placeholder="Story title?"
          label="Story Title"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e) => setStoryTitle(e.target.value)}
          value={storyTitle}
          />

        <div style={{marginBottom: '40px'}}></div>

        <Textarea
          placeholder="Story content?"
          label="Story Content"
          name="textContent"
          // hint="Max 40 characters"
          // error={getError()}
          onChange={(e) => setStoryContent(e.target.value)}
          value={storyContent}
          style= {{ rows: 5}}
        />

       </>
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