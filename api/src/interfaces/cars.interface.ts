export interface ICarCreate {
  mark: string;
  model: string;
  year: string;
  km: string;
  price: string
  filename:  Express.Multer.File;
}

export interface ICar extends ICarCreate {
  id: string;
}

export interface ICarUpdate {
  mark: string;
  model: string;
  filename:Express.Multer.File;
  year: string;
  km: string;
  id: string;
  price: string
}

export interface ICarId {
  id: string;
}
