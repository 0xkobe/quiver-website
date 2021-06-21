import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Fragment, FunctionComponent, ReactElement } from 'react'

type IProps = {
  isOpen: boolean
  title: string
  setIsOpen: (val: boolean) => void
  info?: ReactElement
  closable?: boolean
  loading?: boolean
}

const Modal: FunctionComponent<IProps> = ({
  isOpen,
  setIsOpen,
  info,
  title,
  children,
  closable,
  loading,
}) => {
  function close(e) {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    if (!closable) return
    setIsOpen(false)
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        open={isOpen}
        onClose={close}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95 translate-y-20"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95 translate-y-20"
          >
            <div className="inline-block rounded-xl text-left overflow-hidden shadow-xl align-middle transform transition-all w-full sm:w-96">
              <div className="bg-white p-6">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900 flex flex-row items-center"
                >
                  {title}
                  <span className="flex-grow"></span>
                  {loading && (
                    <span className="animate-spin w-6 h-6 text-purple-700">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 1.5C13.5 0.703125 12.7969 0 12 0C11.1562 0 10.5 0.703125 10.5 1.5C10.5 2.34375 11.1562 3 12 3C12.7969 3 13.5 2.34375 13.5 1.5ZM12 21C11.1562 21 10.5 21.7031 10.5 22.5C10.5 23.3438 11.1562 24 12 24C12.7969 24 13.5 23.3438 13.5 22.5C13.5 21.7031 12.7969 21 12 21ZM24 12C24 11.2031 23.2969 10.5 22.5 10.5C21.6562 10.5 21 11.2031 21 12C21 12.8438 21.6562 13.5 22.5 13.5C23.2969 13.5 24 12.8438 24 12ZM3 12C3 11.2031 2.29688 10.5 1.5 10.5C0.65625 10.5 0 11.2031 0 12C0 12.8438 0.65625 13.5 1.5 13.5C2.29688 13.5 3 12.8438 3 12ZM4.54688 17.9531C3.70312 17.9531 3.04688 18.6094 3.04688 19.4531C3.04688 20.2969 3.70312 20.9531 4.54688 20.9531C5.39062 20.9531 6.04688 20.2969 6.04688 19.4531C6.04688 18.6094 5.39062 17.9531 4.54688 17.9531ZM19.4062 17.9531C18.5625 17.9531 17.9062 18.6094 17.9062 19.4531C17.9062 20.2969 18.5625 20.9531 19.4062 20.9531C20.25 20.9531 20.9062 20.2969 20.9062 19.4531C20.9062 18.6094 20.25 17.9531 19.4062 17.9531ZM4.54688 3.09375C3.70312 3.09375 3.04688 3.75 3.04688 4.59375C3.04688 5.4375 3.70312 6.09375 4.54688 6.09375C5.39062 6.09375 6.04688 5.4375 6.04688 4.59375C6.04688 3.75 5.39062 3.09375 4.54688 3.09375Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  )}
                  {closable && (
                    <a onClick={close}>
                      <XIcon className="w-4 h-4 text-gray-400 cursor-pointer" />
                    </a>
                  )}
                </Dialog.Title>
                {children}
              </div>
              {info && <div className="bg-purple-100 p-6">{info}</div>}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
