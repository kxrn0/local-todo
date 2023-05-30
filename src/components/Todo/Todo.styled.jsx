import styled from "styled-components";

const SCTodo = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 5px;
  padding: 10px;

  button {
    background: transparent;
    border: none;
    display: grid;
    place-items: center;
    width: 35px;
    height: 35px;
    font-size: 25px;
    border-radius: 100%;

    &.checkmark {
      color: #586450;

      @media (hover: hover) {
        &:hover {
          color: #318f92;
        }
      }
    }
  }

  .controls {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    .buttons {
      display: flex;
      gap: 10px;

      button {
        color: #31455f;

        @media (hover: hover) {
          &.remove-todo:hover {
            color: #f05f5f;
          }

          &.edit-todo:hover {
            color: #7070d3;
          }

          &.rename-button:hover {
            color: #7070d3;
          }

          &.close-textarea:hover {
            color: #f05f5f;
          }
        }
      }
    }
  }

  textarea,
  .todo-body {
    color: #405a39;
    font-family: rbk;
    font-size: 18px;
    font-weight: 400;
    padding: 10px 20px;
    line-height: 1.5rem;
    text-align: center;
    flex-grow: 1;
  }

  textarea {
    border-radius: 5px;
    border: none;
    overflow: hidden;
  }

  &.not-done {
    background: #88dbb0;

    textarea {
      background: #7cc38a;
    }
  }

  &.done {
    background: #abc4c4;

    .todo-body {
      color: #7d7676;
      text-decoration: line-through;
    }

    textarea {
      background: #d8e1da;
    }
  }
`;

export default SCTodo;
