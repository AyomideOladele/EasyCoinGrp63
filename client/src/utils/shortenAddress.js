// This function takes an Ethereum address string as an argument and returns a shortened
// version of the address by replacing the first 5 characters and last 4 characters with
// an ellipsis. The resulting string will be in the format "0x12345...7890".
export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
