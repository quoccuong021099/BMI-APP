import { Divider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useBMIStyle } from "../../common/styles";
import FormBMI from "../FormBMI";
import ResultBMI from "../ResultBMI";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _isNumber from "lodash/isNumber";
import _toNumber from "lodash/toNumber";
export default function index() {
  const schema = yup.object().shape({
    weight: yup.string().test("checkformatValue", "", function checkMin(value) {
      const number = +value;
      if (value === "") {
        return this.createError({
          path: this.path,
          message: "You must be enter your weight",
        });
      }
      if (!number) {
        return this.createError({
          path: this.path,
          message: "Your height must be 1 number",
        });
      }
      if (value < 10) {
        return this.createError({
          path: this.path,
          message: "Your weight greater than or equal to 10 kg",
        });
      } else {
        return true;
      }
    }),
    height: yup.string().test("checkformatValue", "", function checkMin(value) {
      const number = +value;
      if (value === "") {
        return this.createError({
          path: this.path,
          message: "You must be enter your height",
        });
      }
      if (!number) {
        return this.createError({
          path: this.path,
          message: "Your height must be 1 number",
        });
      }
      if (value < 70) {
        return this.createError({
          path: this.path,
          message: "Your height greater than or equal to 70cm",
        });
      } else {
        return true;
      }
    }),
  });
  const classes = useBMIStyle();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [bmi, setBmi] = useState(0);
  const [yourBody, setYourBody] = useState(null);
  const [result, setResult] = useState(null);
  const onSubmit = (data) => {
    setBmi(+data.weight / ((+data.height * 2) / 100));
    setYourBody(data);
    reset();
  };

  useEffect(() => {
    if (bmi < 18.5) setResult("you are skinny");
    else if (bmi >= 18.5 && bmi <= 24.9) setResult("you are beautiful");
    else if (bmi >= 25 && bmi <= 29.9) setResult("you are gain weight");
    else if (bmi >= 30 && bmi <= 34.9) setResult("you have grade 1 obesity");
    else if (bmi >= 35 && bmi <= 39.9) setResult("you have grade 2 obesity");
    else setResult("have grade 3 obesity");
  }, [bmi]);

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h3" component="h1">
        BMI Tracker
      </Typography>
      <FormBMI
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
      {bmi > 0 && (
        <>
          <Divider className={classes.divider} />
          <ResultBMI bmi={bmi} result={result} yourBody={yourBody} />
        </>
      )}
    </div>
  );
}
