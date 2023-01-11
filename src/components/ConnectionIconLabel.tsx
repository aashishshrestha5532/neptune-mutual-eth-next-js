import { truncateString } from "../utils/currency-converter";

const ConnectionIconLabel = ({
  status,
  account,
}: {
  status: boolean;
  account?: string;
}) => {
  return (
    <span className="flex flex-row items-center">
      <div
        className={`h-3 w-3 ${
          status ? "bg-green-700" : "bg-red-500"
        } rounded-full`}
      />
      <label className=" ml-2 text-muted">
        {status
          ? `Connected with ${truncateString(account, 10)}`
          : "Disconnected"}
      </label>
    </span>
  );
};

export default ConnectionIconLabel;
