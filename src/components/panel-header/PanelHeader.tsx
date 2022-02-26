import { ComponentPropsWithRef, ReactElement } from 'react';

interface PanelHeaderProps extends ComponentPropsWithRef<'a'> {
  category: Category;
}

export const PanelHeader = ({ category, children }: PanelHeaderProps): ReactElement => {
  return (
    <a href={`/categories/${category}`} onClick={(e) => e.stopPropagation()}>
      {children}
    </a>
  );
};
