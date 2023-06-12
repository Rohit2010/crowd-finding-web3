import * as Yup from "yup";
export const CampaignValidation = Yup.object().shape({
  owner: Yup.string().required("Campaign Owner is required"),
  title: Yup.string()
    .min(2, "Title is Too Short!")
    .max(50, "Title is Too Long!")
    .required("Title is required"),
  description: Yup.string()
    .min(10, "Description is too short")
    .required("Description is required"),
  target: Yup.number().required("Target fund is required"),
  dealine: Yup.number().required("Deadline is required"),
  image: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .required("Image url is required"),
});
