import React, { Children, createContext, useEffect, useState } from "react";
import { initContract } from "../contract";
import { contractAbi, contractAddress } from "../contract/contractAbi";
import Web3 from "web3";
import { ethers } from "ethers";
export const ContractContext = createContext();
export const ContractProvider = ({ children }) => {
  const [Contract, setContract] = useState();
  const [campaignData, setCampaignData] = useState();
  const initContract = async () => {
    // Check if Web3 is injected by the browser (MetaMask)
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable(); // Request user permission to access accounts
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
    // const contractAddress = contractAddress;
    const contractData = new window.web3.eth.Contract(
      contractAbi,
      contractAddress
    );
    const data = await contractData.methods.getCampaigns().call();
    setCampaignData(data);

    setContract(contractData);
    // Use the contract instance in your app logic
    // ...
  };

  useEffect(() => {
    initContract();
  }, []);
  const createCamp = async (
    owner,
    title,
    description,
    target,
    deadline,
    image
  ) => {
    var ac;
    await window.web3.eth
      .getAccounts()
      .then((e) => {
        console.log(e);
        console.log("A: " + e[0]);
        // setAccount(e[0]);
        ac = e[0];
      })
      .catch((err) => console.log(err));
    await Contract?.methods
      .createCampaign(owner, title, description, target, deadline, image)
      .send({ from: ac })
      .then((res) => {
        console.log(res, "success response");
      })
      .catch((err) => console.log(err));
    console.log("Data posted to the blockchain!");
  };
  const donateEth = async (id, donateEthValue) => {
    var ac;
    await window.web3.eth
      .getAccounts()
      .then((e) => {
        console.log(e);
        console.log("A: " + e[0]);
        // setAccount(e[0]);
        ac = e[0];
      })
      .catch((err) => console.log(err));
    await Contract?.methods
      .donateToCampaign(id, donateEthValue)
      .send({ from: ac })
      .then((res) => {
        console.log(res, "Donated successfully");
      })
      .catch((err) => console.log(err));
    console.log("eth send to campaign owner");
  };

  const getAllCampaigns = async () => {
    const campaigns = await Contract?.methods?.getCampaigns().call();
    console.log(campaigns);
    // const parsedCampaings = campaigns?.map((campaign, i) => ({
    //   owner: window.web3.utils.fromWei(campaign.owner, "ether"),
    //   title: window.web3.utils.fromWei(campaign.title, "ether"),
    //   description: window.web3.utils.fromWei(campaign.description, "ether"),
    //   target: window.web3.utils.fromWei(campaign.target, "ether"),
    //   deadline: window.web3.utils.fromWei(campaign.deadline, "ether"),
    //   amountCollected: window.web3.utils.fromWei(
    //     campaign.amountCollected,
    //     "ether"
    //   ),
    //   image: window.web3.utils.fromWei(campaign.image, "ether"),
    //   pId: i,
    // }));
    console.log(window.web3.utils.fromWei(campaigns?.owner, "ether"));
    return campaigns;
  };
  //   const getUserCampaigns = async () => {
  //     const allCampaigns = await getAllCampaigns();

  //     const filteredCampaigns = allCampaigns.filter(
  //       (campaign) => campaign.owner === address
  //     );

  //     return filteredCampaigns;
  //   };
  return (
    <ContractContext.Provider value={{ createCamp, campaignData, donateEth }}>
      {children}
    </ContractContext.Provider>
  );
};
