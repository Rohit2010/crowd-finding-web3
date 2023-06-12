import React from "react";
import { useFormik, ErrorMessage } from "formik";
import {
  Button,
  TextField,
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
} from "@mui/material";
const CampaignForm = ({ formik, loader }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <form
          onSubmit={formik.handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardHeader
            title="Create Campaign"
            sx={{ textAlign: "center" }}
          ></CardHeader>
          <CardContent>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
              sx={{ width: "100%" }}
            >
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="outlined-error"
                  name="owner"
                  label="Owner"
                  type="text"
                  sx={{
                    fieldset: { borderColor: "#606C5D" },
                  }}
                  onChange={formik.handleChange}
                  value={formik.values.owner}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  error
                  fullWidth
                  required
                  id="outlined-error"
                  name="title"
                  label="Title"
                  type="text"
                  sx={{
                    fieldset: { borderColor: "#606C5D" },
                  }}
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="outlined-error"
                  name="description"
                  label="Description"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="outlined-error"
                  name="target"
                  label="Target Fund (ETH)"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.target}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="outlined-error"
                  name="deadline"
                  label="Deadline"
                  type="date"
                  placeholder="Enter futture Timestamp"
                  onChange={formik.handleChange}
                  value={formik.values.deadline}
                />
              </Grid>
              <Grid item xs={8}>
                {" "}
                <TextField
                  fullWidth
                  required
                  id="outlined-error"
                  name="image"
                  label="Image URL"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.image}
                />
              </Grid>
              <Grid item xs={8}>
                {" "}
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={{
                    backgroundColor: "#606C5D",
                    ":hover": { bgcolor: "#606C5D" },
                  }}
                  disabled={loader}
                >
                  {loader ? <CircularProgress size="small" /> : "Submit"}
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Card>
    </Box>
  );
};
export default CampaignForm;
