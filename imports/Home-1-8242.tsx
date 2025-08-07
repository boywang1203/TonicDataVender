import svgPaths from "./svg-ihad3qv51t";
import imgAvatar from "figma:asset/943b6773c80d8805ffa717f47d0e7ebb9c5c80c9.png";

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

function Input() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded shrink-0"
      data-name="Input"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-3 relative w-full">
          <LeftIcon13 />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#67686b] text-[14px] text-left">
            <p className="block leading-[20px]">Search or ask a question...</p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function SearchInput() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px p-0 relative shadow-[0px_1px_0px_0px_rgba(0,0,0,0.04)] shrink-0"
      data-name="Search Input"
    >
      <Input />
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

function Button14() {
  return (
    <div
      className="bg-[#004141] box-border content-stretch flex flex-row gap-2 h-11 items-center justify-center px-3.5 py-3 relative rounded shrink-0"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#00dcdc] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0"
      />
      <LabelFrame11 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <SearchInput />
      <Button14 />
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
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function Frame2865() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame6 />
      <Frame2855 />
    </div>
  );
}

function Frame2869() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-[801px]">
      <Frame2865 />
    </div>
  );
}

function Frame2884() {
  return (
    <div className="max-w-[800px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center max-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-center justify-center max-w-inherit px-10 py-[88px] relative w-full">
          <div className="flex h-[26px] items-center justify-center relative shrink-0 w-[189px]">
            <div className="flex-none rotate-[90deg]">
              <Logo1 />
            </div>
          </div>
          <Frame2869 />
        </div>
      </div>
    </div>
  );
}

function LeftIcon18() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_1_8120)" id="Left Icon">
          <path
            d={svgPaths.p24264080}
            id="Vector"
            stroke="var(--stroke-0, #008F8F)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_8120">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LabelFrame15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182026] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Recent</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div
      className="bg-[#e2f4f6] box-border content-stretch flex flex-row gap-px h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIcon18 />
      <LabelFrame15 />
    </div>
  );
}

function LabelFrame16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182026] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Databases</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LabelFrame16 />
    </div>
  );
}

function LabelFrame17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182026] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Snapshots</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LabelFrame17 />
    </div>
  );
}

function Frame2885() {
  return (
    <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0">
      <Button18 />
      <Button19 />
      <Button20 />
    </div>
  );
}

function LeftIcon21() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="Left Icon">
          <g id="Vector">
            <path
              d={svgPaths.pa70ae00}
              stroke="var(--stroke-0, #008F8F)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33"
            />
            <path
              d={svgPaths.p20756c00}
              stroke="var(--stroke-0, #008F8F)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33"
            />
            <path
              d={svgPaths.p3b014000}
              stroke="var(--stroke-0, #008F8F)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33"
            />
            <path
              d={svgPaths.pbd92770}
              stroke="var(--stroke-0, #008F8F)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.33"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LabelFrame18() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Grid</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div
      className="bg-[#e2f4f6] box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIcon21 />
      <LabelFrame18 />
    </div>
  );
}

function LeftIcon22() {
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
            d={svgPaths.p2f024f40}
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

function LabelFrame19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">List</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIcon22 />
      <LabelFrame19 />
    </div>
  );
}

function Frame2886() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Button21 />
      <Button22 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f9f9f9] box-border content-stretch flex flex-row items-start justify-between p-0 relative rounded shrink-0 w-full">
      <Frame2885 />
      <Frame2886 />
    </div>
  );
}

function RightIcon7() {
  return (
    <div className="relative shrink-0 size-3" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Right Icon">
          <g id="Vector">
            <path
              d={svgPaths.p188b9f0}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p271343f2}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p1f96f380}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="h-[18px] relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row h-[18px] items-center justify-center overflow-clip px-[3px] py-0 relative">
        <RightIcon7 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Frame2887() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#182026] text-[14px] text-left">
        <p className="block leading-[20px]">Analytics DB 2025</p>
      </div>
      <Button23 />
    </div>
  );
}

function Frame2888() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#67686b] text-[12px] text-nowrap text-right">
        <p className="block leading-[18px] whitespace-pre">5m ago</p>
      </div>
      <div className="relative shrink-0 size-2">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #1C8D72)"
            id="Ellipse 4"
            r="4"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#67686b] text-[12px] text-left">
        <p className="block leading-[18px]">Cassandra</p>
      </div>
      <Frame2888 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2887 />
      <Frame9 />
    </div>
  );
}

function Frame2889() {
  return (
    <div className="relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#e3e4ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame2566() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full items-start justify-between leading-[0] not-italic pb-2 pt-0 px-0 relative shrink-0 text-[#000000] text-[12px] text-left">
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">150</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">70</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Group2411() {
  return (
    <div className="[grid-area:1_/_1] h-[68px] ml-0 mt-0 relative w-[195.25px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 196 68"
      >
        <g id="Group 2411">
          <rect
            height="67"
            id="Rectangle 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
            width="194.25"
            x="0.5"
            y="0.5"
          />
          <path
            d="M0 22.6671H195.25"
            id="Vector 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <path
            d="M0 45.3329H195.25"
            id="Vector 4"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <g id="Group 2438">
            <path
              d="M50.1694 0L50.1694 67.2917"
              id="Vector 5"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M98.9817 0L98.9817 67.2917"
              id="Vector 6"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M147.794 0L147.794 67.2917"
              id="Vector 23"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2455() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.694%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[8.135px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[8.135px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[8.135px]" />
    </div>
  );
}

function Group2456() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.903%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2457() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.87%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2458() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.838%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2459() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.805%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2460() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[25.44%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2461() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.409%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2462() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.376%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2463() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.343%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2464() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[45.312%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2465() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[50.278%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2466() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.245%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2467() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[60.213%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2468() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[65.18%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2469() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[70.147%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2470() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[75.115%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2471() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[80.082%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2472() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.049%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2473() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[90.018%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2474() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[94.984%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2636() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0 w-full">
      <Group2411 />
      <Group2455 />
      <Group2456 />
      <Group2457 />
      <Group2458 />
      <Group2459 />
      <Group2460 />
      <Group2461 />
      <Group2462 />
      <Group2463 />
      <Group2464 />
      <Group2465 />
      <Group2466 />
      <Group2467 />
      <Group2468 />
      <Group2469 />
      <Group2470 />
      <Group2471 />
      <Group2472 />
      <Group2473 />
      <Group2474 />
    </div>
  );
}

function Frame2560() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/12</p>
      </div>
    </div>
  );
}

function Frame2561() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/13</p>
      </div>
    </div>
  );
}

function Frame2562() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/14</p>
      </div>
    </div>
  );
}

function Frame2563() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/15</p>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Timeline"
    >
      <Frame2560 />
      <Frame2561 />
      <Frame2562 />
      <Frame2563 />
    </div>
  );
}

function ChartTimeline() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
      data-name="Chart + Timeline"
    >
      <Group2636 />
      <Timeline />
    </div>
  );
}

function NewRecharts() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-20 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="New Recharts"
    >
      <Frame2566 />
      <ChartTimeline />
    </div>
  );
}

function Frame2890() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Uptime
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              72hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2866() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Size
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              15 GB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2867() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Requests
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              78,910
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2856() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2890 />
      <Frame2866 />
      <Frame2867 />
    </div>
  );
}

function Frame2860() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2856 />
    </div>
  );
}

function Frame2891() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <NewRecharts />
          <Frame2860 />
        </div>
      </div>
    </div>
  );
}

function Frame2892() {
  return (
    <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e4ec] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Frame2889 />
      <Frame2891 />
    </div>
  );
}

function RightIcon8() {
  return (
    <div className="relative shrink-0 size-3" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Right Icon">
          <g id="Vector">
            <path
              d={svgPaths.p188b9f0}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p271343f2}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p1f96f380}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="h-[18px] relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row h-[18px] items-center justify-center overflow-clip px-[3px] py-0 relative">
        <RightIcon8 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Frame2893() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#182026] text-[14px] text-left">
        <p className="block leading-[20px]">Backup DB 2025</p>
      </div>
      <Button24 />
    </div>
  );
}

function Frame2894() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#67686b] text-[12px] text-nowrap text-right">
        <p className="block leading-[18px] whitespace-pre">10m ago</p>
      </div>
      <div className="relative shrink-0 size-2">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #1C8D72)"
            id="Ellipse 4"
            r="4"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#67686b] text-[12px] text-left">
        <p className="block leading-[18px]">SQLite</p>
      </div>
      <Frame2894 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2893 />
      <Frame11 />
    </div>
  );
}

function Frame2895() {
  return (
    <div className="relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#e3e4ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame2567() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full items-start justify-between leading-[0] not-italic pb-2 pt-0 px-0 relative shrink-0 text-[#000000] text-[12px] text-left">
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">20</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">10</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">0</p>
      </div>
    </div>
  );
}

function Group2412() {
  return (
    <div className="[grid-area:1_/_1] h-[68px] ml-0 mt-0 relative w-[201.25px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 202 68"
      >
        <g id="Group 2411">
          <rect
            height="67"
            id="Rectangle 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
            width="200.25"
            x="0.5"
            y="0.5"
          />
          <path
            d="M0 22.6671H201.25"
            id="Vector 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <path
            d="M0 45.3329H201.25"
            id="Vector 4"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <g id="Group 2438">
            <path
              d="M51.7111 0L51.7111 67.2917"
              id="Vector 5"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M102.023 0L102.023 67.2917"
              id="Vector 6"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M152.336 0L152.336 67.2917"
              id="Vector 23"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2475() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.694%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[8.385px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[8.385px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[8.385px]" />
    </div>
  );
}

function Group2476() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.903%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.997px]" />
    </div>
  );
}

function Group2477() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.87%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#770400] h-[26.276px] ml-0 mt-[23.648px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#c7130c] h-[7.007px] ml-0 mt-[16.64px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#ff756f] h-[16.641px] ml-0 mt-0 w-[7.997px]" />
    </div>
  );
}

function Group2478() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.838%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#770400] h-[35.609px] ml-0 mt-[32.048px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#c7130c] h-[9.496px] ml-0 mt-[22.552px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#ff756f] h-[22.552px] ml-0 mt-0 w-[7.997px]" />
    </div>
  );
}

function Group2479() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.805%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#770400] h-[22.916px] ml-0 mt-[20.624px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#c7130c] h-[6.111px] ml-0 mt-[14.514px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#ff756f] h-[14.513px] ml-0 mt-[0.001px] w-[7.997px]" />
    </div>
  );
}

function Group2480() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[25.44%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.997px]" />
    </div>
  );
}

function Group2481() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.409%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.997px]" />
    </div>
  );
}

function Group2482() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.376%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.997px]" />
    </div>
  );
}

function Group2483() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.343%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#770400] h-[35.609px] ml-0 mt-[32.048px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#c7130c] h-[9.496px] ml-0 mt-[22.552px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#ff756f] h-[22.552px] ml-0 mt-0 w-[7.997px]" />
    </div>
  );
}

function Group2484() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[45.312%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#854500] h-[22.916px] ml-0 mt-[20.624px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#df7604] h-[6.111px] ml-0 mt-[14.514px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#ffb769] h-[14.513px] ml-0 mt-[0.001px] w-[7.997px]" />
    </div>
  );
}

function Group2485() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[50.278%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.997px]" />
    </div>
  );
}

function Group2486() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.245%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.997px]" />
    </div>
  );
}

function Group2487() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[60.213%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.997px]" />
    </div>
  );
}

function Group2488() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[65.18%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.997px]" />
    </div>
  );
}

function Group2489() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[70.147%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.997px]" />
    </div>
  );
}

function Group2490() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[75.115%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.997px]" />
    </div>
  );
}

function Group2491() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[80.082%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.997px]" />
    </div>
  );
}

function Group2492() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.05%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.997px]" />
    </div>
  );
}

function Group2493() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[90.018%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.997px]" />
    </div>
  );
}

function Group2494() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[94.984%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.997px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.997px]" />
    </div>
  );
}

function Group2637() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0 w-full">
      <Group2412 />
      <Group2475 />
      <Group2476 />
      <Group2477 />
      <Group2478 />
      <Group2479 />
      <Group2480 />
      <Group2481 />
      <Group2482 />
      <Group2483 />
      <Group2484 />
      <Group2485 />
      <Group2486 />
      <Group2487 />
      <Group2488 />
      <Group2489 />
      <Group2490 />
      <Group2491 />
      <Group2492 />
      <Group2493 />
      <Group2494 />
    </div>
  );
}

function Frame2564() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/12</p>
      </div>
    </div>
  );
}

function Frame2565() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/13</p>
      </div>
    </div>
  );
}

function Frame2568() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/14</p>
      </div>
    </div>
  );
}

function Frame2569() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/15</p>
      </div>
    </div>
  );
}

function Timeline1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Timeline"
    >
      <Frame2564 />
      <Frame2565 />
      <Frame2568 />
      <Frame2569 />
    </div>
  );
}

function ChartTimeline1() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
      data-name="Chart + Timeline"
    >
      <Group2637 />
      <Timeline1 />
    </div>
  );
}

function NewRecharts1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-20 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="New Recharts"
    >
      <Frame2567 />
      <ChartTimeline1 />
    </div>
  );
}

function Frame2896() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Uptime
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              5hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2897() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Size
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              500 MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2898() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Requests
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              1,234
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2861() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2896 />
      <Frame2897 />
      <Frame2898 />
    </div>
  );
}

function Frame2862() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2861 />
    </div>
  );
}

function Frame2899() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <NewRecharts1 />
          <Frame2862 />
        </div>
      </div>
    </div>
  );
}

function Frame2868() {
  return (
    <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e4ec] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Frame2895 />
      <Frame2899 />
    </div>
  );
}

function RightIcon9() {
  return (
    <div className="relative shrink-0 size-3" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Right Icon">
          <g id="Vector">
            <path
              d={svgPaths.p188b9f0}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p271343f2}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p1f96f380}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[18px] relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row h-[18px] items-center justify-center overflow-clip px-[3px] py-0 relative">
        <RightIcon9 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Frame2900() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#182026] text-[14px] text-left">
        <p className="block leading-[20px]">Development DB 2025</p>
      </div>
      <Button25 />
    </div>
  );
}

function Frame2901() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#67686b] text-[12px] text-nowrap text-right">
        <p className="block leading-[18px] whitespace-pre">30m ago</p>
      </div>
      <div className="relative shrink-0 size-2">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #1C8D72)"
            id="Ellipse 4"
            r="4"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#67686b] text-[12px] text-left">
        <p className="block leading-[18px]">MongoDB</p>
      </div>
      <Frame2901 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2900 />
      <Frame13 />
    </div>
  );
}

function Frame2902() {
  return (
    <div className="relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#e3e4ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative w-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame2570() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full items-start justify-between leading-[0] not-italic pb-2 pt-0 px-0 relative shrink-0 text-[#000000] text-[12px] text-left">
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">75</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">30</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Group2413() {
  return (
    <div className="[grid-area:1_/_1] h-[68px] ml-0 mt-0 relative w-[200.25px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 201 68"
      >
        <g id="Group 2411">
          <rect
            height="67"
            id="Rectangle 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
            width="199.25"
            x="0.5"
            y="0.5"
          />
          <path
            d="M0 22.6671H200.25"
            id="Vector 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <path
            d="M0 45.3329H200.25"
            id="Vector 4"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <g id="Group 2438">
            <path
              d="M51.4541 0L51.4541 67.2917"
              id="Vector 5"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M101.516 0L101.516 67.2917"
              id="Vector 6"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M151.579 0L151.579 67.2917"
              id="Vector 23"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2495() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.694%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[8.344px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[8.344px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[8.344px]" />
    </div>
  );
}

function Group2496() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.903%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.958px]" />
    </div>
  );
}

function Group2497() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.87%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.958px]" />
    </div>
  );
}

function Group2498() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.838%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.958px]" />
    </div>
  );
}

function Group2499() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.805%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.958px]" />
    </div>
  );
}

function Group2500() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[25.44%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.958px]" />
    </div>
  );
}

function Group2501() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.409%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.958px]" />
    </div>
  );
}

function Group2502() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.376%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.958px]" />
    </div>
  );
}

function Group2503() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.343%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.958px]" />
    </div>
  );
}

function Group2504() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[45.312%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.958px]" />
    </div>
  );
}

function Group2505() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[50.278%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.958px]" />
    </div>
  );
}

function Group2506() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.245%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.958px]" />
    </div>
  );
}

function Group2507() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[60.213%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.958px]" />
    </div>
  );
}

function Group2508() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[65.18%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.958px]" />
    </div>
  );
}

function Group2509() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[70.147%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.958px]" />
    </div>
  );
}

function Group2510() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[75.115%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.958px]" />
    </div>
  );
}

function Group2511() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[80.082%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.958px]" />
    </div>
  );
}

function Group2512() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.049%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.958px]" />
    </div>
  );
}

function Group2513() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[90.018%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.958px]" />
    </div>
  );
}

function Group2514() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[94.984%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.958px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.958px]" />
    </div>
  );
}

function Group2638() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0 w-full">
      <Group2413 />
      <Group2495 />
      <Group2496 />
      <Group2497 />
      <Group2498 />
      <Group2499 />
      <Group2500 />
      <Group2501 />
      <Group2502 />
      <Group2503 />
      <Group2504 />
      <Group2505 />
      <Group2506 />
      <Group2507 />
      <Group2508 />
      <Group2509 />
      <Group2510 />
      <Group2511 />
      <Group2512 />
      <Group2513 />
      <Group2514 />
    </div>
  );
}

function Frame2571() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/12</p>
      </div>
    </div>
  );
}

function Frame2572() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/13</p>
      </div>
    </div>
  );
}

function Frame2573() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/14</p>
      </div>
    </div>
  );
}

function Frame2574() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/15</p>
      </div>
    </div>
  );
}

function Timeline2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Timeline"
    >
      <Frame2571 />
      <Frame2572 />
      <Frame2573 />
      <Frame2574 />
    </div>
  );
}

function ChartTimeline2() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
      data-name="Chart + Timeline"
    >
      <Group2638 />
      <Timeline2 />
    </div>
  );
}

function NewRecharts2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-20 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="New Recharts"
    >
      <Frame2570 />
      <ChartTimeline2 />
    </div>
  );
}

function Frame2903() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Uptime
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              12hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2904() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Size
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              2 GB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2905() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Requests
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              5,234
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2863() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2903 />
      <Frame2904 />
      <Frame2905 />
    </div>
  );
}

function Frame2864() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2863 />
    </div>
  );
}

function Frame2906() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <NewRecharts2 />
          <Frame2864 />
        </div>
      </div>
    </div>
  );
}

function Frame2907() {
  return (
    <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e4ec] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Frame2902 />
      <Frame2906 />
    </div>
  );
}

function RightIcon10() {
  return (
    <div className="relative shrink-0 size-3" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Right Icon">
          <g id="Vector">
            <path
              d={svgPaths.p188b9f0}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p271343f2}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p1f96f380}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[18px] relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row h-[18px] items-center justify-center overflow-clip px-[3px] py-0 relative">
        <RightIcon10 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Frame2908() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#182026] text-[14px] text-left">
        <p className="block leading-[20px]">Production Live DB 2025</p>
      </div>
      <Button26 />
    </div>
  );
}

function Frame2909() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#67686b] text-[12px] text-nowrap text-right">
        <p className="block leading-[18px] whitespace-pre">1h ago</p>
      </div>
      <div className="relative shrink-0 size-2">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #1C8D72)"
            id="Ellipse 4"
            r="4"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#67686b] text-[12px] text-left">
        <p className="block leading-[18px]">MySQL</p>
      </div>
      <Frame2909 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2908 />
      <Frame15 />
    </div>
  );
}

function Frame2910() {
  return (
    <div className="relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#e3e4ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame2575() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full items-start justify-between leading-[0] not-italic pb-2 pt-0 px-0 relative shrink-0 text-[#000000] text-[12px] text-left">
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">250</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">120</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">5</p>
      </div>
    </div>
  );
}

function Group2414() {
  return (
    <div className="[grid-area:1_/_1] h-[68px] ml-0 mt-0 relative w-[193.25px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 194 68"
      >
        <g id="Group 2411">
          <rect
            height="67"
            id="Rectangle 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
            width="192.25"
            x="0.5"
            y="0.5"
          />
          <path
            d="M0 22.6671H193.25"
            id="Vector 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <path
            d="M0 45.3329H193.25"
            id="Vector 4"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <g id="Group 2438">
            <path
              d="M49.6555 0L49.6555 67.2917"
              id="Vector 5"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M97.9677 0L97.9677 67.2917"
              id="Vector 6"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M146.28 0L146.28 67.2917"
              id="Vector 23"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2515() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.694%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[8.052px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[8.052px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[8.052px]" />
    </div>
  );
}

function Group2516() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.903%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2517() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.87%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2518() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.838%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2519() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.805%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2520() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[25.44%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2521() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.409%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2522() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.376%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2523() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.343%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2524() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[45.312%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2525() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[50.278%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2526() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.245%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2527() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[60.213%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2528() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[65.18%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2529() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[70.146%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2530() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[75.115%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2531() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[80.082%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2532() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.049%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2533() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[90.018%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2534() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[94.984%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2639() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0 w-full">
      <Group2414 />
      <Group2515 />
      <Group2516 />
      <Group2517 />
      <Group2518 />
      <Group2519 />
      <Group2520 />
      <Group2521 />
      <Group2522 />
      <Group2523 />
      <Group2524 />
      <Group2525 />
      <Group2526 />
      <Group2527 />
      <Group2528 />
      <Group2529 />
      <Group2530 />
      <Group2531 />
      <Group2532 />
      <Group2533 />
      <Group2534 />
    </div>
  );
}

function Frame2576() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/12</p>
      </div>
    </div>
  );
}

function Frame2577() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/13</p>
      </div>
    </div>
  );
}

function Frame2578() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/14</p>
      </div>
    </div>
  );
}

function Frame2579() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/15</p>
      </div>
    </div>
  );
}

function Timeline3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Timeline"
    >
      <Frame2576 />
      <Frame2577 />
      <Frame2578 />
      <Frame2579 />
    </div>
  );
}

function ChartTimeline3() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
      data-name="Chart + Timeline"
    >
      <Group2639 />
      <Timeline3 />
    </div>
  );
}

function NewRecharts3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-20 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="New Recharts"
    >
      <Frame2575 />
      <ChartTimeline3 />
    </div>
  );
}

function Frame2911() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Uptime
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              48hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2912() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Size
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              10 GB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2913() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Requests
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              45,678
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2914() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2911 />
      <Frame2912 />
      <Frame2913 />
    </div>
  );
}

function Frame2915() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2914 />
    </div>
  );
}

function Frame2916() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <NewRecharts3 />
          <Frame2915 />
        </div>
      </div>
    </div>
  );
}

function Frame2859() {
  return (
    <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e4ec] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Frame2910 />
      <Frame2916 />
    </div>
  );
}

function Frame2857() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2892 />
      <Frame2868 />
      <Frame2907 />
      <Frame2859 />
    </div>
  );
}

function RightIcon11() {
  return (
    <div className="relative shrink-0 size-3" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Right Icon">
          <g id="Vector">
            <path
              d={svgPaths.p188b9f0}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p271343f2}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p1f96f380}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="h-[18px] relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row h-[18px] items-center justify-center overflow-clip px-[3px] py-0 relative">
        <RightIcon11 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Frame2917() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#182026] text-[14px] text-left">
        <p className="block leading-[20px]">User Metrics 2025</p>
      </div>
      <Button27 />
    </div>
  );
}

function Frame2918() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#67686b] text-[12px] text-nowrap text-right">
        <p className="block leading-[18px] whitespace-pre">10m ago</p>
      </div>
      <div className="relative shrink-0 size-2">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #1C8D72)"
            id="Ellipse 4"
            r="4"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#67686b] text-[12px] text-left">
        <p className="block leading-[18px]">PostgreSQL</p>
      </div>
      <Frame2918 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2917 />
      <Frame17 />
    </div>
  );
}

function Frame2919() {
  return (
    <div className="relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#e3e4ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame2580() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full items-start justify-between leading-[0] not-italic pb-2 pt-0 px-0 relative shrink-0 text-[#000000] text-[12px] text-left">
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">200</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">85</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">4</p>
      </div>
    </div>
  );
}

function Group2415() {
  return (
    <div className="[grid-area:1_/_1] h-[68px] ml-0 mt-0 relative w-[193.25px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 194 68"
      >
        <g id="Group 2411">
          <rect
            height="67"
            id="Rectangle 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
            width="192.25"
            x="0.5"
            y="0.5"
          />
          <path
            d="M0 22.6671H193.25"
            id="Vector 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <path
            d="M0 45.3329H193.25"
            id="Vector 4"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <g id="Group 2438">
            <path
              d="M49.6555 0L49.6555 67.2917"
              id="Vector 5"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M97.9677 0L97.9677 67.2917"
              id="Vector 6"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M146.28 0L146.28 67.2917"
              id="Vector 23"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2535() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.694%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[8.052px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[8.052px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[8.052px]" />
    </div>
  );
}

function Group2536() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.903%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2537() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.87%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2538() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.838%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2539() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.805%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2540() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[25.44%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2541() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.409%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2542() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.376%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2543() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.343%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2544() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[45.312%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2545() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[50.278%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2546() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.245%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2547() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[60.213%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2548() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[65.18%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2549() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[70.147%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2550() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[75.115%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2551() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[80.082%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2552() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.049%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2553() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[90.018%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2554() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[94.984%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2640() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0 w-full">
      <Group2415 />
      <Group2535 />
      <Group2536 />
      <Group2537 />
      <Group2538 />
      <Group2539 />
      <Group2540 />
      <Group2541 />
      <Group2542 />
      <Group2543 />
      <Group2544 />
      <Group2545 />
      <Group2546 />
      <Group2547 />
      <Group2548 />
      <Group2549 />
      <Group2550 />
      <Group2551 />
      <Group2552 />
      <Group2553 />
      <Group2554 />
    </div>
  );
}

function Frame2581() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/12</p>
      </div>
    </div>
  );
}

function Frame2582() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/13</p>
      </div>
    </div>
  );
}

function Frame2583() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/14</p>
      </div>
    </div>
  );
}

function Frame2584() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/15</p>
      </div>
    </div>
  );
}

function Timeline4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Timeline"
    >
      <Frame2581 />
      <Frame2582 />
      <Frame2583 />
      <Frame2584 />
    </div>
  );
}

function ChartTimeline4() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
      data-name="Chart + Timeline"
    >
      <Group2640 />
      <Timeline4 />
    </div>
  );
}

function NewRecharts4() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-20 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="New Recharts"
    >
      <Frame2580 />
      <ChartTimeline4 />
    </div>
  );
}

function Frame2920() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Uptime
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              120hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2921() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Size
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              30 GB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2922() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Requests
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              102,450
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2923() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2920 />
      <Frame2921 />
      <Frame2922 />
    </div>
  );
}

function Frame2924() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2923 />
    </div>
  );
}

function Frame2925() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <NewRecharts4 />
          <Frame2924 />
        </div>
      </div>
    </div>
  );
}

function Frame2926() {
  return (
    <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e4ec] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Frame2919 />
      <Frame2925 />
    </div>
  );
}

function RightIcon12() {
  return (
    <div className="relative shrink-0 size-3" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Right Icon">
          <g id="Vector">
            <path
              d={svgPaths.p188b9f0}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p271343f2}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p1f96f380}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="h-[18px] relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row h-[18px] items-center justify-center overflow-clip px-[3px] py-0 relative">
        <RightIcon12 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Frame2927() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#182026] text-[14px] text-left">
        <p className="block leading-[20px]">Sales Data 2025</p>
      </div>
      <Button28 />
    </div>
  );
}

function Frame2928() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#67686b] text-[12px] text-nowrap text-right">
        <p className="block leading-[18px] whitespace-pre">15m ago</p>
      </div>
      <div className="relative shrink-0 size-2">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #1C8D72)"
            id="Ellipse 4"
            r="4"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#67686b] text-[12px] text-left">
        <p className="block leading-[18px]">MySQL</p>
      </div>
      <Frame2928 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2927 />
      <Frame19 />
    </div>
  );
}

function Frame2929() {
  return (
    <div className="relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#e3e4ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative w-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame2585() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full items-start justify-between leading-[0] not-italic pb-2 pt-0 px-0 relative shrink-0 text-[#000000] text-[12px] text-left">
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">300</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">90</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">5</p>
      </div>
    </div>
  );
}

function Group2416() {
  return (
    <div className="[grid-area:1_/_1] h-[68px] ml-0 mt-0 relative w-[193.25px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 194 68"
      >
        <g id="Group 2411">
          <rect
            height="67"
            id="Rectangle 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
            width="192.25"
            x="0.5"
            y="0.5"
          />
          <path
            d="M0 22.6671H193.25"
            id="Vector 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <path
            d="M0 45.3329H193.25"
            id="Vector 4"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <g id="Group 2438">
            <path
              d="M49.6555 0L49.6555 67.2917"
              id="Vector 5"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M97.9678 0L97.9678 67.2917"
              id="Vector 6"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M146.28 0L146.28 67.2917"
              id="Vector 23"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2555() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.694%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[8.052px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[8.052px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[8.052px]" />
    </div>
  );
}

function Group2556() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.903%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2557() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.87%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#770400] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#c7130c] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#ff756f] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2558() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.838%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#770400] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#c7130c] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#ff756f] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2559() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.805%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#770400] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#c7130c] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#ff756f] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2560() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[25.44%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2561() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.409%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2562() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.376%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2563() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.343%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#770400] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#c7130c] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#ff756f] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2564() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[45.312%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#854500] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#df7604] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#ffb769] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2565() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[50.278%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2566() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.245%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2567() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[60.213%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2568() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[65.18%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2569() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[70.147%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2570() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[75.115%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2571() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[80.082%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2572() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.05%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2573() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[90.018%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2574() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[94.984%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2641() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0 w-full">
      <Group2416 />
      <Group2555 />
      <Group2556 />
      <Group2557 />
      <Group2558 />
      <Group2559 />
      <Group2560 />
      <Group2561 />
      <Group2562 />
      <Group2563 />
      <Group2564 />
      <Group2565 />
      <Group2566 />
      <Group2567 />
      <Group2568 />
      <Group2569 />
      <Group2570 />
      <Group2571 />
      <Group2572 />
      <Group2573 />
      <Group2574 />
    </div>
  );
}

function Frame2586() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/12</p>
      </div>
    </div>
  );
}

function Frame2587() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/13</p>
      </div>
    </div>
  );
}

function Frame2588() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/14</p>
      </div>
    </div>
  );
}

function Frame2589() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/15</p>
      </div>
    </div>
  );
}

function Timeline5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Timeline"
    >
      <Frame2586 />
      <Frame2587 />
      <Frame2588 />
      <Frame2589 />
    </div>
  );
}

function ChartTimeline5() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
      data-name="Chart + Timeline"
    >
      <Group2641 />
      <Timeline5 />
    </div>
  );
}

function NewRecharts5() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-20 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="New Recharts"
    >
      <Frame2585 />
      <ChartTimeline5 />
    </div>
  );
}

function Frame2930() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Uptime
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              140hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2931() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Size
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              50 GB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2932() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Requests
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              150,200
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2933() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2930 />
      <Frame2931 />
      <Frame2932 />
    </div>
  );
}

function Frame2934() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2933 />
    </div>
  );
}

function Frame2935() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <NewRecharts5 />
          <Frame2934 />
        </div>
      </div>
    </div>
  );
}

function Frame2936() {
  return (
    <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e4ec] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Frame2929 />
      <Frame2935 />
    </div>
  );
}

function RightIcon13() {
  return (
    <div className="relative shrink-0 size-3" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Right Icon">
          <g id="Vector">
            <path
              d={svgPaths.p188b9f0}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p271343f2}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p1f96f380}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="h-[18px] relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row h-[18px] items-center justify-center overflow-clip px-[3px] py-0 relative">
        <RightIcon13 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Frame2937() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#182026] text-[14px] text-left">
        <p className="block leading-[20px]">Inventory Stats 2025</p>
      </div>
      <Button29 />
    </div>
  );
}

function Frame2938() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#67686b] text-[12px] text-nowrap text-right">
        <p className="block leading-[18px] whitespace-pre">20m ago</p>
      </div>
      <div className="relative shrink-0 size-2">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #1C8D72)"
            id="Ellipse 4"
            r="4"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#67686b] text-[12px] text-left">
        <p className="block leading-[18px]">MongoDB</p>
      </div>
      <Frame2938 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2937 />
      <Frame21 />
    </div>
  );
}

function Frame2939() {
  return (
    <div className="relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#e3e4ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative w-full">
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame2590() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full items-start justify-between leading-[0] not-italic pb-2 pt-0 px-0 relative shrink-0 text-[#000000] text-[12px] text-left">
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">250</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">75</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">6</p>
      </div>
    </div>
  );
}

function Group2417() {
  return (
    <div className="[grid-area:1_/_1] h-[68px] ml-0 mt-0 relative w-[193.25px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 194 68"
      >
        <g id="Group 2411">
          <rect
            height="67"
            id="Rectangle 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
            width="192.25"
            x="0.5"
            y="0.5"
          />
          <path
            d="M0 22.6671H193.25"
            id="Vector 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <path
            d="M0 45.3329H193.25"
            id="Vector 4"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <g id="Group 2438">
            <path
              d="M49.6555 0L49.6555 67.2917"
              id="Vector 5"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M97.9677 0L97.9677 67.2917"
              id="Vector 6"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M146.28 0L146.28 67.2917"
              id="Vector 23"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2575() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.694%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[8.052px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[8.052px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[8.052px]" />
    </div>
  );
}

function Group2576() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.903%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2577() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.87%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2578() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.838%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2579() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.805%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2580() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[25.44%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2581() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.409%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2582() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.376%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2583() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.343%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2584() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[45.312%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2585() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[50.278%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2586() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.245%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2587() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[60.213%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2588() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[65.18%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2589() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[70.146%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2590() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[75.115%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2591() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[80.082%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2592() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.049%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2593() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[90.018%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.68px]" />
    </div>
  );
}

function Group2594() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[94.984%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.68px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.68px]" />
    </div>
  );
}

function Group2642() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0 w-full">
      <Group2417 />
      <Group2575 />
      <Group2576 />
      <Group2577 />
      <Group2578 />
      <Group2579 />
      <Group2580 />
      <Group2581 />
      <Group2582 />
      <Group2583 />
      <Group2584 />
      <Group2585 />
      <Group2586 />
      <Group2587 />
      <Group2588 />
      <Group2589 />
      <Group2590 />
      <Group2591 />
      <Group2592 />
      <Group2593 />
      <Group2594 />
    </div>
  );
}

function Frame2591() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/12</p>
      </div>
    </div>
  );
}

function Frame2592() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/13</p>
      </div>
    </div>
  );
}

function Frame2593() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/14</p>
      </div>
    </div>
  );
}

function Frame2594() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/15</p>
      </div>
    </div>
  );
}

function Timeline6() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Timeline"
    >
      <Frame2591 />
      <Frame2592 />
      <Frame2593 />
      <Frame2594 />
    </div>
  );
}

function ChartTimeline6() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
      data-name="Chart + Timeline"
    >
      <Group2642 />
      <Timeline6 />
    </div>
  );
}

function NewRecharts6() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-20 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="New Recharts"
    >
      <Frame2590 />
      <ChartTimeline6 />
    </div>
  );
}

function Frame2940() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Uptime
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              100hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2941() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Size
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              40 GB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2942() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Requests
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              90,300
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2943() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2940 />
      <Frame2941 />
      <Frame2942 />
    </div>
  );
}

function Frame2944() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2943 />
    </div>
  );
}

function Frame2945() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <NewRecharts6 />
          <Frame2944 />
        </div>
      </div>
    </div>
  );
}

function Frame2946() {
  return (
    <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e4ec] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Frame2939 />
      <Frame2945 />
    </div>
  );
}

function RightIcon14() {
  return (
    <div className="relative shrink-0 size-3" data-name="Right Icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Right Icon">
          <g id="Vector">
            <path
              d={svgPaths.p188b9f0}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p271343f2}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p1f96f380}
              stroke="var(--stroke-0, #1A1E27)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button30() {
  return (
    <div className="h-[18px] relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row h-[18px] items-center justify-center overflow-clip px-[3px] py-0 relative">
        <RightIcon14 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Frame2947() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#182026] text-[14px] text-left">
        <p className="block leading-[20px]">Marketing Insights 2025</p>
      </div>
      <Button30 />
    </div>
  );
}

function Frame2948() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#67686b] text-[12px] text-nowrap text-right">
        <p className="block leading-[18px] whitespace-pre">25m ago</p>
      </div>
      <div className="relative shrink-0 size-2">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 8 8"
        >
          <circle
            cx="4"
            cy="4"
            fill="var(--fill-0, #1C8D72)"
            id="Ellipse 4"
            r="4"
          />
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#67686b] text-[12px] text-left">
        <p className="block leading-[18px]">SQLite</p>
      </div>
      <Frame2948 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <Frame2947 />
      <Frame23 />
    </div>
  );
}

function Frame2949() {
  return (
    <div className="relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#e3e4ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative w-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame2595() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full items-start justify-between leading-[0] not-italic pb-2 pt-0 px-0 relative shrink-0 text-[#000000] text-[12px] text-left">
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">180</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">60</p>
      </div>
      <div className="h-[15.174px] relative shrink-0 w-full">
        <p className="block leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Group2418() {
  return (
    <div className="[grid-area:1_/_1] h-[68px] ml-0 mt-0 relative w-[195.25px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 196 68"
      >
        <g id="Group 2411">
          <rect
            height="67"
            id="Rectangle 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
            width="194.25"
            x="0.5"
            y="0.5"
          />
          <path
            d="M0 22.6671H195.25"
            id="Vector 2"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <path
            d="M0 45.3329H195.25"
            id="Vector 4"
            stroke="var(--stroke-0, #F1F1F1)"
            strokeDasharray="2 2"
          />
          <g id="Group 2438">
            <path
              d="M50.1694 0L50.1694 67.2917"
              id="Vector 5"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M98.9816 0L98.9816 67.2917"
              id="Vector 6"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
            <path
              d="M147.794 0L147.794 67.2917"
              id="Vector 23"
              stroke="var(--stroke-0, #F1F1F1)"
              strokeDasharray="2 2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2595() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.694%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[8.135px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[8.135px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[8.135px]" />
    </div>
  );
}

function Group2596() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[5.903%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2597() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[10.87%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2598() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[15.838%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2599() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[20.805%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2600() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[25.44%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2601() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[30.409%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2602() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[35.376%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2603() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[40.343%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2604() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[45.312%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2605() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[50.278%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2606() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[55.245%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2607() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[60.213%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2608() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[65.18%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2609() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[70.147%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2610() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[75.115%] mt-[62.596%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[13.209px] ml-0 mt-[11.889px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[3.522px] ml-0 mt-[8.367px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[8.365px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2611() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[80.082%] mt-[42.775%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[20.302px] ml-0 mt-[18.271px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[5.414px] ml-0 mt-[12.857px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[12.858px] ml-0 mt-[-0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2612() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[85.049%] mt-[26.085%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[26.276px] ml-0 mt-[23.648px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[7.007px] ml-0 mt-[16.64px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[16.641px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2613() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[90.018%] mt-[0.006%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[35.609px] ml-0 mt-[32.048px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[9.496px] ml-0 mt-[22.552px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[22.552px] ml-0 mt-0 w-[7.759px]" />
    </div>
  );
}

function Group2614() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[94.984%] mt-[35.473%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#42a48d] h-[22.916px] ml-0 mt-[20.624px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#71bcaa] h-[6.111px] ml-0 mt-[14.514px] w-[7.759px]" />
      <div className="[grid-area:1_/_1] bg-[#a9d3c9] h-[14.513px] ml-0 mt-[0.001px] w-[7.759px]" />
    </div>
  );
}

function Group2643() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0 w-full">
      <Group2418 />
      <Group2595 />
      <Group2596 />
      <Group2597 />
      <Group2598 />
      <Group2599 />
      <Group2600 />
      <Group2601 />
      <Group2602 />
      <Group2603 />
      <Group2604 />
      <Group2605 />
      <Group2606 />
      <Group2607 />
      <Group2608 />
      <Group2609 />
      <Group2610 />
      <Group2611 />
      <Group2612 />
      <Group2613 />
      <Group2614 />
    </div>
  );
}

function Frame2596() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/12</p>
      </div>
    </div>
  );
}

function Frame2597() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/13</p>
      </div>
    </div>
  );
}

function Frame2598() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/14</p>
      </div>
    </div>
  );
}

function Frame2599() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#000000] text-[10px] text-center">
        <p className="block leading-[normal]">3/15</p>
      </div>
    </div>
  );
}

function Timeline7() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Timeline"
    >
      <Frame2596 />
      <Frame2597 />
      <Frame2598 />
      <Frame2599 />
    </div>
  );
}

function ChartTimeline7() {
  return (
    <div
      className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0"
      data-name="Chart + Timeline"
    >
      <Group2643 />
      <Timeline7 />
    </div>
  );
}

function NewRecharts7() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 h-20 items-center justify-start overflow-clip p-0 relative shrink-0 w-full"
      data-name="New Recharts"
    >
      <Frame2595 />
      <ChartTimeline7 />
    </div>
  );
}

function Frame2950() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Uptime
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              60hrs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2951() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Size
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              20 GB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2952() {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#ebedf2] border-solid inset-0 pointer-events-none rounded"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[8px] relative text-[12px] text-left text-nowrap w-full">
          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#67686b]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              Requests
            </p>
          </div>
          <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#1a1e27]">
            <p className="block leading-[18px] text-nowrap whitespace-pre">
              65,450
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2953() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2950 />
      <Frame2951 />
      <Frame2952 />
    </div>
  );
}

function Frame2954() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2953 />
    </div>
  );
}

function Frame2955() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[16px] relative w-full">
          <NewRecharts7 />
          <Frame2954 />
        </div>
      </div>
    </div>
  );
}

function Frame2956() {
  return (
    <div className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative rounded shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e4ec] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
      <Frame2949 />
      <Frame2955 />
    </div>
  );
}

function Frame2858() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame2926 />
      <Frame2936 />
      <Frame2946 />
      <Frame2956 />
    </div>
  );
}

function Frame2957() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame8 />
      <Frame2857 />
      <Frame2858 />
    </div>
  );
}

function Frame2958() {
  return (
    <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start px-0 py-10 relative shrink-0 w-[1073px]">
      <Frame2957 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#f9f9f9] h-[1044px] relative rounded shrink-0 w-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[1044px] items-center justify-start px-20 py-0 relative w-full">
          <Frame2884 />
          <Frame2958 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px h-full items-start justify-start p-0 relative shrink-0 w-[1137px]">
      <Frame7 />
      <Frame25 />
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="bg-[#ebedf2] relative rounded-bl-[10px] rounded-br-[10px] size-full"
      data-name="Home"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip px-px py-0 relative size-full">
          <LeftNav />
          <Frame26 />
        </div>
      </div>
    </div>
  );
}