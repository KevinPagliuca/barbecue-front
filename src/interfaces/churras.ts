export interface IChurras {
  id: string;
  title: string;
  description: string;
  date: string;
  hour: string;
  location: string;
  user_id: string;
  suggest_value: string;
  suggest_drink_value: string;
  participants: {
    id: string;
    name: string;
    value: string;
  }[];
  user?: {
    id: string;
    name: string;
    email: string;
  };
  created_at: Date;
  updated_at: Date;
}

export interface ICreateChurrasRequestDTO {
  title: string;
  date: string;
  hour: string;
  location: string;
  description: string;
  suggest_value: string;
  suggest_drink_value: string;
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
  suggest_value: string;
  suggest_drink_value: string;
  date: string;
  hour: string;
  location: string;
  deleted_participants?: string[];
};
