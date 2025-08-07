import { useState } from "react";
import svgPaths from "../imports/svg-ihad3qv51t";
import imgAvatar from "figma:asset/943b6773c80d8805ffa717f47d0e7ebb9c5c80c9.png";

interface HomeProps {
  onSearch: (query: string) => void;
}

function Vendor() {
  return (
    <div className="h-4 relative w-[95.298px]" data-name="VENDOR">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 96 16"
      >
        <g id="VENDOR">
          <path d={svgPaths.p10b3700} fill="var(--fill-0, black)" id="Vector" />
          <path
            d={svgPaths.p29b07b00}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p2e574b00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p359c3a80}
            fill="var(--fill-0, black)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p2944d680}
            fill="var(--fill-0, black)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p3d237600}
            fill="var(--fill-0, black)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function Group2867() {
  return (
    <div className="[grid-area:1_/_1] h-4 ml-0 mt-0 relative w-2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 16"
      >
        <g id="Group 2867">
          <path
            d={svgPaths.p355ef100}
            fill="var(--fill-0, black)"
            id="Star 2"
          />
          <path
            d={svgPaths.p2da87700}
            fill="var(--fill-0, black)"
            id="Star 3"
          />
        </g>
      </svg>
    </div>
  );
}

function Group2868() {
  return (
    <div className="[grid-area:1_/_1] h-4 ml-2 mt-0 relative w-2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 8 16"
      >
        <g id="Group 2868">
          <path d={svgPaths.p5af4980} fill="var(--fill-0, black)" id="Star 2" />
          <path
            d={svgPaths.p31494670}
            fill="var(--fill-0, black)"
            id="Star 3"
          />
        </g>
      </svg>
    </div>
  );
}

function Group2869() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group2867 />
      <Group2868 />
    </div>
  );
}

function Group2866() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2869 />
    </div>
  );
}

function Frame2882() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-1 relative shrink-0">
      <Group2866 />
    </div>
  );
}

function Logo() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 h-[123.298px] items-start justify-start p-0 relative w-[16.057px]"
      data-name="Logo"
    >
      <div className="flex h-[95.297px] items-center justify-center relative shrink-0 w-[16px]">
        <div className="flex-none rotate-[270deg]">
          <Vendor />
        </div>
      </div>
      <Frame2882 />
    </div>
  );
}

function RightIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Right Icon">
          <path
            d={svgPaths.paee2100}
            id="Vector"
            stroke="var(--stroke-0, #1A1E27)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-7 relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative">
        <RightIcon />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Frame2871() {
  return (
    <div className="bg-[#ffffff] max-w-[1120px] relative rounded shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-neutral-200 border-solid inset-0 pointer-events-none rounded"
      />
      <div className="flex flex-row items-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between max-w-inherit p-[8px] relative w-full">
          <div className="flex h-[16.047px] items-center justify-center relative shrink-0 w-[123.297px]">
            <div className="flex-none rotate-[90deg]">
              <Logo />
            </div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

function LeftIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_8216)" id="Left Icon">
          <path
            d={svgPaths.p25a3cd00}
            id="Vector"
            stroke="var(--stroke-0, #1A1E27)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_8216">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LabelFrame() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Catalog</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="basis-0 bg-[#f5f6f9] grow min-h-px min-w-px relative rounded shrink-0 w-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-1.5 py-1 relative size-full">
          <LeftIcon />
          <LabelFrame />
        </div>
      </div>
    </div>
  );
}

function Catalog() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 h-9 items-start justify-start px-2.5 py-0 relative shrink-0 w-[300px]"
      data-name="Catalog"
    >
      <Button1 />
    </div>
  );
}

function Tabs() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[300px]"
      data-name="Tabs"
    >
      <Catalog />
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-0 relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#808083] text-[12px] text-left tracking-[1.2px]">
            <p className="block leading-[18px]">GROUPS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Left Icon">
          <path
            d={svgPaths.p13a86400}
            id="Vector"
            stroke="var(--stroke-0, #1A1E27)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">New group</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIcon1 />
      <LabelFrame1 />
    </div>
  );
}

function Frame2870() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-1 relative shrink-0 w-[300px]">
      <Button2 />
    </div>
  );
}

function LeftIcon2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Left Icon">
          <path
            d={svgPaths.p35d79f80}
            id="Vector"
            stroke="var(--stroke-0, #1A1E27)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label Frame"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">QA Team</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightIcon1() {
  return (
    <div className="relative shrink-0 size-4" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Right Icon">
          <path
            d="M4 6L8 10L12 6"
            id="Vector"
            stroke="var(--stroke-0, #67686B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-7 relative rounded shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start px-1.5 py-1 relative w-full">
          <LeftIcon2 />
          <LabelFrame2 />
          <RightIcon1 />
        </div>
      </div>
    </div>
  );
}

function Frame2876() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-1 relative shrink-0 w-[300px]">
      <Button3 />
    </div>
  );
}

function LeftIcon3() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Left Icon">
          <path
            d={svgPaths.p35d79f80}
            id="Vector"
            stroke="var(--stroke-0, #1A1E27)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Label Frame"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Staging</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightIcon2() {
  return (
    <div className="relative shrink-0 size-4" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Right Icon">
          <path
            d="M4 6L8 10L12 6"
            id="Vector"
            stroke="var(--stroke-0, #67686B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-7 relative rounded shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-start px-1.5 py-1 relative w-full">
          <LeftIcon3 />
          <LabelFrame3 />
          <RightIcon2 />
        </div>
      </div>
    </div>
  );
}

function Frame2873() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-1 relative shrink-0 w-[300px]">
      <Button4 />
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Content"
    >
      <Frame2870 />
      <Frame2876 />
      <Frame2873 />
    </div>
  );
}

function Groups() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[300px]"
      data-name="Groups"
    >
      <Label />
      <Content />
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-0 relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#808083] text-[12px] text-left tracking-[1.2px]">
            <p className="block leading-[18px]">SAVED DATABASES</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon4() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Left Icon">
          <path
            d={svgPaths.p2d1f8bc0}
            id="Vector"
            stroke="var(--stroke-0, #1A1E27)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Staging dev</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIcon4 />
      <LabelFrame4 />
    </div>
  );
}

function Frame2872() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-1 relative shrink-0 w-[300px]">
      <Button5 />
    </div>
  );
}

function LeftIcon5() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Left Icon">
          <path
            d={svgPaths.p2d1f8bc0}
            id="Vector"
            stroke="var(--stroke-0, #1A1E27)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Testing Env</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIcon5 />
      <LabelFrame5 />
    </div>
  );
}

function Frame2878() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-1 relative shrink-0 w-[300px]">
      <Button6 />
    </div>
  );
}

function LeftIcon6() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Left Icon">
          <path
            d={svgPaths.p2d1f8bc0}
            id="Vector"
            stroke="var(--stroke-0, #1A1E27)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Disaster Recovery Env
        </p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIcon6 />
      <LabelFrame6 />
    </div>
  );
}

function Frame2877() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-1 relative shrink-0 w-[300px]">
      <Button7 />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Content"
    >
      <Frame2872 />
      <Frame2878 />
      <Frame2877 />
    </div>
  );
}

function PinnedDatasets() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[300px]"
      data-name="Pinned Datasets"
    >
      <Label1 />
      <Content1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-0 relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#808083] text-[12px] text-left tracking-[1.2px]">
            <p className="block leading-[18px]">SAVED SEARCHES</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftIcon7() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_8165)" id="Left Icon">
          <path
            d={svgPaths.p24264080}
            id="Vector"
            stroke="var(--stroke-0, #1A1E27)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_8165">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LabelFrame7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">
          Currently active databases
        </p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIcon7 />
      <LabelFrame7 />
    </div>
  );
}

function Frame2874() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-1 relative shrink-0 w-[300px]">
      <Button8 />
    </div>
  );
}

function LeftIcon8() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_8165)" id="Left Icon">
          <path
            d={svgPaths.p24264080}
            id="Vector"
            stroke="var(--stroke-0, #1A1E27)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_8165">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LabelFrame8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Databases in US</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIcon8 />
      <LabelFrame8 />
    </div>
  );
}

function Frame2879() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-2.5 py-1 relative shrink-0 w-[300px]">
      <Button9 />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Content"
    >
      <Frame2874 />
      <Frame2879 />
      <Frame2874 />
    </div>
  );
}

function SavedSearches() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[300px]"
      data-name="Saved Searches"
    >
      <Label2 />
      <Content2 />
    </div>
  );
}

function ContentGroups() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-8 h-[1257px] items-start justify-start p-0 relative shrink-0"
      data-name="Content Groups"
    >
      <Tabs />
      <Groups />
      <PinnedDatasets />
      <SavedSearches />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow max-w-[1120px] min-h-px min-w-px relative rounded shrink-0 w-full"
      data-name="Content"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit overflow-clip px-0 py-4 relative size-full">
        <ContentGroups />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#e3e4ec] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function LeftNav() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-px h-full items-center justify-start p-0 relative rounded shrink-0"
      data-name="Left Nav"
    >
      <Frame2871 />
      <Content3 />
    </div>
  );
}

function LabelFrame10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182026] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">John Smith</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-px h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LabelFrame10 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-7" data-name="Avatar">
      <div className="absolute inset-0" data-name="Background">
        <div className="absolute inset-[-3.571%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 30 30"
          >
            <circle
              cx="15"
              cy="15"
              fill="var(--fill-0, #414141)"
              id="Background"
              r="14.5"
              stroke="var(--stroke-0, #D5D9E3)"
            />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0" data-name="Avatar">
        <img
          className="block max-w-none size-full"
          height="28"
          src={imgAvatar}
          width="28"
        />
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Right Side"
    >
      <Button11 />
      <Avatar />
    </div>
  );
}

function RightIcon3() {
  return (
    <div className="relative shrink-0 size-4" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Right Icon">
          <path
            d={svgPaths.p10a1c700}
            id="Vector"
            stroke="var(--stroke-0, #414141)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-7 relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative">
        <RightIcon3 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Utility() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Utility"
    >
      <Button12 />
    </div>
  );
}

function RightIcon4() {
  return (
    <div className="relative shrink-0 size-4" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_8151)" id="Right Icon">
          <path
            d={svgPaths.p4b9b700}
            id="Vector"
            stroke="var(--stroke-0, #414141)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_8151">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-7 relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative">
        <RightIcon4 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Utility1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Utility"
    >
      <Button13 />
    </div>
  );
}

function Frame2875() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Utility />
      <Utility1 />
    </div>
  );
}

function Frame2881() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-end px-0 py-2 relative shrink-0">
      <RightSide />
      <Frame2875 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 w-full">
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-2 py-0 relative w-full">
          <Frame2881 />
        </div>
      </div>
    </div>
  );
}

function Vendor1() {
  return (
    <div className="h-[25px] relative w-[148.903px]" data-name="VENDOR">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 149 25"
      >
        <g id="VENDOR">
          <path
            d={svgPaths.p1100be00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p26d50880}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p579b1c0}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p3f3df400}
            fill="var(--fill-0, black)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p250ddc00}
            fill="var(--fill-0, black)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p15657900}
            fill="var(--fill-0, black)"
            id="Vector_6"
          />
        </g>
      </svg>
    </div>
  );
}

function Group2870() {
  return (
    <div className="[grid-area:1_/_1] h-6 ml-0 mt-0 relative w-3">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="Group 2867">
          <path
            d={svgPaths.p2d225f00}
            fill="var(--fill-0, black)"
            id="Star 2"
          />
          <path
            d={svgPaths.p1de03400}
            fill="var(--fill-0, black)"
            id="Star 3"
          />
        </g>
      </svg>
    </div>
  );
}

function Group2871() {
  return (
    <div className="[grid-area:1_/_1] h-6 ml-3 mt-0 relative w-3">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 24"
      >
        <g id="Group 2868">
          <path
            d={svgPaths.p24836880}
            fill="var(--fill-0, black)"
            id="Star 2"
          />
          <path
            d={svgPaths.p30033c00}
            fill="var(--fill-0, black)"
            id="Star 3"
          />
        </g>
      </svg>
    </div>
  );
}

function Group2872() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group2870 />
      <Group2871 />
    </div>
  );
}

function Group2873() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group2872 />
    </div>
  );
}

function Frame2883() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-2.5 h-[37px] items-center justify-start left-0 px-0 py-1 top-[152.9px]">
      <Group2873 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[189px] relative w-[26px]" data-name="Logo">
      <div className="absolute flex h-[148.891px] items-center justify-center left-0 top-0 w-[25px]">
        <div className="flex-none rotate-[270deg]">
          <Vendor1 />
        </div>
      </div>
      <Frame2883 />
    </div>
  );
}

function LeftIcon13() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Left Icon">
          <path
            d={svgPaths.p32791580}
            id="Vector"
            stroke="var(--stroke-0, #999A9B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function Input({ onSearch }: { onSearch: (query: string) => void }) {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
    }
  };

  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded shrink-0"
      data-name="Input"
    >
      <form onSubmit={handleSubmit} className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-3 relative w-full">
          <LeftIcon13 />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search or ask a question..."
            className="basis-0 bg-transparent border-none outline-none font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left placeholder:text-[#67686b]"
          />
        </div>
      </form>
      <div
        aria-hidden="true"
        className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[5px] transition-colors duration-200 ${
          isFocused ? "border-[#008f8f]" : "border-[#d5d9e3]"
        }`}
      />
    </div>
  );
}

function SearchInput({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px p-0 relative shadow-[0px_1px_0px_0px_rgba(0,0,0,0.04)] shrink-0"
      data-name="Search Input"
    >
      <Input onSearch={onSearch} />
    </div>
  );
}

function LabelFrame11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-1 py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Search</p>
      </div>
    </div>
  );
}

function Button14({ onSearch }: { onSearch: (query: string) => void }) {
  const handleClick = () => {
    // Get the current input value - this is a simplified approach
    // In a more complex app, you'd lift the state up properly
    const searchInput = document.querySelector('input[placeholder="Search or ask a question..."]') as HTMLInputElement;
    if (searchInput && searchInput.value.trim()) {
      onSearch(searchInput.value.trim());
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#004141] box-border content-stretch flex flex-row gap-2 h-11 items-center justify-center px-3.5 py-3 relative rounded shrink-0 hover:bg-[#006161] transition-colors duration-200 cursor-pointer"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#00dcdc] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0"
      />
      <LabelFrame11 />
    </button>
  );
}

function Frame6({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <SearchInput onSearch={onSearch} />
      <Button14 onSearch={onSearch} />
    </div>
  );
}

function LeftIcon15() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_8129)" id="Left Icon">
          <path
            d={svgPaths.p24264080}
            id="Vector"
            stroke="var(--stroke-0, #999A9B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_8129">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LabelFrame12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Currently active databases
        </p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center overflow-clip p-[6px] relative">
        <LeftIcon15 />
        <LabelFrame12 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-neutral-200 border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function LabelFrame13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Snowflake Tables</p>
      </div>
    </div>
  );
}

function RightIcon5() {
  return (
    <div className="relative shrink-0 size-4" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Right Icon">
          <path
            d={svgPaths.p1b23e4c0}
            id="Vector"
            stroke="var(--stroke-0, #B3B3B4)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center overflow-clip p-[6px] relative">
        <LabelFrame13 />
        <RightIcon5 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-neutral-200 border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function LabelFrame14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          Databases with PII or PHI data
        </p>
      </div>
    </div>
  );
}

function RightIcon6() {
  return (
    <div className="relative shrink-0 size-4" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Right Icon">
          <path
            d={svgPaths.p1b23e4c0}
            id="Vector"
            stroke="var(--stroke-0, #B3B3B4)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center overflow-clip p-[6px] relative">
        <LabelFrame14 />
        <RightIcon6 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-neutral-200 border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Frame2855() {
  return (
    <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <Button16 />
      <Button17 />
    </div>
  );
}

function Frame2865({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame6 onSearch={onSearch} />
      <Frame2855 />
    </div>
  );
}

function Frame2869({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-[801px]">
      <Frame2865 onSearch={onSearch} />
    </div>
  );
}

function Frame2884({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="max-w-[800px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-start max-w-inherit relative size-full min-h-[600px]">
        <div className="box-border content-stretch flex flex-col gap-12 items-center justify-start max-w-inherit px-10 pt-24 pb-12 relative w-full">
          <div className="flex h-[26px] items-center justify-center relative shrink-0 w-[189px]">
            <div className="flex-none rotate-[90deg]">
              <Logo1 />
            </div>
          </div>
          <Frame2869 onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}

function Frame25({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="bg-[#f9f9f9] h-full relative rounded shrink-0 w-full">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-full items-center justify-center px-20 py-0 relative w-full">
          <Frame2884 onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}

function Frame26({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-px h-full items-start justify-start p-0 relative shrink-0 w-[1137px]">
      <Frame7 />
      <Frame25 onSearch={onSearch} />
    </div>
  );
}

export default function HomeWithSearch({ onSearch }: HomeProps) {
  return (
    <div
      className="bg-[#ebedf2] relative rounded-bl-[10px] rounded-br-[10px] size-full"
      data-name="Home"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip px-px py-0 relative size-full">
          <LeftNav />
          <Frame26 onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}