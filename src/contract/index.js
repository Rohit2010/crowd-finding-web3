import Web3 from "web3";
import { contractAbi } from "./contractAbi";

export const initContract = async () => {
  // Check if Web3 is injected by the browser (MetaMask)
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.send('eth_requestAccounts'); // Request user permission to access accounts
  }
  // Legacy dapp browsers (e.g., Mist or older versions of MetaMask)
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  }
  // Non-dapp browsers or no injected web3 instance
  else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }

  // Get the contract instance
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  const contractData = new window.web3.eth.Contract(
    contractAbi,
    contractAddress
  );
  return contractData;
  // Use the contract instance in your app logic
  // ...
};
