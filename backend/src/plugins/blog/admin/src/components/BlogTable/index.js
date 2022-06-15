import React, { useState } from "react";
import {
  Table,
  Thead,
  TFooter,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system/Table";
import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Button } from "@strapi/design-system/Button";
import { Typography } from "@strapi/design-system/Typography";
import { IconButton } from "@strapi/design-system/IconButton";
import { VisuallyHidden } from "@strapi/design-system/VisuallyHidden";
import { BaseCheckbox } from "@strapi/design-system/BaseCheckbox";
import { TextInput } from "@strapi/design-system/TextInput";
import Pencil from "@strapi/icons/Pencil";
import Trash from "@strapi/icons/Trash";
import Plus from "@strapi/icons/Plus";

// function BlogCheckbox({ value, checkboxID, callback, disabled }) {
//   const [isChecked, setIsChecked] = useState(value);

//   function handleChange() {
//     setIsChecked(!isChecked);
//     {
//       callback && callback({ id: checkboxID, value: !isChecked });
//     }
//   }

//   return (
//     <BaseCheckbox
//       checked={isChecked}
//       onChange={handleChange}
//       disabled={disabled}
//     />
//   );
// }

function BlogInput({ value, onChange }) {
  return (
    <TextInput
      type="text"
      aria-label="story-title-input"
      name="blog-input"
      error={value.length > 40 ? "Text should be less than 40 characters" : ""}
      onChange={onChange}
      value={value}
    />
  );
}

export default function BlogTable({
  blogData,
  toggleBlog,
  deleteBlog,
  editBlog,
  setShowModal,
}) {
  return (
    <Box
      background="neutral0"
      hasRadius={true}
      shadow="filterShadow"
      padding={8}
      style={{ marginTop: "10px" }}
    >
      <Table
        colCount={4}
        rowCount={10}
        footer={
          <TFooter onClick={() => setShowModal(true)} icon={<Plus />}>
            Add a blog
          </TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Blog</Typography>
            </Th>

            <Th>
              <Typography variant="sigma">Status</Typography>
            </Th>

            <Th>
              <VisuallyHidden>Actions</VisuallyHidden>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {blogData.map((blog) => {
            const [inputValue, setInputValue] = useState(blog.name);

            const [isEdit, setIsEdit] = useState(false);

            return (
              <Tr key={blog.id}>
                <Td>
                  <Typography textColor="neutral800">{blog.id}</Typography>
                </Td>

                <Td>
                  {isEdit ? (
                    <BlogInput
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  ) : (
                    <Typography textColor="neutral800">{blog.name}</Typography>
                  )}
                </Td>

                <Td>
                  {/* <BlogCheckbox
                    value={blog.isDone}
                    checkboxID={blog.id}
                    callback={toggleBlog}
                    disabled={isEdit}
                  /> */}
                </Td>

                <Td>
                  {isEdit ? (
                    <Flex style={{ justifyContent: "end" }}>
                      <Button
                        onClick={() => editBlog(blog.id, { name: inputValue })}
                      >
                        Save
                      </Button>
                    </Flex>
                  ) : (
                    <Flex style={{ justifyContent: "end" }}>
                      <IconButton
                        onClick={() => setIsEdit(true)}
                        label="Edit"
                        noBorder
                        icon={<Pencil />}
                      />

                      <Box paddingLeft={1}>
                        <IconButton
                          onClick={() => deleteBlog(blog)}
                          label="Delete"
                          noBorder
                          icon={<Trash />}
                        />
                      </Box>
                    </Flex>
                  )}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
}