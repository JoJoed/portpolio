interface projectDataType {
  projectName: string;
  start: string;
  end: string;
  link?: string;
}

interface skillDataType {
  src: string;
  name: string;
}

export type { projectDataType, skillDataType };
