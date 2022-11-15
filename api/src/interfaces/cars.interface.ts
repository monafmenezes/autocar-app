export interface ICarCreate  {
  mark: string;
  model: string;
  year: string;
  photo: File;
  km: number;
}

export interface ICar extends ICarCreate {
  id: string;
}

export interface ICarUpdate {
  mark: string;
  model: string
  photo: File;
  year: string;
  km: number;
}

export interface ICarId {
  id: string;
}