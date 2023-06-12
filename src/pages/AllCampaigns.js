import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FundingCard from "../components/Card";
import "../styles/allcampaign.module.css";
import { ContractContext } from "../context";
import { Grid } from "@mui/material";
const AllCampaigns = () => {
  const { campaignData } = useContext(ContractContext);
  const alternate =
    "https://www.shutterstock.com/image-photo/crowdfunding-money-business-bulb-graphic-260nw-480471112.jpg";
  return (
    <React.Fragment>
      <Navbar />
      <div className="about-container" style={{ margin: "50px" }}>
        <h1 className="heading">All campaigns</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        //   sx={{ width:"60%"}}
        >
          {campaignData?.map((camp, index) => {
            console.log(camp)
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <FundingCard
                  title={camp.title}
                  description={camp.description}
                  image={camp.image || alternate}
                  index={index}
                  amountCollected={camp.amountCollected}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default AllCampaigns;
