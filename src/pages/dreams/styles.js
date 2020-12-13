import styled, { keyframes } from "styled-components";
import { PRI_COLOR } from "../../utils/constants";

export const slideFadeInUp = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, 70%, 0);
  visibility: visible;
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;

export const slideInUp = keyframes`
from {
  transform: translate3d(0, 70%, 0);
  visibility: visible;
}

to {
  transform: translate3d(0, 0, 0);
}
`;

export const TableCell = styled.td`
  padding: 0.5rem;
  border: 0.4px solid #ddd;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${slideInUp} 1.2s ease-in;

  .pagination {
    margin-top: 2rem;
    button {
      padding: 1rem;
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
      font-size: 1.2rem;
      margin: 4px;
      background-color: #fff;
      border-color: ${PRI_COLOR};
      cursor: pointer;
    }
  }
`;

export const Table = styled.table`
  tr:nth-child(even) {
    background-color: red;
  }
  border-collapse: collapse;

  thead td {
    font-weight: bold;
    font-size: 1.4rem;
    color: ${PRI_COLOR};
  }

  tbody td {
    font-size: 1.2rem;
    color: #333;

    button {
      background-color: #fff;
      padding: 3px;
      border: none;
      cursor: pointer;
    }
  }
`;
