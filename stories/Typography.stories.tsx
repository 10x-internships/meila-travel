import Typography, { TypographyTag, TypographyVariants } from '../components/Typography';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  tagName: TypographyTag.H1,
  variant: TypographyVariants.Heading,
  children: 'Heading Typography',
  className: 'testing',
};
