import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'

export function Search() {
    return (
        <div className='hidden lg:flex md:items-center md:gap-4'>
          <Image className='hidden xl:block'
             src={IconSearch}
             alt='Search'
          />

          <input className=' bg-transparent outline-none text-white placeholder:text-white p-6'
             type='text'
             placeholder='Buscar'
          />
        </div>
    )
}