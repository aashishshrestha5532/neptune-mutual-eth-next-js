import { IWalletDetails } from "../interfaces/wallet.inteface";

interface IProps {
  fields: IWalletDetails[];
}

const WalletDetails = ({ fields }: IProps) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                  >
                    KEY
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-center text-sm font-semibold text-gray-900"
                  >
                    VALUE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fields.map((field) => (
                  <tr key={field.key}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                      {field.key}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                      {field.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;
