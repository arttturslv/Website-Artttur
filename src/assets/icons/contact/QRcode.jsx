import * as React from "react"
export default function QRcode ({theme, action}) {

  let corPrimaria = "#2F2F2F";
  let corSecundaria = "#E5E5E5";

    if(theme==='dark') {
      let temp = corPrimaria;
      corPrimaria = corSecundaria;
      corSecundaria = temp;
    }

    return (
  <svg
    onClick={action}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="pointer pt-0.5 hover:scale-105 ease-in-out w-full h-full pl-1"
    viewBox="0 0 1023 1023"
    >

<defs>
      <mask id="qrmask">
        <g fill="#ffffff">
          <g transform="translate(310,62) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,62) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,62) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,62) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,62) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,62) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,62) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,93) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,93) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,93) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,93) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,93) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,93) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,93) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,93) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,124) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,124) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,124) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,124) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,124) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,124) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,155) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,155) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,155) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,155) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,155) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,155) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,186) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,186) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,186) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,186) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,186) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,186) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,186) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,186) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,217) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,217) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,217) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,217) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,217) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,217) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,217) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,217) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,248) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,248) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,248) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,248) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,248) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,248) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,248) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,279) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,279) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,279) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,279) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,279) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,279) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(124,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(155,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(186,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(248,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(868,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(899,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(930,310) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(124,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(155,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(930,341) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(62,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(124,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(155,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(248,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(279,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,372) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(93,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(155,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(186,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(279,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(899,403) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(93,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(124,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(155,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(186,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(248,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(868,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(899,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(930,434) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(93,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(124,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(155,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(186,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(279,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(930,465) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(62,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(124,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(155,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(186,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(248,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(279,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,496) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(62,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(93,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(155,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(217,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(899,527) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(124,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(186,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(217,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(248,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(279,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(868,558) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(62,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(186,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(217,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(279,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(899,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(930,589) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(62,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(124,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(186,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(248,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(868,620) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(62,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(217,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(899,651) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(62,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(248,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(279,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(868,682) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,713) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,713) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,713) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,713) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,713) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,713) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,713) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,713) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(930,713) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,744) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,744) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,744) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,744) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,744) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,744) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,744) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,744) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,744) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,744) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,775) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,775) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,775) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,775) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,775) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,775) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,775) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,775) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(899,775) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(868,806) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(868,837) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(310,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(341,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(589,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(620,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(651,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(682,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(713,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(775,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(868,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(899,868) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(372,899) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(434,899) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(465,899) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,899) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,899) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,899) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(837,899) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(899,899) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(403,930) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(496,930) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(527,930) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(558,930) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(744,930) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(806,930) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
          <g transform="translate(868,930) scale(5.1666666666667)">
            <rect width={6} height={6} />
          </g>
        </g>
      </mask>
    </defs>
    <rect width={1023} height={1023} fill="#dedede" x={0} y={0} />
    <rect
      x={0}
      y={0}
      width={1023}
      height={1023}
      mask="url(#qrmask)"
      fill={corPrimaria}
    />
    <g transform="translate(62,62)" fill={corPrimaria}>
      <g transform="scale(15.5)">
        <path d="M0,0v14h14V0H0z M12,12H2V2h10V12z" />
      </g>
    </g>
    <g transform="translate(744,62)" fill={corPrimaria}>
      <g transform="scale(15.5)">
        <path d="M0,0v14h14V0H0z M12,12H2V2h10V12z" />
      </g>
    </g>
    <g transform="translate(62,744)" fill={corPrimaria}>
      <g transform="scale(15.5)">
        <path d="M0,0v14h14V0H0z M12,12H2V2h10V12z" />
      </g>
    </g>
    <g transform="translate(124,124)" fill={corPrimaria}>
      <g transform="scale(15.5)">
        <rect width={6} height={6} />
      </g>
    </g>
    <g transform="translate(806,124)" fill={corPrimaria}>
      <g transform="scale(15.5)">
        <rect width={6} height={6} />
      </g>
    </g>
    <g transform="translate(124,806)" fill={corPrimaria}>
      <g transform="scale(15.5)">
        <rect width={6} height={6} />
      </g>
    </g>

  </svg>
)
}