import React, { useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, BoxProps, ButtonProps, Button } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: Box,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = () => {
  const elementRef = useRef<HTMLAnchorElement>();

  console.log(elementRef.current?.innerHTML);

  return (
    <Box component="a" className="string" href="#" ref={elementRef}>
      hello
    </Box>
  );
};

export const Default = Template.bind({});

Default.args = {};
