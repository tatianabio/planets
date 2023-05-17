import React from 'react';
import styled from 'styled-components';

const Title = ({ className }:{className: string}) => {
    return (
      <div className={className}>
        <h2>Table title</h2>
      </div>
    );
};

export default styled(Title)``;
