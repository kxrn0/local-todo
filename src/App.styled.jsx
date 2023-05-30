import styled from "styled-components";

const SCApp = styled.div`
  background: #e7ebf4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;

  .title {
    color: #5d7575;
    font-family: rbk;
    font-weight: 600;
    font-size: 45px;
  }

  .todo-form {
    display: flex;
    background: transparent;
    filter: drop-shadow(-3px 3px 3px #5d705854);
    margin-bottom: 30px;

    input[type="text"] {
      background: #c8e4e9;
      padding: 0 0 0 5px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border: none;
    }

    button {
      background: #8faa87;
      color: azure;
      border: none;
      padding: 10px 20px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;

      @media (hover: hover) {
        &:hover {
          background: #83bd71;
        }
      }
    }
  }

  .items {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
`;

export default SCApp;
