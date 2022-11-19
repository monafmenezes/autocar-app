export interface ICarCreate {
  mark: string;
  model: string;
  year: string;
  km: string;
  price: string;
  filename: Express.Multer.File;
}

export interface ICar extends ICarCreate {
  id: string;
}

export interface ICarUpdate {
  id: string;
  filename: Express.Multer.File;
}

export interface ICarId {
  id: string;
}
