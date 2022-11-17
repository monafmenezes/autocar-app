import { BsFilter } from 'react-icons/bs';

const CarsPage = () => {
    return(
        <div className="px-14">
            <h4 className="text-gray-100 py-4">CARROS USADOS</h4>
            <nav className='flex'>
                <span className='font-bold flex items-center mr-12 cursor-pointer'> <BsFilter size={20} className='mr-2'/>Mostrar filtros</span>
                <span className='text-gray-200 font-semibold  mr-6 cursor-pointer'>Remover filtros</span>
                <span className='text-gray-200 font-semibold  mr-6 cursor-pointer'>{2.3456} Resultados</span>
            </nav>
            
        </div>
    )
}

export default CarsPage;