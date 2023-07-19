import React from 'react';
import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

