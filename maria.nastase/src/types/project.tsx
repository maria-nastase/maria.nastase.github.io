export type Project = {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    longDescription: string;
    thumbnail?: string; 
    images?: string[];   
    links?: { label: string; url: string }[];
  };
  
  
  