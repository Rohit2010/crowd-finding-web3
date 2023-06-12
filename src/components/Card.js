import React, { useContext, useState } from "react";

import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  TextField,
  CircularProgress,
} from "@mui/material";
import { ContractContext } from "../context";

export default function FundingCard({
  title,
  description,
  image,
  index,
  amountCollected,
}) {
  const [showDonateInput, setShowDonateInput] = useState(false);
  const [donate, setDonate] = React.useState(null);
  const [loader, setLoader] = useState(false);
  const { donateEth } = useContext(ContractContext);
  const donateSubmit = async () => {
    if (!showDonateInput) {
      setShowDonateInput(!showDonateInput);
    } else {
      setLoader(true);
      if (donate) {
        console.log(donate);
        await donateEth(index, donate)
          .then((res) => {
            console.log(res);
            setLoader(false);
            setShowDonateInput(!showDonateInput);
          })
          .catch((err) => {
            setLoader(false);
            console.log(err);
          });
      } if(!donate) {
        setLoader(false);
        setShowDonateInput(!showDonateInput);
      }
    }
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {/* <Typography variant="h6">
          Amount Collected : {amountCollected}
        </Typography> */}
        {showDonateInput && (
          <TextField
            fullWidth
            type="number"
            name="donate"
            placeholder="Enter ETH you want to donate"
            onChange={(e) => setDonate(e.target.value)}
          />
        )}
      </CardContent>
      <CardActions>
        {loader ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="inherit" />
          </div>
        ) : (
          <Button
            onClick={donateSubmit}
            size="small"
            style={{ color: "#606C5D", fontWeight: "900" }}
          >
            Donate
          </Button>
        )}
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
