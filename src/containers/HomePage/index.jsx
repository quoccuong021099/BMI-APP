import React from "react";
import { useHomeStyle } from "../../common/styles";
import Header from "../../components/Header";
import BMI from "../../components/BMI";
export default function index() {
  const classes = useHomeStyle();
  return (
    <>
      <Header />
      <BMI />
    </>
  );
}
