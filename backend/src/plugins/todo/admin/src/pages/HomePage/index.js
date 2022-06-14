import React, { memo, useState, useEffect } from "react";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import todoRequests from "../../api/todo"
import { nanoid } from "nanoid";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../components/Illo";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";
import TodoModal from "../../components/TodoModal";

import TodoCount from "../../components/TodoCount";
import TodoTable from "../../components/TodoTable";

// import PropTypes from 'prop-types';

const HomePage = () => {
  const [todoData, setTodoData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async ()=> {
    //initially set spinner to spin
    if (isLoading === false) setIsLoading(true);
    //from api/todo.js -- will return JSON list of todos
    const todo = await todoRequests.getAllTodos();
    setTodoData(todo);
    setIsLoading(false); //shut off spinner
  }

  useEffect(async () => {
    await fetchData();
  }, [])

  async function addTodo(data) {
    setTodoData([...todoData, { ...data, id: nanoid(), isDone: false }]);
  }

  async function toggleTodo(data) {
    alert("Add Toggle Todo in API");
  }

  async function deleteTodo(data) {
    alert("Add Delete Todo in API");
  }

  async function editTodo(id, data) {
    alert("Add Edit Todo in API");
  }

  if (isLoading) return <LoadingIndicatorPage />

  return (
    <>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
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
        ) : (
          <>
            <TodoCount count={todoData.length} />

            <TodoTable
              todoData={todoData}
              setShowModal={setShowModal}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          </>
        )}
      </ContentLayout>

      {showModal && <TodoModal setShowModal={setShowModal} addTodo={addTodo} />}
    </>
  );
};

export default memo(HomePage);