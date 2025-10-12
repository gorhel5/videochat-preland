"use client";

import Image from "next/image";
import css from "./Header.module.css";
import SelectLang from "../SelectLang/SelectLang";
import { useLangStore } from "@/lib/stores/langStore";

export default function Header() {
  const { lang } = useLangStore();
  return (
    <header className={css.header}>
      <div className={css.titleBlock}>
        <Image src="/vid-logo.png" width={60} height={60} alt="logo" />
        {lang.value === "ru" && (
          <h1 className={css.title}>VideoChat 1v1 — Я тебя жду!</h1>
        )}
        {lang.value === "uz" && (
          <h1 className={css.title}>VideoChat 1v1 - Men sizni kutaman!</h1>
        )}
      </div>
      <div className={css.languageSelector}>
        <SelectLang />
      </div>
    </header>
  );
}
