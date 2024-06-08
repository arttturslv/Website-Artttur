import { useState } from "react";
import * as React from "react"

export default function Menu({theme}) {

        let corPrimaria='#2F2F2F'

        if(theme=='dark') {
            corPrimaria='#E5E5E5'
        }

        return (
            <svg

    viewBox="0 0 46 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 27H42.9399"
      stroke={corPrimaria}
      strokeWidth={6}
      strokeLinecap="round"
    />
    <path
      d="M3.06006 14.9443H42.9999"
      stroke={corPrimaria}
      strokeWidth={6}
      strokeLinecap="round"
    />
    <path
      d="M3.06006 3H42.9999"
      stroke={corPrimaria}
      strokeWidth={6}
      strokeLinecap="round"
    />
  </svg>
        )
    }