import Image from "next/image";
import { useState } from "react";
import { ChangeEvent } from "react";
import { Dialog } from "@headlessui/react";
import { useWeb3React } from "@web3-react/core";
import { ArrowsRightLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

import Modal from "../components/Modal";
import TextInput from "../components/Input";
import WalletDetails from "../components/WalletDetails";
import ConnectionIconLabel from "../components/ConnectionIconLabel";

import logo from "../../public/neptune-mutual.svg";
import { CryptoCurrency } from "../enums/currency.enum";
import { IWalletDetails } from "../interfaces/wallet.inteface";
import { injectedConnector } from "../utils/injector-connector";
import { truncateString, cryptoConversion } from "../utils/currency-converter";

export default function Home() {
  const web3React = useWeb3React();
  const [fromInput, setFromInput] = useState<string>("");
  const [toInput, setToInput] = useState<string>("");

  const [walletBalance, setWalletBalance] = useState<number>(0);
  const [walletDetailsOpen, setWalletDetailsOpen] = useState<boolean>(false);
  const [walletConnectionOpen, setWalletConnectionOpen] =
    useState<boolean>(false);

  const [walletConnectionError, setWalletConnectionError] =
    useState<boolean>(false);

  const { active, account, chainId, activate, deactivate } = web3React;

  const walletDetailFields: IWalletDetails[] = [
    {
      id: 1,
      key: "Account",
      value: truncateString(account || "", 20),
    },
    {
      id: 2,
      key: "Chain ID",
      value: chainId,
    },
    {
      id: 3,
      key: "Balance",
      value: walletBalance,
    },
  ];

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const result = cryptoConversion(name, value);

    if (CryptoCurrency.NEP === name) {
      setToInput(result.toString());

      return setFromInput(value);
    }

    setFromInput(result.toString());

    return setToInput(value);
  };

  const onConnectToWallet = async (): Promise<any> => {
    try {
      await activate(injectedConnector);
    } catch (error) {
      setWalletConnectionError(true);
    } finally {
      setWalletConnectionOpen(false);
    }
  };

  const onDisconnectFromWallet = (): void => {
    deactivate();
    setWalletDetailsOpen(false);
    setWalletBalance(0);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="w-full flex flex-col justify-center items-center">
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="sm:w-full lg:w-1/2  bg-white rounded-md mt-7 p-5 sm:px-0 sm:mx-3">
            <div className="flex flex-col p-5 sm:p-0">
              <span className="text-black font-semibold text-2xl text-center">
                Crypto Converter
              </span>

              <div className="flex flex-col w-full items-center justify-center py-5 px-10">
                <span className="flex flex-row justify-center items-center w-full px-3">
                  <TextInput
                    label={CryptoCurrency.NEP}
                    placeholder="0.00"
                    type="number"
                    value={fromInput}
                    name={CryptoCurrency.NEP}
                    onChange={handleInput}
                  />
                </span>

                <span className="my-5">
                  <ArrowsRightLeftIcon className="h-6 w-6 text-gray-700" />
                </span>

                <span className="flex flex-row justify-center items-center w-full px-3">
                  <TextInput
                    label={CryptoCurrency.BUSD}
                    placeholder="0.00"
                    type="number"
                    value={toInput}
                    name={CryptoCurrency.BUSD}
                    onChange={handleInput}
                  />
                </span>

                <span className="mt-10">
                  {!active && (
                    <button
                      className="btn bg-primary border-none text-white"
                      onClick={() => setWalletConnectionOpen(true)}
                    >
                      Connect to Wallet
                    </button>
                  )}
                </span>

                <span className="mt-5">
                  <ConnectionIconLabel status={active} account={account} />
                </span>

                {active && (
                  <span className="mt-4 cursor-pointer">
                    <a
                      className="text-blue-700 font-semibold text-sm"
                      onClick={() => setWalletDetailsOpen(true)}
                    >
                      Check Wallet Details
                    </a>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet connect modal */}
      <Modal
        open={walletConnectionOpen}
        setOpen={setWalletConnectionOpen}
        hasButton={true}
        buttonType={active ? "normal" : "action"}
        onPositivePress={onConnectToWallet}
        onNegativePress={() => setWalletConnectionOpen(false)}
        positiveButtonTitle="Connect"
        negativeButtonTitle="Cancel"
      >
        <div>
          <span
            className="absolute right-5 top-5 cursor-pointer"
            onClick={() => setWalletConnectionOpen(false)}
          >
            <XMarkIcon className="h-5 w-5 text-gray-600" />
          </span>
          <div className="mt-3 text-center sm:mt-5 ">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium text-gray-900 leading-7"
            >
              Wallet Details
            </Dialog.Title>

            <span>
              <p className="text-red-400 my-4 p-2">
                Wallet not connected. Please click "Connect" button below.
              </p>
            </span>
          </div>
        </div>
      </Modal>

      {/* Wallet details modal */}
      <Modal
        open={walletDetailsOpen}
        setOpen={setWalletDetailsOpen}
        hasButton={true}
        buttonType="normal"
        onClick={onDisconnectFromWallet}
        buttonTitle="Disconnect"
      >
        <div className="min-w-[300px]">
          <span
            className="absolute right-5 top-8 cursor-pointer"
            onClick={() => setWalletDetailsOpen(false)}
          >
            <XMarkIcon className="h-5 w-5 text-gray-600" />
          </span>
          <div className="mt-3 text-center sm:mt-5 ">
            <Dialog.Title as="h2" className="text-lg font-medium text-gray-900">
              Wallet Details
            </Dialog.Title>

            <WalletDetails fields={walletDetailFields} />
          </div>
        </div>
      </Modal>

      {/* Wallet connection error modal */}
      <Modal
        open={walletConnectionError}
        setOpen={setWalletConnectionError}
        hasButton={true}
        buttonType="normal"
        onClick={() => setWalletConnectionError(false)}
        buttonTitle="Dismiss"
      >
        <div className="w-[400px]">
          <span
            className="absolute right-5 top-8 cursor-pointer"
            onClick={() => setWalletDetailsOpen(false)}
          >
            <XMarkIcon className="h-5 w-5 text-gray-600" />
          </span>
          <div className="mt-3 text-center sm:mt-5 ">
            <Dialog.Title as="h2" className="text-lg font-medium text-gray-900">
              Wallet Connection Error
            </Dialog.Title>

            <p className="text-sm text-muted my-2">
              Please try again. There was a connection error to your wallet.
            </p>
          </div>
        </div>
      </Modal>
    </main>
  );
}
