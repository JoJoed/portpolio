interface introDataType {
  [name: string]: string;
}
interface projectDataType {
  projectName: string;
  start: string;
  end: string;
  description: string;
  link?: string;
}

interface skillDataType {
  title: string;
  data: {
    src: string;
    name: string;
  }[];
}

export type { projectDataType, skillDataType, introDataType };
