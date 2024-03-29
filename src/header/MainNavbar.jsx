import { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import target from "../assets/target.svg"

/*
@description
The component renders a navigation bar.
*/
const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'View candidates', href: '/view-candidates', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [active, setactive] = useState('Home')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    switch(location.pathname){
      case '/':
        {
          setactive('Home')
          break
        }
      case '/view-candidates':
        {
          setactive('View candidates')
          break
        }
      default:
        {
          setactive('None')
        }
    }
  }, [location.pathname])

  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center text-xl font-bold text-white mr-2">
                  <img
                  src={target}
                  alt="logo"
                  className='h-8 w-8 mr-2'/>
                  HireTracker
                </div>
                {/* links here */}
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                     
                      className={classNames(
                        item.name === active ? 'bg-[#2c2f32] text-[#4ACD8D]' : 'text-white hover:bg-[#2c2f32] hover:text-white',
                        'rounded-md px-3 py-2 text-[15px] font-semibold'
                      )}
                      onClick={() => {navigate(item.href); setactive(item.name)}}
                    
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link
                    type="button"
                    to="/add-candidate"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-[#8c6dfd] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8362FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D59FF]"
                  >
                    <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    New candidate
                  </Link>
                </div>
              
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-[#2c2f32] text-[#4ACD8D]' : 'text-gray-300 hover:bg-[#2c2f32] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-semibold'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
           
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}