export interface ICarCreate {
  mark: string;
  model: string;
  year: string;
  km: string;
  filename?: string;
}

export interface ICar extends ICarCreate {
  id: string;
}

export interface ICarUpdate {
  mark: string;
  model: string;
  filename: string;
  year: string;
  km: string;
  id: string;
}

export interface ICarId {
  id: string;
}
