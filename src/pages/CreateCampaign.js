import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { ContractContext } from "../context";
import { useFormik } from "formik";
import CampaignForm from "../components/CampaignForm";
import { CampaignValidation } from "../schema/CampaignSchema";
import { useNavigate } from "react-router-dom";
const CreateCampaign = () => {
  const { createCamp } = useContext(ContractContext);
  const [showLoader, setLoader] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      owner: "",
      title: "",
      description: "",
      target: "",
      deadline: "",
      image: "",
    },
    // //validationSchema: CampaignValidation,
    onSubmit: async (values, { isSubmitting }) => {
      //   formik.setValues({ owner: "0x4590BAa33Dd37203bB23A61B6D06Fb853E664D2d" });
      setLoader(true);
      const { owner, title, description, target, deadline, image } = values;
    
      let deadlineTimeStamp = new Date(deadline).getTime();
      console.log(values , deadlineTimeStamp);
        await createCamp(owner, title, description, target, deadlineTimeStamp, image)
          .then((res) => {
            console.log(res);
            formik.setValues('')
            setLoader(false);
            navigate("/")
          })
          .catch((err) => {
            console.log(err);
          //   formik.setValues('')
            setLoader(false);
          });
    },
  });

  return (
    <React.Fragment>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "auto",
        }}
      >
        <CampaignForm formik={formik} loader={showLoader} />
      </div>
    </React.Fragment>
  );
};

export default CreateCampaign;
