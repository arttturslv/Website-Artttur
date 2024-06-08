import * as React from "react"
export default function Github ({theme}) {

  let corPrimaria = "#2F2F2F";
  let corSecundaria = "#E5E5E5";

    if(theme==='dark') {
      let temp = corPrimaria;
      corPrimaria = corSecundaria;
      corSecundaria = temp;
    }

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="pt-0.5 hover:scale-105 cursor-pointer ease-in-out w-24 h-10"

    >
      <path
        stroke={corPrimaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M30.104 19.834c.804.452-3.92 8.05-4.737 8.961-1.443 1.61-2.576 3.005-4.841 3.153-3.295.217-6.664-.342-9.872-1.221-1.843-.506-2.374-.82-3.655-2.142-1.178-1.217-2.666-2.812-2.976-4.568-1.295-7.332-.724-17.154 7.738-19.763 2.267-.7 4.062-1.034 6.424-.996 2.23.035 4.478.936 6.62 1.523 3.053.837 5.33 2.263 6.668 5.274.712 1.603 1.528 3.038 1.534 4.848.006 1.76-.145 3.576-.61 5.268-.717 2.62-.737 5.852-2.563 8.046-.747.898-1.783 1.567-2.756 2.121-.998.569-2.248.407-3.241.848-.811.36-1.958.244-2.833.47-.738.189.653.287.888.243.9-.168 1.462-.34 2.279-.674 3.287-1.344 4.643-4.119 5.935-7.096 1.555-3.584 1.007-8.023-.682-11.388-.52-1.035-.907-2.628-1.819-3.375-.459-.375-.768-.917-1.262-1.247-.24-.16-1.978-1.311-1.037-1.053 2.647.725 3.41 2.97 4.877 5.035.861 1.213.537 2.699.955 3.96"
      />
      <path
        stroke={corPrimaria}
        strokeLinecap="round"
        strokeWidth={30}
        d="M17.889 18.078c-.198-.082-.128-.112-.161-.283"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M16.724 17.2c0-.603.363-.743.965-.743.8 0 1.4-.114 1.783.735.583 1.296-1.87 1.093-2.715 1.163-.926.076-2.893.109-2.195-1.42.396-.866 4.103-1.774 4.233-.47.179 1.787-2.106 2.063-3.45 1.898-.617-.075-1.421-.596-1.674-1.196-.37-.874.85-1.136 1.452-1.27.971-.219 2.907-.537 3.763.148.595.476.439 1.56-.083 2.013-.832.724-4.19 1.605-4.373-.041-.14-1.251 1.682-2.077 2.632-2.335 1.537-.418 4.282-.755 5.256.858 2.12 3.51-4.148 3.368-5.974 3.086-.678-.105-1.654-.284-1.832-1.09-.16-.73.125-1.6.76-2.013 1.232-.8 3.19-1.072 4.62-.924 1.139.118 1.329 1.272.875 2.178-.658 1.317-2.205 1.607-3.532 1.643-1.039.027-2.62.255-3.16-.892-.577-1.226.657-2.096 1.642-2.5.935-.383 3.018-1.15 3.73.017.744 1.22-.717 2.499-1.75 2.838-1.01.332-2.86.56-3.548-.495-.77-1.182.547-2.028 1.502-2.426.922-.384 2.309-.663 3.045.24.545.668.883 2.23.066 2.83-1.033.76-3.04.378-4.076-.157-1.295-.669-1.736-2.089-.28-2.838 1.65-.851 4.092-.804 5.783-.108 1.2.494 2.484 2.05 1.007 3.053-1.213.824-3.395 1.24-4.786.644-.826-.354-1.271-1.967-.594-2.657 1.197-1.219 6.993-1.086 6.131 1.568-.49 1.506-3.137 1.638-4.406 1.609-1.29-.03-2.806-.284-2.872-1.84-.129-3.036 6.468-3.135 6.445-.595-.03 3.164-8.052 4.38-8.301.859-.11-1.542 1.995-1.972 3.143-2.154 1.64-.26 3.815.323 4.572 1.964 1.323 2.866-4.7 2.953-5.842 1.048-1.601-2.668 4.734-3.326 5.8-.891 1.314 2.997-7.144 3.652-7.112.56.016-1.584 2.286-1.99 3.457-2.087 1.81-.15 4.633.323 5.256 2.401.893 2.975-4.855 1.16-5.47-.8-.927-2.954 6.706-2.37 7.583-.371 1.043 2.379-8.248 2.146-7.79.23.501-2.092 7.52-2.706 7.402-.148-.13 2.79-5.929 3.134-6.37.438-.564-3.445 8.24-2.57 6.807.486-.923 1.968-4.878 1.73-6.568 1.568-1.143-.11-5.18-.699-4.835-2.64.244-1.375 2.113-1.875 3.25-2.055 1.381-.219 4.548.04 4.762 1.824.172 1.436-.865 2.038-2.137 2.351-.999.246-2.882.502-3.367-.726-1.022-2.59 3.937-4.8 4.869-2.484.66 1.643-.734 3.145-2.228 3.582-1.049.306-3.255.63-4.11-.314-.446-.493-.28-1.357-.28-1.956 0-.473-.223-.872-.446-1.262-.367-.643-1.263 1.03-1.37 1.254-.298.63.03.95.297 1.485 1.356 2.712 5.1 2.884 7.872 2.822 1.18-.026 3.301-.787 3.301-2.22 0-1.147.446-2.247.446-3.39 0-.594.235-2.262-.669-2.262-1.539 0-3.109-.297-4.678-.297H14.43c-1.503 0-1.525 1.05-1.898 2.261-.385 1.253-1.086 4.47.182 5.314"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M23.705 15.863c0 1.04.149 2.046.149 3.086v.182"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M23.854 15.566c.973.292.743 2.71.743 3.532 0 .798-.117 1.835-.479 2.558-.417.833-1.592.722-2.343.742-1.432.04-2.862.149-4.308.149-.984 0-2.354.25-3.267-.182-.63-.298-1.111-1.429-1.304-2.079-.232-.783-.537-1.68-.627-2.492-.042-.38-.78-1.393-.297-1.634"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M12.416 17.051c-.805-.09-.944-2.495-1.221-3.119-.16-.359-.147-1.38.404-.66.584.764 1.487 1.22 2.005 1.997M22.368 15.417c.092-.828 1.756-3.564 2.748-3.564.847 0-1.114 3.611-1.114 4.159"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M14.94 15.566c-.715-.716-3.227-4.615-3.86-2.08M16.575 24.775c-.862.913-1.06 2.499-1.18 3.705-.054.538-.008 1.101-.008 1.642v-.858c0-1.384-.002-2.682.528-3.97.302-.735 1.29-1.707 2.145-1.707.431 0 .874-.031 1.304 0 .441.031.983.642 1.337.89.631.445.921 1.514 1.105 2.229.328 1.274-.181 2.376-.181 3.639 0 .595-.395-.69-.413-.817-.108-.755-.17-1.511-.297-2.261-.08-.475-.351-.756-.511-1.189-.313-.844-.413-.418-.413.248v3.334c0 .263.057.596-.074.833-.122.218-.075.5-.075.743 0 .434-.148-1.588-.148-1.915 0-1.109.076-2.22-.38-3.26-.026-.058-.528 2.245-.594 2.658a18.893 18.893 0 0 0-.206 1.758c-.012.177.082.65-.041.8-.28.341-.392-2.708-.38-2.905.057-.947.1-2.093.627-2.92.404-.636.007.52-.09.824-.282.88-.583 2.09-1.081 2.872-.29.454-.38.065-.38-.322 0-.871-.005-3.078 1.04-3.573.754-.357 1.04 1.209 1.04 1.675 0 .39-.46.542-.71.784-.423.408-.665.85-.925 1.37-.39.782-.813 1.389-1.452 1.964-.1.09-.522.115-.388.115h.726c.535 0 1.06.149 1.626.149h1.42c.295 0 .595.016.89 0 .289-.016.278-.297.595-.297.637 0-.182.445-.52.445h-1.783c-.82 0-2.5.313-3.077-.264-.051-.05-.23-.454-.256-.387-.059.146-.043.566 0 .717.03.104 1.454.245 1.625.306.836.298 2.061.074 2.938.074.534 0 .998-.297 1.518-.297"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M16.575 29.23c.384-.523.712-1.3.743-1.963.018-.393.206-.858.668-.858.511 0 2.217-1.454 1.56-1.783M16.765 23.534c-.276.03-.615.426-.801.624-.305.322-.373.605-.45 1.029-.147.804-.31 1.535-.352 2.355-.02.404-.25.81-.267 1.227-.014.376 0 .756 0 1.133 0 .378-.201 1.903.178 2.093M20.685 23.267c1.208 1.088 1.246 2.386 1.246 3.919 0 1.43-.089 2.91-.089 4.363"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M15.875 23.267c-.534.022-.885 1.157-1.197 1.559-.162.208-.218.915-.228 1.182-.015.407-.129.81-.183 1.217-.121.91-.262 1.87-.262 2.79v1.574c0 .258.178.501.178.762"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M15.608 23.534c-.377 0-.632-.148-.98-.247-.314-.09-.774-.343-1.068-.376-.605-.067-1.313-.912-1.584-1.425-.477-.908-.732-2.07-.732-3.097 0-.468-.093-1.018.109-1.445.16-.336.309-.72.425-1.069M24.603 15.163c.818 0 .576 5.135.534 5.878-.02.356-.261.798-.425 1.108-.23.435-.536.25-.955.361-.536.141-1.183.044-1.737.044-.378 0-.969-.078-1.247-.356"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M21.753 22.465c.147.753.599 1.352.732 2.118.09.518.274.995.337 1.529.067.572.089 1.12.089 1.697 0 1.522.102 3.154-.268 4.63M25.405 15.964c0-.617.267-1.226.267-1.87 0-.752.148-1.695-.089-2.405M11.6 16.855c-.175-.044-.09-.598-.09-.733 0-.333-.075-.518-.157-.83a3.6 3.6 0 0 1-.11-.98c0-.613-.075-1.247-.266-1.821M14.273 15.074c0-.777 1.747-1.079 2.315-1.247 1.025-.304 2.398-.09 3.453-.09 1.014 0 2.026.005 2.514.98"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M24.514 22.198c-.578.321-1.029.773-1.658 1.03-.526.214-1.05.662-1.637.662"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        strokeWidth={2}
        d="M24.514 22.11c-1.095 1.052-2.662 1.068-4.097 1.068M12.669 21.664c.931 1.185 2.046 1.598 3.473 2.048"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        d="M14.984 27.72c-.874-.073-1.306-.571-2.053.129-.551.517-1.415.931-2.172.584-1.053-.484-1.838-1.212-2.543-2.093-.072-.09-.184-.223-.302-.223-.09 0 .186.029.252.089a.858.858 0 0 0 .297.198c.476.19.824.81 1.133 1.187.702.858 1.38 1.376 2.558 1.376.679 0 1.3-.428 1.762-.89"
      />
      <path
        stroke={corSecundaria}
        strokeLinecap="round"
        d="M9.107 26.74c1.05 1.05 2.356 1.803 3.82 2.088.882.172 1.695-.17 2.533-.376.209-.05.505-.136.505-.376M15.041 32.295c.685 0 1.361.276 2.055.343.946.091 1.98.104 2.93.034.466-.034.796-.37 1.234-.45.12-.02.322-.11.44-.075.014.004-.52.403-.593.449-.541.346-1.12.2-1.737.25-.959.078-1.919.059-2.88.059-.347 0-1.197-.03-1.373-.381"
      />
    </svg>
  )  
}