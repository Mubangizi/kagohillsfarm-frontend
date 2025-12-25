"use client";
import Header from "./Header";
import { useHeaderLight } from "../providers/HeaderLightProvider";

export default function HeaderWrapper() {
  const { isLight } = useHeaderLight();
  return <Header light={isLight} />;
}

