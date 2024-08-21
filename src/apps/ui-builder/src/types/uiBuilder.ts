export type TComponentBuilderPropertyType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'enum'
  | 'ReactNode';

export type TComponentBuilderProperty = {
  name: string;
  description: string;
  type: TComponentBuilderPropertyType;
  required?: boolean;
  defaultValue?: string;
  //   options: string[];
  //   optionsDescription: string[];
  value?: string;
};

export type TComponentBuilder = {
  name: string;
  description: string;
  props: Array<TComponentBuilderProperty>;
  component: React.ComponentType;
  hasChildren?: boolean;
};
