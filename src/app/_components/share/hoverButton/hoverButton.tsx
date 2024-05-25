"use client";
import React from "react";
import { Button } from "../../ui/moving-border";
import { HoverButtonProps } from ".";

export function HoverButton({ children, download }: HoverButtonProps) {
  return (
    <div className="flex justify-center text-center hover:scale-110 duration-75 ease-linear">
      <a download="louan-flamain.jpg" href={download}>
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-dark text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          {children}
        </Button>
      </a>
    </div>
  );
}
