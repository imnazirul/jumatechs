"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export const projects = [
  {
    title: "Childcare Management System",
    subTitle: "UI/UX | SaaS | Software",
    description:
      "We created a unique and distinct identity for this clothing brand with Logo, Color Palette, typography & so on",
    src: "/images/Scene _8 1.svg",
    logo: "/images/Child era text light colors-01 1.svg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "linear-gradient(249deg, #AFE3F9 0%, #FFF1EC 69.4%, #FFD1AF 100%)",
  },
  {
    title: "Accounting , Payroll , HR , Tax Management Software",
    description:
      "We created a unique and distinct identity for this clothing brand with Logo, Color Palette, typography & so on",
    logo: "/images/Child era text light colors-01 1.svg",
    subTitle: "UI/UX | SaaS | Software",
    src: "/images/05 1.svg",
    svgLogo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="204"
        height="50"
        viewBox="0 0 204 50"
        fill="none"
      >
        <path
          d="M7.95506 17.3849V13.5973C7.95506 6.08822 14.1068 0 21.6942 0H28.9186C36.5061 0 42.6578 6.08822 42.6578 13.5973V19.3014C42.6578 26.4924 36.7689 32.3204 29.5029 32.3204H2.28322C1.06873 32.3204 0.0211891 31.3787 0.000321554 30.1767C-0.020546 28.95 0.97694 27.9505 2.20813 27.9505H29.5029C34.3274 27.9505 38.238 24.0803 38.238 19.3055V13.6014C38.238 8.50863 34.0645 4.37823 28.9186 4.37823H21.6942C16.5483 4.37823 12.3748 8.50863 12.3748 13.6014V16.8851"
          fill="white"
        />
        <path
          d="M12.5215 32.3243V44.7775H32.4959C39.2445 44.7775 44.7368 39.3419 44.7368 32.663C44.7368 25.9842 39.2445 20.5486 32.4959 20.5486H2.20878C0.990115 20.5486 0.000976562 19.5697 0.000976562 18.3636C0.000976562 17.1575 0.990115 16.1786 2.20878 16.1786H32.4959C41.6818 16.1786 49.1566 23.5761 49.1566 32.6672C49.1566 41.7582 41.6818 49.1557 32.4959 49.1557H8.10178V32.3285"
          fill="white"
        />
        <path
          d="M7.95506 17.3849V13.5973C7.95506 6.08822 14.1068 0 21.6942 0H28.9186C36.5061 0 42.6578 6.08822 42.6578 13.5973V19.3014C42.6578 26.4924 36.7689 32.3204 29.5029 32.3204H2.28322C1.06873 32.3204 0.0211891 31.3787 0.000321554 30.1767C-0.020546 28.95 0.97694 27.9505 2.20813 27.9505H29.5029C34.3274 27.9505 38.238 24.0803 38.238 19.3055V13.6014C38.238 8.50863 34.0645 4.37823 28.9186 4.37823H21.6942C16.5483 4.37823 12.3748 8.50863 12.3748 13.6014V16.8851"
          fill="white"
        />
        <path
          d="M12.5215 32.3243V44.7775H32.4959C39.2445 44.7775 44.7368 39.3419 44.7368 32.663C44.7368 25.9842 39.2445 20.5486 32.4959 20.5486H2.20878C0.990115 20.5486 0.000976562 19.5697 0.000976562 18.3636C0.000976562 17.1575 0.990115 16.1786 2.20878 16.1786H32.4959C41.6818 16.1786 49.1566 23.5761 49.1566 32.6672C49.1566 41.7582 41.6818 49.1557 32.4959 49.1557H8.10178V32.3285"
          fill="white"
        />
        <path
          d="M7.95506 17.3849V13.5973C7.95506 6.08822 14.1068 0 21.6942 0H28.9186C36.5061 0 42.6578 6.08822 42.6578 13.5973V19.3014C42.6578 26.4924 36.7689 32.3204 29.5029 32.3204H2.28322C1.06873 32.3204 0.0211891 31.3787 0.000321554 30.1767C-0.020546 28.95 0.97694 27.9505 2.20813 27.9505H29.5029C34.3274 27.9505 38.238 24.0803 38.238 19.3055V13.6014C38.238 8.50863 34.0645 4.37823 28.9186 4.37823H21.6942C16.5483 4.37823 12.3748 8.50863 12.3748 13.6014V16.8851"
          fill="white"
        />
        <path
          d="M12.5215 32.3243V44.7775H32.4959C39.2445 44.7775 44.7368 39.3419 44.7368 32.663C44.7368 25.9842 39.2445 20.5486 32.4959 20.5486H2.20878C0.990115 20.5486 0.000976562 19.5697 0.000976562 18.3636C0.000976562 17.1575 0.990115 16.1786 2.20878 16.1786H32.4959C41.6818 16.1786 49.1566 23.5761 49.1566 32.6672C49.1566 41.7582 41.6818 49.1557 32.4959 49.1557H8.10178V32.3285"
          fill="white"
        />
        <path
          d="M65.6384 15.2382C68.1795 15.2382 70.3493 16.1993 72.1479 18.1258C73.9464 20.0522 74.8457 22.4077 74.8457 25.2004C74.8457 27.9931 73.9464 30.3527 72.1479 32.275C70.3493 34.1974 68.1795 35.1626 65.6384 35.1626C62.9983 35.1626 60.9605 34.2427 59.5249 32.4071V34.6346H54.6572V8.22131H59.5249V17.9938C60.9605 16.1581 62.9983 15.2382 65.6384 15.2382ZM60.9976 29.0327C61.9794 30.0268 63.2252 30.5219 64.735 30.5219C66.2448 30.5219 67.4947 30.0268 68.4889 29.0327C69.483 28.0385 69.978 26.7638 69.978 25.2045C69.978 23.6452 69.483 22.3706 68.4889 21.3764C67.4947 20.3822 66.2448 19.8872 64.735 19.8872C63.2252 19.8872 61.9794 20.3822 60.9976 21.3764C60.0158 22.3706 59.5249 23.6452 59.5249 25.2045C59.5249 26.7597 60.0158 28.0385 60.9976 29.0327Z"
          fill="white"
        />
        <path
          d="M91.3345 15.7691H96.2022V34.6375H91.3345V32.41C89.8742 34.2456 87.824 35.1656 85.1839 35.1656C82.6675 35.1656 80.5101 34.2044 78.7115 32.2779C76.913 30.3515 76.0137 27.996 76.0137 25.2033C76.0137 22.4106 76.913 20.051 78.7115 18.1287C80.5101 16.2064 82.6675 15.2411 85.1839 15.2411C87.824 15.2411 89.8742 16.161 91.3345 17.9967V15.7691ZM82.354 29.0315C83.3358 30.0256 84.5816 30.5206 86.0914 30.5206C87.6012 30.5206 88.8511 30.0256 89.8453 29.0315C90.8395 28.0373 91.3345 26.7626 91.3345 25.2033C91.3345 23.644 90.8395 22.3693 89.8453 21.3752C88.8511 20.381 87.6012 19.886 86.0914 19.886C84.5816 19.886 83.3358 20.381 82.354 21.3752C81.3722 22.3693 80.8814 23.644 80.8814 25.2033C80.8814 26.7585 81.3722 28.0373 82.354 29.0315Z"
          fill="white"
        />
        <path
          d="M99.333 34.6331V7.08948H104.201V34.6331H99.333Z"
          fill="white"
        />
        <path
          d="M121.708 15.7691H126.575V34.6375H121.708V32.41C120.247 34.2456 118.197 35.1656 115.557 35.1656C113.041 35.1656 110.883 34.2044 109.085 32.2779C107.286 30.3515 106.387 27.996 106.387 25.2033C106.387 22.4106 107.286 20.051 109.085 18.1287C110.883 16.2064 113.041 15.2411 115.557 15.2411C118.197 15.2411 120.247 16.161 121.708 17.9967V15.7691ZM112.727 29.0315C113.709 30.0256 114.955 30.5206 116.464 30.5206C117.974 30.5206 119.224 30.0256 120.218 29.0315C121.213 28.0373 121.708 26.7626 121.708 25.2033C121.708 23.644 121.213 22.3693 120.218 21.3752C119.224 20.381 117.974 19.886 116.464 19.886C114.955 19.886 113.709 20.381 112.727 21.3752C111.745 22.3693 111.254 23.644 111.254 25.2033C111.254 26.7585 111.745 28.0373 112.727 29.0315Z"
          fill="white"
        />
        <path
          d="M140.196 15.2346C142.259 15.2346 143.963 15.9276 145.308 17.3096C146.652 18.6915 147.325 20.6056 147.325 23.0435V34.6269H142.457V23.6458C142.457 22.3876 142.119 21.4265 141.438 20.7582C140.758 20.0899 139.854 19.7599 138.72 19.7599C137.462 19.7599 136.455 20.1518 135.7 20.9315C134.945 21.7111 134.57 22.8826 134.57 24.442V34.6311H129.702V15.7626H134.57V17.8747C135.758 16.1174 137.631 15.2346 140.196 15.2346Z"
          fill="white"
        />
        <path
          d="M155.913 30.0673H164.291V34.6338H149.412V31.3956L157.365 20.3361H149.779V15.7695H163.916V19.0036L155.913 30.0673Z"
          fill="white"
        />
        <path
          d="M169.023 13.5029C168.218 13.5029 167.521 13.2059 166.927 12.616C166.337 12.0261 166.04 11.329 166.04 10.5205C166.04 9.71606 166.337 9.01066 166.927 8.40839C167.517 7.80611 168.214 7.50085 169.023 7.50085C169.852 7.50085 170.565 7.80199 171.155 8.40839C171.745 9.01066 172.042 9.71606 172.042 10.5205C172.042 11.3249 171.745 12.022 171.155 12.616C170.565 13.2059 169.856 13.5029 169.023 13.5029ZM166.609 34.6319V15.7635H171.477V34.6319H166.609Z"
          fill="white"
        />
        <path
          d="M184.798 12.369C182.133 12.1669 180.796 13.2353 180.796 15.5743V15.764H184.798V20.4419H180.796V34.6283H175.928V20.4419H173.21V15.764H175.928V15.5743C175.928 12.9094 176.671 10.884 178.156 9.49792C179.641 8.116 181.852 7.5096 184.798 7.68698V12.369Z"
          fill="white"
        />
        <path
          d="M198.794 15.7695H204L197.119 34.6668C196.137 37.3605 194.838 39.32 193.217 40.541C191.596 41.7621 189.579 42.3107 187.169 42.1828V37.6534C188.477 37.6782 189.517 37.4018 190.284 36.8243C191.051 36.2468 191.662 35.3145 192.116 34.0316L184.381 15.7695H189.702L194.624 28.4502L198.794 15.7695Z"
          fill="white"
        />
      </svg>
    ),
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "linear-gradient(249deg, #8579F1 0%, #AEBDFB 62.4%, #5D62EE 100%)",
  },
  {
    title: "Blockchain & Web3 AI Project ",
    description:
      "We created a unique and distinct identity for this clothing brand with Logo, Color Palette, typography & so on",
    svgLogo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="135"
        height="34"
        viewBox="0 0 135 34"
        fill="none"
      >
        <g clip-path="url(#clip0_2632_10815)">
          <path
            d="M30.2498 9.43074V24.4799C30.2498 25.1609 29.8875 25.7931 29.299 26.1329L25.2951 28.4574V11.2029L25.2305 11.1677L29.9952 8.479C30.1595 8.76602 30.2498 9.09229 30.2498 9.43074Z"
            fill="url(#paint0_linear_2632_10815)"
          />
          <path
            d="M29.9964 8.47616V8.47887L25.2316 11.1676L20.3443 8.32995V8.32724L15.3896 5.45442H15.3869L10.4336 2.57754L14.4375 0.253017C15.0246 -0.0854399 15.7505 -0.0854399 16.3391 0.255724L20.3402 2.57618H20.3429L25.2949 5.45306L29.2987 7.77352C29.591 7.94681 29.8294 8.18779 29.9964 8.47616Z"
            fill="url(#paint1_linear_2632_10815)"
          />
          <path
            opacity="0.89"
            d="M25.2956 11.2042V28.456L20.341 25.5832V25.5805L15.3876 22.7063H15.385L10.4316 19.8308V2.57764L15.385 5.45452H15.3876L20.341 8.32734V8.33005L25.2956 11.2042Z"
            fill="url(#paint2_linear_2632_10815)"
          />
          <path
            d="M23.7207 11.9556V12.0165L21.3855 13.3379V13.3243L16.4308 10.4542V10.4447L11.4761 7.57464L6.52148 4.69505L8.87155 3.33716L23.7207 11.9556Z"
            fill="url(#paint3_linear_2632_10815)"
          />
          <path
            d="M23.722 11.9556V29.229L21.3867 30.5815V13.3378L23.722 11.9556Z"
            fill="url(#paint4_linear_2632_10815)"
          />
          <path
            opacity="0.93"
            d="M21.388 13.3257V30.5775L16.4347 27.7033V27.7006L11.4814 24.8291H11.4787L6.96982 22.2108C6.69508 22.0511 6.52539 21.7559 6.52539 21.4364V4.70044L11.4787 7.57732H11.4814L16.4347 10.4515V10.4542L21.388 13.3257Z"
            fill="url(#paint5_linear_2632_10815)"
          />
          <path
            d="M19.8155 14.2124V14.2218L14.8002 17.0527L9.90883 14.2151V14.2124L4.95821 11.3395H4.95552L4.03435 10.8034L0.289062 8.63054C0.453365 8.33947 0.680964 8.09442 0.954353 7.9103C0.957046 7.90759 0.96378 7.90353 0.970513 7.90083L1.19811 7.76815L4.95821 5.58984L9.90614 8.46266H9.90883L14.8635 11.3395L19.8155 14.2124Z"
            fill="url(#paint6_linear_2632_10815)"
          />
          <path
            d="M19.8174 14.2219V31.4697L15.9994 33.6845L15.893 33.7455C15.5846 33.9106 15.2344 34 14.8654 34V17.088L14.8008 17.0528L19.8174 14.2219Z"
            fill="url(#paint7_linear_2632_10815)"
          />
          <path
            opacity="0.9"
            d="M14.864 17.088V34C14.4977 34 14.1516 33.9093 13.8458 33.7509L13.6883 33.6602C13.6654 33.6466 13.6438 33.6344 13.6209 33.6182L9.90932 31.4683V31.4656L4.9587 28.5928H4.95601L0.950799 26.2696C0.362273 25.9271 0 25.2935 0 24.6125V9.71232C0 9.31836 0.102352 8.94741 0.289549 8.63062L4.03349 10.8035L4.95466 11.3396H4.95735L9.90932 14.2124V14.2152L14.7993 17.0528L14.864 17.088Z"
            fill="url(#paint8_linear_2632_10815)"
          />
          <path
            d="M39.6231 8.35864H36.6562V26.4363H39.6231V8.35864Z"
            fill="#0E0D15"
          />
          <path
            d="M55.1416 17.7231L45.8275 8.35864H43.1758V26.4376H46.1427V12.894L55.1389 21.9375L64.1607 12.8885V26.4376H67.1276V8.35864H64.4772L55.1416 17.7231Z"
            fill="#0E0D15"
          />
          <path
            d="M89.3789 15.0357C89.3789 11.3533 86.3986 8.35864 82.7368 8.35864H70.0586V11.3411H82.7368C84.7637 11.3411 86.4121 12.9982 86.4121 15.0357C86.4121 17.0732 84.7637 18.7303 82.7368 18.7303H70.0586V26.4363H73.0255V21.7128H82.7368C86.4 21.7141 89.3789 18.7181 89.3789 15.0357Z"
            fill="#0E0D15"
          />
          <path
            d="M101.942 9.89117L101.931 9.90065L85.4805 26.4376H89.6756L103.962 12.0762C104.5 11.6011 105.193 11.3411 105.911 11.3411H107.228V26.4376H110.195V8.35864H105.911C104.441 8.35864 103.031 8.90288 101.942 9.89117Z"
            fill="#0E0D15"
          />
          <path
            d="M135 8.35864H130.805L123.911 15.2889L117.015 8.35864H112.82L121.813 17.3981L112.82 26.4376H117.015L123.911 19.5074L130.805 26.4376H135L126.008 17.3981L135 8.35864Z"
            fill="#0E0D15"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2632_10815"
            x1="28.1718"
            y1="24.2822"
            x2="27.0661"
            y2="9.55336"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.29393e-07" stop-color="#F10DB1" />
            <stop offset="0.5065" stop-color="#7D56F0" />
            <stop offset="1" stop-color="#28C4B4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2632_10815"
            x1="14.2263"
            y1="0.35783"
            x2="26.3628"
            y2="10.5771"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.29393e-07" stop-color="#F10DB1" />
            <stop offset="0.5065" stop-color="#7D56F0" />
            <stop offset="1" stop-color="#28C4B4" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_2632_10815"
            x1="19.9816"
            y1="8.42877"
            x2="13.7147"
            y2="29.1836"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="2.49201e-07" stop-color="#FBA7F4" />
            <stop offset="1" stop-color="#B2E0FE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_2632_10815"
            x1="9.17295"
            y1="2.12512"
            x2="21.1639"
            y2="14.495"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="3.78594e-07" stop-color="#4CB4B7" />
            <stop offset="0.5065" stop-color="#47E29B" />
            <stop offset="1" stop-color="#B6D47F" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_2632_10815"
            x1="18.0495"
            y1="16.5724"
            x2="27.1226"
            y2="25.9322"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="3.78594e-07" stop-color="#4CB4B7" />
            <stop offset="0.5065" stop-color="#47E29B" />
            <stop offset="1" stop-color="#B6D47F" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_2632_10815"
            x1="16.0751"
            y1="10.5508"
            x2="9.80824"
            y2="31.3057"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9FE7C1" />
            <stop offset="0.5065" stop-color="#C8E3BC" />
            <stop offset="1" stop-color="#E4DFAF" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_2632_10815"
            x1="5.93536"
            y1="7.06416"
            x2="15.3208"
            y2="16.8937"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.29393e-07" stop-color="#F10DB1" />
            <stop offset="0.5065" stop-color="#7D56F0" />
            <stop offset="1" stop-color="#28C4B4" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_2632_10815"
            x1="20.0462"
            y1="30.8988"
            x2="13.5763"
            y2="14.8288"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="1.29393e-07" stop-color="#F10DB1" />
            <stop offset="0.5065" stop-color="#7D56F0" />
            <stop offset="1" stop-color="#28C4B4" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_2632_10815"
            x1="9.62073"
            y1="14.3708"
            x2="3.44874"
            y2="34.8114"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="2.49201e-07" stop-color="#FBC1EE" />
            <stop offset="1" stop-color="#CCE3FE" />
          </linearGradient>
          <clipPath id="clip0_2632_10815">
            <rect width="135" height="34" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    src: "/images/Screen layer 4.svg",
    subTitle: "UI/UX | Website ",
    logo: "/images/Child era text light colors-01 1.svg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "linear-gradient(267deg, #A5D683 5.69%, #58C2BA 93.23%)",
  },
];

export default function ParallaxCards() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  return (
    <main ref={container} className="">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            {...(project as any)}
            i={i}
            progress={scrollYProgress as any}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}

interface CardProps {
  title: string;
  description: string;
  subTitle: string;
  src: string;
  link: string;
  color: string;
  i: number;
  progress: number;
  range: [number, number];
  targetScale: number;
  logo: string;
  svgLogo: string;
}

const Card = ({
  title,
  description,
  src,
  svgLogo,
  link,
  logo,
  color,
  i,
  progress,
  range,
  targetScale,
  subTitle,
}: CardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const scale = useTransform(progress as any, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        className="flex flex-col  relative h-[500px] w-full rounded-[25px]  origin-top"
        style={{
          background: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div
          className={`flex h-full items-start justify-between  gap-12 ${
            i % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1 p-12 pr-0 relative top-[10%]">
            {svgLogo ? (
              <div className="mb-7">{svgLogo}</div>
            ) : (
              <Image
                src={logo}
                alt={title}
                width={200}
                height={100}
                className="w-[105px] h-auto object-contain mb-7"
              />
            )}
            <h2 className="font-semibold text-4xl mb-8">{title}</h2>
            <h2 className="font-medium text-2xl  mb-8">{subTitle || ""}</h2>
            <p className="text-lg text-[#161919]">
              <span className="text-[28px] pr-1">
                {description.split(" ").slice(0, 1).join(" ")}
              </span>
              {description.split(" ").slice(1).join(" ")}
            </p>
          </div>

          <div
            className={`relative w-3/5 h-full rounded-[25px] overflow-hidden`}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image
                fill
                src={src || "/images/Firefly-20250808011206.svg"}
                alt={title}
                className="object-contain w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
