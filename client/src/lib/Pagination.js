import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer className="pagination-container">
      <PageTracker>{`Page ${currentPage} of ${pageNumbers.length}`}</PageTracker>
      <PaginationNav>
        <PaginationList className="pagination">
          {pageNumbers.map((number) => (
            <PaginationListItem
              key={number}
              className="page-item"
              currentPageBackground={currentPage === number ? colors.lilac : 'white'}
              onClick={() => {
                setCurrentPage(number);
                paginate(number);
              }}>
              {number}
            </PaginationListItem>
          ))}
        </PaginationList>
      </PaginationNav>
    </PaginationContainer>
  );
};

const PaginationContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const PageTracker = styled('h2')`
  margin-bottom: 10px;
`;

const PaginationNav = styled('nav')`
  display: flex;
  width: 100px;
  justify-content: center;
`;

const PaginationList = styled('ul')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: inherit;
`;

const PaginationListItem = styled('li')`
  border: 1px solid ${colors.lilac};
  padding: 5px;
  margin: 5px;
  width: 20px;
  text-align: center;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  background: ${(props) => props.currentPageBackground};
  &:hover {
    background: ${colors.lilac};
  }
`;
