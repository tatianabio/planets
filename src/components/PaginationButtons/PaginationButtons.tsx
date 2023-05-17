import React from 'react';
import cx from 'classnames';
import styled from 'styled-components';

interface IPaginationButtons {
    totalCount: number;
    activeNumberButton: number;
    numberPerPage: number;
    onClick: (data: React.MouseEvent<HTMLButtonElement>) => void;
    className: string;
}

const PaginationButtons = ({ totalCount, activeNumberButton, numberPerPage, onClick, className }: IPaginationButtons) => {
    const renderPaginationButtons = (totalNumber: number, activeNumber: number) => {
        const pagesNumber = Math.ceil(totalNumber / numberPerPage);

        const paginationButtons = Array.from({ length: pagesNumber });

        return paginationButtons.map((_, index) => {
            const isActive = activeNumber === index + 1;
            const paginationButtonText = index + 1;
            return (
              <li key={paginationButtonText} className='item'>
                <button className={cx('button', isActive && 'button--active')} type="button" onClick={onClick} disabled={isActive}>{paginationButtonText}</button>
              </li>
            );
        });
    };
    return (
      <ul className={className}>
        {renderPaginationButtons(totalCount, activeNumberButton)}
      </ul>
    );
};

export default styled(PaginationButtons)``;
