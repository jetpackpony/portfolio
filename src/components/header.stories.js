import React from 'react';
import { action } from '@storybook/addon-actions';
import Header from './header';

export default {
  component: Header,
  title: 'Header'
};

export const withTitle = () => <Header siteTitle="Testme" />;
