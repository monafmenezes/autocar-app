const Card = ({ car }) => {
  return (
    <div className="w-full h-full rounded shadow-lg">
      <img className="w-full  h-4/6" src={`https://autocarapi.s3.amazonaws.com/${car.photo}`} alt={car.model} />
      <div className="h-2/6 flex flex-col p-2 items-start justify-center">
        <h3 className="text-gray-100 font-bold capitalize">{car.model}</h3>
        <span className="text-gray-200 font-poppins font-medium">
          {car.year} - {car.km} km - <span className="capitalize font-semibold">{car.mark}</span>
        </span>
        <p className="text-blue font-semibold">R$ {car.price}</p>
      </div>
    </div>
  );
};

export default Card;
