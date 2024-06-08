import * as React from "react"
export default function Email ({theme}) {

  
  let corPrimaria = "#2F2F2F";
  let corSecundaria = "#E5E5E5";

    if(theme==='dark') {
      let temp = corPrimaria;
      corPrimaria = corSecundaria;
      corSecundaria = temp;
    }

    return (
      <svg
      className="pt-1 pl-1 hover:scale-105 cursor-pointer ease-in-out w-28 h-10"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        stroke={corPrimaria}
        strokeLinecap="round"
        strokeWidth={10}
        d="M7.92 5.798c4.919-.705 9.912-.197 14.856-.722.633-.067 1.437-.235 1.886.333.865 1.091 1.55 2.453 1.777 3.812.376 2.257.32 4.587.295 6.866-.025 2.28-.028 4.58-.134 6.859-.063 1.337-.44 2.076-1.803 2.563-1.261.45-2.632.48-3.958.49-2.652.02-5.302-.168-7.954-.189-1.36-.01-2.71.014-4.067-.088-.945-.071-1.295-.431-1.918-1.143-.713-.815-1.337-1.599-1.61-2.663-.447-1.742-.26-3.648-.199-5.421.057-1.655.128-3.328-.006-4.981l-.002-.015c-.107-1.32-.183-2.26.502-3.477.78-1.385 2.2-2.79 3.951-2.79m.122 15.845c1.386.173 2.702.356 4.108.29a25.724 25.724 0 0 1 4.096.115c1.26.143 2.522.156 3.79.135.408-.006 1.324-.076 1.415-.485.124-.554.031-1.156-.054-1.71l-.006-.036c-.14-.912-.152-1.803-.196-2.721a42.698 42.698 0 0 1 .065-5.318c.041-.542.155-1.132-.043-1.656-.039-.102-.082-.359-.257-.31-.905.255-1.857.235-2.797.26-2.105.057-4.193.216-6.303.175-.822-.015-1.64-.076-2.463-.085-.258-.002-1.115-.187-1.355-.09-.248.101-.056 1.16-.043 1.316.068.846.142 1.682.142 2.531v4.037c0 .359-.233 1.817.18 2.006.968.444 2.61.006 3.61-.105a21.88 21.88 0 0 1 1.972-.145c.282-.006.871.07.945-.325.07-.38-.19-1.12-.306-1.4-.338-.826-.794-1.643-1.395-2.341m0 0a6.584 6.584 0 0 0-.265-.291c-.154-.158-.557-.588-.874-.39-.184.114-.486.477-.099.595.327.1.801.108 1.239.086Zm0 0c.32-.017.62-.05.827-.076.907-.115 2.067-.285 2.742-.935a.368.368 0 0 0 .077-.105m0 0c.044-.09.007-.135 0 0Zm0 0a.966.966 0 0 0 0 .045"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={3}
        d="M7.942 11.38c-.278 3.31-.551 6.64-.551 9.967m-.413.322c5.665 0 11.384-.244 17.039.232.221.019.718.048.978.068m0 0c.16.013.23.021.094.021a.205.205 0 0 1-.094-.02Zm0 0c-.087-.044-.124-.154-.15-.282-.119-.57-.073-1.23-.077-1.804a393.184 393.184 0 0 0-.108-6.324c-.027-1.2.162-2.632-.168-3.786m-15.721.643c4.277-.165 8.554-.362 12.833-.456 1.445-.031 1.704-.026 2.934-.026h.567m-16.197.321c2.28 1.59 4.606 3.092 6.895 4.662m.276 0c2.481-1.545 5.074-2.877 7.585-4.34"
      />
    </svg>
    )
}
