import { Popover, Transition } from '@headlessui/react'
import { DocumentTextIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment, FunctionComponent } from 'react'
import Button from '../../button/button'
import Item from './item'
import { INavigationItem } from './types'

const action: INavigationItem = {
  key: 'whitepaper',
  name: 'Whitepaper',
  href: '/Quiver-Whitepaper.pdf',
}

const navigation: INavigationItem[] = [
  {
    key: 'protocol',
    name: 'Protocol',
    id: 'protocol',
  },
  {
    key: 'ecosystem',
    name: 'Ecosystem',
    id: 'ecosystem',
  },
  {
    key: 'invest',
    name: 'Invest',
    id: 'invest',
  },
  {
    key: 'roadmap',
    name: 'Roadmap',
    id: 'roadmap',
  },
  {
    key: 'blog',
    name: 'Blog',
    href: 'https://quiverprotocol.medium.com/',
  },
  {
    key: 'careers',
    name: 'Careers',
    href: 'https://quiverprotocol.medium.com/careers-at-quiver-protocol-b8ffd3d59d6b',
  },
  {
    key: 'guidance',
    name: 'User Guidance',
    href: '/Quiver_Protocol_User_Guidance.pdf',
  },
]

const Navigation: FunctionComponent = () => {
  return (
    <Popover className="relative z-50">
      {({ open }) => (
        <>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-0 py-6 flex justify-between items-center lg:justify-start lg:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Quiver</span>
                <img src="/logo.svg" className="w-auto h-8 sm:h-10" />
              </a>
            </div>
            <nav className="hidden lg:flex space-x-10">
              {navigation.map((x) => (
                <Item key={x.key} item={x} />
              ))}
            </nav>
            <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
              <Button href={action.href} icon={DocumentTextIcon} outlined>
                {action.name}
              </Button>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-10"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <img src="logo.svg" className="w-auto h-8" />
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                      {navigation.map((x) => (
                        <Item key={x.key} item={x} />
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <Button
                    href={action.href}
                    icon={DocumentTextIcon}
                    outlined
                    className="w-full flex"
                  >
                    {action.name}
                  </Button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Navigation
