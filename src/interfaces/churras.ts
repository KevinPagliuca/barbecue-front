export interface IChurras {
  id: string;
  title: string;
  description: string;
  date: string;
  hour: string;
  location: string;
  user_id: string;
  participants: {
    id: string;
    name: string;
    value: string;
  }[];
  created_at: Date;
  updated_at: Date;
}

export interface ICreateChurrasRequestDTO {
  title: string;
  date: string;
  hour: string;
  location: string;
  description: string;
  participants?: {
    name: string;
    value: string;
  }[];
}

export type IUpdateChurrasRequestDTO = {
  participants: {
    id?: string;
    name: string;
    value: string;
  }[];
  id: string;
  title: string;
  description: string;
  date: string;
  hour: string;
  location: string;
  deleted_participants?: string[];
};
