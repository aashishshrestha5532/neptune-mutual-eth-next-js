import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useState } from "react";
import Image from "next/image";
import logo from "../public/neptune-mutual.svg";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
import { ChangeEvent } from "react";
import { CryptoCurrency } from "../src/enums/currency.enum";
import { cryptoConversion } from "../src/utils/currency-converter";
import Modal from "../src/components/Modal";

import { Dialog } from "@headlessui/react";

export default function Home() {
  const [fromInput, setFromInput] = useState<string>();
  const [toInput, setToInput] = useState<string>();

  const [walletOpen, setWalletOpen] = useState<boolean>(false);

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

  return (
    <>
      <Head>
        <title>Neptune Mutual - Crypto Converter</title>
        <meta name="description" content="Neptune Mutual " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center min-h-screen">
        <div className="w-full flex flex-col justify-center items-center">
          <div>
            <Image src={logo} alt="Logo" />
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="w-1/4  sm:w-full lg:w-1/2  bg-white rounded-md mt-7 p-5 sm:px-0">
              <div className="flex flex-col p-5">
                <span className="text-black font-semibold text-2xl text-center">
                  Crypto Converter
                </span>

                <div className="flex flex-col w-full items-center justify-center py-5 px-10">
                  <span className="flex flex-row justify-center items-center w-full px-3">
                    <div className="flex flex-row  items-center border-gray-300 w-full h-10 border bg-white rounded-sm">
                      <span className="border border-gray-300 border-l-0 border-t-0 border-b-0 text-black px-5 bg-neptune h-full flex items-center justify-center">
                        NEP
                      </span>

                      <input
                        placeholder="0.00"
                        type="number"
                        value={fromInput}
                        name={CryptoCurrency.NEP}
                        onChange={handleInput}
                        className="bg-transparent w-full h-full text-gray-500 pl-2 placeholder:text-gray-400"
                      />
                    </div>
                  </span>

                  <span className="my-5">
                    <ArrowsRightLeftIcon className="h-6 w-6 text-gray-700" />
                  </span>

                  <span className="flex flex-row justify-center items-center w-full px-3">
                    <div className="flex flex-row  items-center border-gray-300 w-full h-10 border bg-white rounded-sm">
                      <span className="border border-gray-300 border-l-0 border-t-0 border-b-0 text-black px-5 bg-neptune h-full flex items-center justify-center">
                        BUSD
                      </span>

                      <input
                        placeholder="0.00"
                        type={"number"}
                        name={CryptoCurrency.BUSD}
                        value={toInput?.toString()}
                        onChange={handleInput}
                        className="bg-transparent w-full h-full text-gray-500 pl-2 placeholder:text-gray-400"
                      />
                    </div>
                  </span>

                  <span className="mt-10">
                    <button className="btn" onClick={() => setWalletOpen(true)}>
                      Connect to Wallet
                    </button>
                  </span>

                  <span className="flex flex-row items-center mt-5">
                    <div className="h-3 w-3 bg-red-500 rounded-full" />
                    <label className=" ml-2 text-muted">Disconnected</label>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet connect modal */}
        <Modal open={walletOpen} setOpen={setWalletOpen}>
          <div>
            <div className="mt-3 text-center sm:mt-5">
              <Dialog.Title
                as="h3"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Payment successful
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur amet labore.
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </main>

      <footer className="border-t-2 border-gray-500 p-5 text-center w-full fixed bottom-0">
        <p className="font-bold">Neptune Mutual &#169; 2023</p>
      </footer>
    </>
  );
}
