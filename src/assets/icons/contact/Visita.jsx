import * as React from "react"
export default function Visita ({theme, action}) {

  
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
      className=" pointer pt-1 pl-1 hover:scale-105 cursor-pointer ease-in-out w-10 h-10 flex "
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {/* <path
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
      /> */}


<path
      d="M6.22232 2.27499C11.964 2.27499 17.6834 2.00023 23.425 2.00023C24.4421 2.00023 25.5262 1.98791 26.5312 2.14524C26.8209 2.19059 27.1221 2.39492 27.4087 2.41237C27.6061 2.42438 28.1019 2.30569 28.2584 2.44289C28.7581 2.88094 29.2757 3.11941 29.728 3.72511C30.1008 4.22442 30.4175 5.35269 30.4175 5.98424C30.4175 7.96078 30.6682 10.006 30.6682 12.029C30.6682 14.3591 30.9189 16.6744 30.9189 19.0048C30.9189 20.7243 31.2276 22.9216 30.6403 24.5305C30.5052 24.9007 30.6518 25.3597 30.4801 25.6983C30.3648 25.9257 30.23 26.5199 30.1737 26.7973C30.0322 27.4951 29.7739 28.0363 29.1917 28.4535C27.0893 29.9599 24.4386 29.8883 22.0181 29.8883C18.8655 29.8883 15.7128 29.8883 12.5601 29.8883C10.2438 29.8883 7.68684 30.2114 5.41442 29.7586C4.81462 29.6391 4.14451 29.273 3.58969 29.2014C2.89402 29.1117 2.59668 27.8586 2.27337 27.3468C1.7026 26.4433 1.74876 25.4301 1.48637 24.4237C1.37184 23.9844 1.49736 23.4712 1.45154 23.0193C1.39547 22.4663 1.26501 21.914 1.21475 21.3632C0.827306 17.1174 1.08242 12.69 1.08242 8.39602C1.08242 7.58159 1.58651 6.18304 2.08533 5.5721C2.37592 5.21619 2.62515 4.78208 2.89322 4.40437C3.08355 4.13621 3.48251 3.80503 3.58969 3.5114C3.8111 2.90481 4.97879 2.74894 5.44228 2.6566C6.30202 2.4853 7.10676 2.27499 7.97741 2.27499"
      stroke={corPrimaria}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M12.1811 12.7081C10.8926 12.7081 10.6903 12.1904 10.8978 10.8186C10.9294 10.6096 11.7725 9.65969 11.1017 9.61621C10.1099 9.55194 8.94291 9.90105 8.94291 8.42703C8.94291 6.92012 10.9322 7.47568 11.9652 7.47568C13.5758 7.47568 15.1941 7.23784 16.7625 7.23784C18.3473 7.23784 19.926 7 21.4639 7C22.0756 7 22.6872 7 23.2989 7C24.1689 7 24.0545 7.2832 24.0545 8.18919C24.0545 9.09043 23.7188 11.1161 24.2224 11.8096C24.8443 12.6661 23.899 15.1103 24.5342 15.985C24.9698 16.5849 24.918 19.2626 24.918 20.0811C24.918 21.0447 25.3398 22.9351 24.2703 22.9351C22.5736 22.9351 20.9894 23.173 19.3051 23.173C17.9148 23.173 16.5527 23.6486 15.1554 23.6486C14.4956 23.6486 8.3797 24.4392 8.29528 23.6486C8.13218 22.1213 7.50304 20.7004 7.43176 19.1297C7.36928 17.7532 7 16.5052 7 15.0865"
      stroke={corPrimaria}
      strokeWidth={13}
      strokeLinecap="round"
    />
    <path
      d="M17.9557 15.4588C19.8224 15.4588 21.5969 15.3704 23.4445 15.5384M17.3193 17.2089C18.2937 17.2089 19.2565 16.9922 20.2272 16.926C21.1642 16.8622 22.108 16.8907 23.0467 16.8907M18.1148 18.4816C19.6531 18.4816 21.1947 18.4021 22.7285 18.4021M19.5467 19.6748H22.4899"
      stroke={corSecundaria}
      strokeLinecap="round"
    />
    <path
      d="M11.5121 16.0154C11.4467 15.8701 11.3218 15.5689 11.3338 15.343M11.3338 15.343C11.3392 15.2416 11.3721 15.1553 11.4503 15.105C11.8679 14.8366 12.1842 14.7611 12.4492 15.0075M11.3338 15.343C10.8005 15.6443 10.9041 16.4458 11.2228 16.9213M11.3338 15.343C11.362 15.327 11.392 15.3125 11.4238 15.2995C11.7184 15.1789 12.0922 15.0432 12.4492 15.0075M12.4492 15.0075C12.5333 15.0858 12.6123 15.1964 12.6877 15.3437C12.8756 15.7108 13.132 16.3388 12.996 16.7908M12.4492 15.0075C12.8317 14.9693 13.195 15.0459 13.4213 15.379C13.8627 16.029 13.5436 16.5175 12.996 16.7908M12.996 16.7908C12.9565 16.9219 12.884 17.0382 12.7672 17.1291C12.7483 17.1438 12.7286 17.1578 12.7083 17.1711M12.996 16.7908C12.6084 16.9842 12.1064 17.0699 11.6786 17.0286M12.7083 17.1711C12.387 17.3812 11.8991 17.4129 11.546 17.2227M12.7083 17.1711C13.0265 17.0628 13.3243 16.8534 13.5097 16.6474C13.9309 16.1794 14.0199 15.7479 13.5362 15.2641C13.0329 14.7609 12.1772 14.7666 11.521 14.8664C11.0727 14.9346 10.6821 15.0758 10.6415 15.5823C10.5982 16.124 10.6681 16.6883 11.2228 16.9213M12.7083 17.1711C12.4348 17.2642 12.1463 17.2826 11.901 17.16C11.8278 17.1234 11.7515 17.0791 11.6786 17.0286M11.546 17.2227C11.4487 17.1703 11.3617 17.1011 11.2912 17.0142C11.2675 16.9849 11.2446 16.9538 11.2228 16.9213M11.546 17.2227C11.5375 17.1505 11.5276 17.0783 11.5159 17.0061M11.546 17.2227C11.6068 17.7407 11.5917 18.2584 11.5917 18.7819C11.5917 19.1346 11.6462 19.484 11.6925 19.8298M11.2228 16.9213C11.2264 16.9228 11.2301 16.9243 11.2337 16.9258C11.3197 16.9608 11.4147 16.9875 11.5159 17.0061M11.6786 17.0286C11.623 17.0233 11.5686 17.0158 11.5159 17.0061M11.6786 17.0286C11.5762 16.9577 11.4803 16.8745 11.4083 16.7829M11.5159 17.0061C11.5147 16.9985 11.5134 16.9909 11.5121 16.9832C11.5007 16.9145 11.4332 16.8167 11.4083 16.7829M11.4083 16.7829L11.4061 16.78C11.3951 16.7659 11.3982 16.769 11.4083 16.7829ZM11.6925 19.8298C11.7082 19.9467 11.7229 20.0632 11.7343 20.1793M11.6925 19.8298C11.4836 19.8563 11.2773 19.8931 11.0791 19.9486C10.7275 20.047 10.523 20.2468 10.1996 20.3905C9.90795 20.5201 9.79019 20.8637 9.76653 21.1595C9.74785 21.393 9.71958 21.6962 9.8505 21.9019C9.87125 21.9345 10.1224 22.2915 10.1554 22.1759C10.1853 22.0713 10.0617 22.0005 10.098 21.9019C10.1578 21.7395 10.2261 21.581 10.3013 21.4246C10.5267 20.9558 10.6129 20.8955 11.0349 20.5673C11.1952 20.4426 11.4832 20.2502 11.7343 20.1793M11.6925 19.8298C11.9755 19.794 12.2632 19.7771 12.5418 19.7585C13.3947 19.7017 14.3295 20.6649 14.8885 21.2611C15.084 21.4696 15.3628 21.7616 15.4055 22.061C15.4379 22.2873 15.4441 22.5896 15.569 22.7769M11.7343 20.1793C11.7412 20.2499 11.7469 20.3203 11.7508 20.3905C11.7681 20.7017 11.8016 21.8664 11.9718 20.9473C11.9977 20.8074 12.2137 20.1519 11.9099 20.1519C11.8552 20.1519 11.7958 20.1619 11.7343 20.1793ZM5.22754 12.7541C5.22754 12.2532 5.37606 11.7215 5.56903 11.2132M5.56903 11.2132C5.69763 10.8744 5.84597 10.5459 5.98324 10.244C6.24378 9.67076 6.52984 9.15559 7.1897 8.97563C8.63836 8.58054 10.1047 8.5882 11.5957 8.62208C13.6358 8.66845 15.6704 8.69721 17.712 8.69721H23.1521C23.7622 8.69721 24.5428 8.56775 25.1452 8.70163C25.5634 8.79456 26.0285 8.84347 26.2279 9.25404C26.4667 9.7457 26.4667 10.3861 26.4666 10.9312L26.4666 13.3905C26.4666 14.3327 26.5462 15.3173 26.4489 16.2542C26.3664 17.0485 26.1533 17.9971 26.2898 18.782C26.36 19.1856 26.378 19.6834 26.387 20.0901C26.3959 20.4892 26.4666 20.8916 26.4666 21.2833C26.4666 21.8096 26.6071 22.5436 26.4622 23.051C26.4242 23.1839 25.825 23.3473 25.6976 23.378C24.7492 23.607 23.4743 23.378 22.5 23.378C21.0597 23.378 20.0058 23.3029 18.5 23.378C16.8322 23.2166 15.0349 23.4885 13.5 23.051C11.7664 22.9942 10.2497 23.5725 8.5 23.051C8.5 23.051 6.97854 23.2655 6.5 23.378C6.30979 23.4228 5.85099 23.1212 5.78437 22.9096C5.48976 21.9738 5.69596 20.694 5.70482 19.7189C5.71827 18.24 5.78437 16.7628 5.78437 15.2819C5.78437 14.4512 5.64014 13.651 5.62527 12.8337C5.61545 12.2934 5.58879 11.7538 5.56903 11.2132ZM5.56903 11.2132C5.55584 10.8524 5.54573 10.4912 5.54573 10.1291"
      stroke={corSecundaria}
      strokeWidth={3}
      strokeLinecap="round"
    />


    </svg>
    )
}
