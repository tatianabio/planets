import React from 'react';
import cx from 'classnames';
import { planetsCount } from '../../mock';
import './PaginationButtons.scss';

const PaginationButtons = () => {
    const renderPaginationButtons = (totalCount: number, activeNumber: number) => {
        const numberPerPage = 10;
        const pagesNumber = Math.ceil(totalCount / numberPerPage);

        const paginationButtons = new Array(pagesNumber);

        return paginationButtons.map((_, index) => {
            const isActive = activeNumber === index;
            const paginationButtonText = index + 1;
            return (
              <li key={paginationButtonText} className='pagination-buttons__item'>
                <button className={cx('pagination-buttons__button', isActive && 'pagination-buttons__button--active')} type="button">{paginationButtonText}</button>
              </li>
            );
        });
    };
    return (
      <ul className='pagination-buttons'>
        {renderPaginationButtons(planetsCount, 1)}
      </ul>
    );
};

export default PaginationButtons;
