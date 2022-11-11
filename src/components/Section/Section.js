import React from 'react';
import PropTypes from 'prop-types';
import { MainSection, Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <MainSection>
      <Title>{title}</Title>
      {children}
    </MainSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};