import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="w-full bg-[#36316F] h-25 flex justify-center items-center">
      <div class="  w-xs flex flex-row  justify-center  gap-3">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_ii_4_18)">
            <path
              d="M16.1158 16.9716C16.3083 16.8578 16.5183 16.7791 16.7458 16.7791C17.892 16.7791 18.3558 18.3016 17.3583 18.9053C16.4105 19.4873 15.3204 19.7961 14.2083 19.7978H13.9545C10.507 19.7978 7.71577 16.8753 7.95202 13.3666C8.17077 10.1728 10.9708 7.75781 14.1733 7.75781H14.217C15.2233 7.75781 16.1595 8.00281 16.9908 8.44031C18.067 9.00031 17.6645 10.6278 16.457 10.6278C16.2645 10.6278 16.0808 10.5666 15.9058 10.4791C15.3983 10.2253 14.8295 10.0678 14.2258 10.0678H13.972C11.802 10.0678 10.0608 11.9403 10.2795 14.1541C10.4633 16.0791 12.1958 17.4966 14.1383 17.4966H14.2258C14.917 17.4966 15.5645 17.3041 16.1158 16.9716Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter1_iiii_4_18)">
            <path
              d="M1.53827 13.874C1.53827 20.629 7.03327 26.124 13.7883 26.124C20.5433 26.124 26.0383 20.629 26.0383 13.874C26.0383 7.11902 20.5433 1.62402 13.7883 1.62402C7.03327 1.62402 1.53827 7.11902 1.53827 13.874ZM4.16327 13.874C4.16327 8.56277 8.47702 4.24902 13.7883 4.24902C19.0908 4.24902 23.4133 8.56277 23.4133 13.874C23.4133 19.1853 19.0995 23.499 13.7883 23.499C8.47702 23.499 4.16327 19.1765 4.16327 13.874Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter2_f_4_18)">
            <path
              d="M16.8289 9.10618C15.3589 8.48231 11.9289 8.03081 9.9724 11.2176C7.52678 15.2006 12.0453 20.5599 16.8289 17.6199"
              stroke="white"
              stroke-width="0.375"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_ii_4_18"
              x="7.93805"
              y="7.50781"
              width="10.2171"
              height="12.29"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="0.25" />
              <feGaussianBlur stdDeviation="0.1875" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.223529 0 0 0 0 0.215686 0 0 0 0 0.239216 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_4_18"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-0.25" />
              <feGaussianBlur stdDeviation="0.1875" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.223529 0 0 0 0 0.215686 0 0 0 0 0.239216 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_4_18"
                result="effect2_innerShadow_4_18"
              />
            </filter>
            <filter
              id="filter1_iiii_4_18"
              x="1.21327"
              y="1.37402"
              width="25.15"
              height="25.075"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-0.325" dy="0.325" />
              <feGaussianBlur stdDeviation="0.1875" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.486275 0 0 0 0 0.439216 0 0 0 0 0.537255 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_4_18"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-0.25" />
              <feGaussianBlur stdDeviation="0.1875" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.207843 0 0 0 0 0.113725 0 0 0 0 0.286275 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_4_18"
                result="effect2_innerShadow_4_18"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="0.25" />
              <feGaussianBlur stdDeviation="0.1875" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.298039 0 0 0 0 0.247059 0 0 0 0 0.34902 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_innerShadow_4_18"
                result="effect3_innerShadow_4_18"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="0.325" />
              <feGaussianBlur stdDeviation="0.25" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.176471 0 0 0 0 0.156863 0 0 0 0 0.196078 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect3_innerShadow_4_18"
                result="effect4_innerShadow_4_18"
              />
            </filter>
            <filter
              id="filter2_f_4_18"
              x="8.77375"
              y="8.14729"
              width="8.56766"
              height="10.8307"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="0.1625"
                result="effect1_foregroundBlur_4_18"
              />
            </filter>
          </defs>
        </svg>

        <p class="text-white text-lg">Todos lo derechos reservados.</p>
      </div>
    </footer>
  `,
  styles: ``,
})
export class Footer {}
