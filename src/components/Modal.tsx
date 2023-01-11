import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface IProps {
  open: boolean;
  hasButton?: boolean;
  children?: JSX.Element;
  buttonType?: string;
  buttonTitle?: string;
  onClick?: () => void;
  positiveButtonTitle?: string;
  negativeButtonTitle?: string;
  onPositivePress?: () => void;
  onNegativePress?: () => void;
  setOpen: (value: boolean) => void;
}

const Modal: React.FC<IProps> = ({
  open,
  setOpen,
  onClick,
  hasButton,
  buttonType,
  buttonTitle,
  onPositivePress,
  onNegativePress,
  positiveButtonTitle,
  negativeButtonTitle,
  children,
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
          </Transition.Child>

          <span
            className=" sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              {children}
              {hasButton &&
                (buttonType === "action" ? (
                  <div className="flex  justify-around items-center p-6 space-x-5 rounded-b dark:border-gray-600 ">
                    <button
                      data-modal-hide="defaultModal"
                      type="button"
                      onClick={onPositivePress}
                      className=" w-full text-white bg-primary focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center   hover:opacity-9 hover:bg-black"
                    >
                      {positiveButtonTitle}
                    </button>
                    <button
                      data-modal-hide="defaultModal"
                      type="button"
                      onClick={onNegativePress}
                      className="w-full text-gray-500 bg-white hover:bg-gray-100 focus:outline-none  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-200 dark:text-gray-700 dark:border-gray-300 dark:focus:ring-gray-600"
                    >
                      {negativeButtonTitle}
                    </button>
                  </div>
                ) : (
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white focus:outline-none  focus:ring-offset-2  sm:text-sm"
                      onClick={onClick}
                    >
                      {buttonTitle}
                    </button>
                  </div>
                ))}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Modal.defaultProps = {
  open: false,
  hasButton: false,
  buttonType: "normal",
  buttonTitle: "Disconnect",
};

export default Modal;
