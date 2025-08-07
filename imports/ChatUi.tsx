import svgPaths from "./svg-mwe9gp80zo";
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
      className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-[16.057px]"
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
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Catalog</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative rounded shrink-0 w-full"
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

function Frame2874() {
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
      <Frame2874 />
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

function Frame2875() {
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
      <Frame2875 />
      <Frame2879 />
      <Frame2875 />
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
        <p className="block leading-[20px] whitespace-pre">Gregg M.</p>
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

function NotificationStatus() {
  return (
    <div
      className="absolute right-[-0.5px] size-2 top-0"
      data-name="Notification Status"
    >
      <div className="absolute inset-[-12.5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 10 10"
        >
          <g id="Notification Status">
            <circle
              cx="5"
              cy="5"
              fill="var(--fill-0, #FF9F37)"
              id="Shape"
              r="4.5"
              stroke="var(--stroke-0, #414141)"
            />
          </g>
        </svg>
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
      <NotificationStatus />
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
        <g clipPath="url(#clip0_2_24823)" id="Right Icon">
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
          <clipPath id="clip0_2_24823">
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

function Frame2881() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Utility />
      <Utility1 />
    </div>
  );
}

function Frame2883() {
  return (
    <div className="box-border content-stretch flex flex-row gap-4 items-start justify-end px-0 py-2 relative shrink-0">
      <RightSide />
      <Frame2881 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 w-full">
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-2 py-0 relative w-full">
          <Frame2883 />
        </div>
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
            d={svgPaths.p27ae5500}
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

function Button14() {
  return (
    <div className="h-7 relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative">
        <RightIcon5 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Utility2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0"
      data-name="Utility"
    >
      <Button14 />
    </div>
  );
}

function Frame2872() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0">
      <Utility2 />
    </div>
  );
}

function Frame2884() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-2 relative w-full">
          <Frame2872 />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[20px] whitespace-pre">
              User Contact Table
            </p>
          </div>
        </div>
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
            d={svgPaths.p295fd800}
            id="Vector"
            stroke="var(--stroke-0, #00DCDC)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div
      className="bg-[#004141] box-border content-stretch flex flex-row gap-2 h-8 items-center justify-center px-3.5 py-3 relative rounded shrink-0 w-[51px]"
      data-name="Button"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#00dcdc] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0"
      />
      <RightIcon6 />
    </div>
  );
}

function Input() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 w-full"
      data-name="Input"
    >
      <div className="flex flex-col items-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[39px] items-end justify-start px-4 py-3 relative w-full">
          <div
            className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#808083] text-[18px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[28px]">Search or ask a question</p>
          </div>
          <Button15 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e4ec] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function Content4() {
  return (
    <div
      className="bg-[#f1f2f5] box-border content-stretch flex flex-row gap-2.5 items-center justify-end px-3 py-2 relative rounded-lg shrink-0"
      data-name="Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-nowrap text-right">
        <p className="block leading-[24px] whitespace-pre">
          Find “user_contact_info”
        </p>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-end justify-start p-0 relative shrink-0 w-full"
      data-name="Message"
    >
      <Content4 />
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
        <g id="Left Icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p3c550b00}
            fill="var(--fill-0, #1A1E27)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function LeftIconFrame1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0"
      data-name="Left Icon Frame"
    >
      <LeftIcon15 />
    </div>
  );
}

function LabelFrame11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">user_contact_info</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div
      className="bg-[#ebedf2] box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIconFrame1 />
      <LabelFrame11 />
    </div>
  );
}

function TableDbShortcut() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Table/DB Shortcut"
    >
      <Button16 />
    </div>
  );
}

function LeftIcon16() {
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

function LeftIconFrame2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0"
      data-name="Left Icon Frame"
    >
      <LeftIcon16 />
    </div>
  );
}

function LabelFrame12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">{` cust360.db_user_profiles`}</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div
      className="bg-[#ebedf2] box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIconFrame2 />
      <LabelFrame12 />
    </div>
  );
}

function TableDbShortcut1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Table/DB Shortcut"
    >
      <Button17 />
    </div>
  );
}

function Content5() {
  return (
    <div
      className="[flex-flow:wrap] box-border content-center flex gap-2 items-center justify-start p-0 relative rounded-lg shrink-0 w-[661px]"
      data-name="Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182026] text-[16px] text-nowrap text-right">
        <p className="block leading-[24px] whitespace-pre">
          Sure! I found a table named
        </p>
      </div>
      <TableDbShortcut />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182026] text-[16px] text-nowrap text-right">
        <p className="block leading-[24px] whitespace-pre">in the</p>
      </div>
      <TableDbShortcut1 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182026] text-[16px] text-nowrap text-right">
        <p className="block leading-[24px] whitespace-pre">{`database. Here's a quick preview of the table:`}</p>
      </div>
    </div>
  );
}

function LeftIcon17() {
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
            clipRule="evenodd"
            d={svgPaths.p3c550b00}
            fill="var(--fill-0, #1A1E27)"
            fillRule="evenodd"
            id="Shape"
          />
        </g>
      </svg>
    </div>
  );
}

function LeftIconFrame3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0"
      data-name="Left Icon Frame"
    >
      <LeftIcon17 />
    </div>
  );
}

function LabelFrame13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">user_contact_info</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div
      className="bg-[#ebedf2] box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0"
      data-name="Button"
    >
      <LeftIconFrame3 />
      <LabelFrame13 />
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
        <g clipPath="url(#clip0_2_24793)" id="Left Icon">
          <path
            d={svgPaths.p149a0300}
            id="Vector"
            stroke="var(--stroke-0, #1A1E27)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.33"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_24793">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LeftIconFrame4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0"
      data-name="Left Icon Frame"
    >
      <LeftIcon18 />
    </div>
  );
}

function LabelFrame14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0"
      data-name="Label Frame"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Copy</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-7 relative rounded shrink-0" data-name="Button">
      <div className="box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative">
        <LeftIconFrame4 />
        <LabelFrame14 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]"
      />
    </div>
  );
}

function ExpandButton() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 h-7 items-center justify-start p-0 relative shrink-0"
      data-name="Expand Button"
    >
      <Button19 />
    </div>
  );
}

function RightContent() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-end p-0 relative shrink-0"
      data-name="Right Content"
    >
      <ExpandButton />
    </div>
  );
}

function Frame1000001402() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full">
      <Button18 />
      <RightContent />
    </div>
  );
}

function TextContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">user_id</p>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent />
    </div>
  );
}

function Cell() {
  return (
    <div
      className="basis-0 bg-[#f5f6f9] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start px-3 py-1.5 relative w-full">
          <TextField />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">email</p>
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent1 />
    </div>
  );
}

function Cell1() {
  return (
    <div
      className="basis-0 bg-[#f5f6f9] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-3 py-1.5 relative size-full">
          <TextField1 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">preferred_lang</p>
      </div>
    </div>
  );
}

function TextField2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent2 />
    </div>
  );
}

function Cell2() {
  return (
    <div
      className="basis-0 bg-[#f5f6f9] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-3 py-1.5 relative size-full">
          <TextField2 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">created_at</p>
      </div>
    </div>
  );
}

function TextField3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent3 />
    </div>
  );
}

function Cell3() {
  return (
    <div
      className="basis-0 bg-[#f5f6f9] grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-3 py-1.5 relative size-full">
          <TextField3 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Row() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <Cell />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Cell1 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Cell2 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Cell3 />
      </div>
    </div>
  );
}

function TextContent4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">10239</p>
      </div>
    </div>
  );
}

function TextField4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent4 />
    </div>
  );
}

function LeftContent() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField4 />
    </div>
  );
}

function Cell4() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">alice.w@gmail.com</p>
      </div>
    </div>
  );
}

function TextField5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent5 />
    </div>
  );
}

function LeftContent1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField5 />
    </div>
  );
}

function Cell5() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent1 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">en-US</p>
      </div>
    </div>
  );
}

function TextField6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent6 />
    </div>
  );
}

function LeftContent2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField6 />
    </div>
  );
}

function Cell6() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent2 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          2023-11-08 13:45:00
        </p>
      </div>
    </div>
  );
}

function TextField7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent7 />
    </div>
  );
}

function LeftContent3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField7 />
    </div>
  );
}

function Cell7() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent3 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Row1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
    </div>
  );
}

function TextContent8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">30221</p>
      </div>
    </div>
  );
}

function TextField8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent8 />
    </div>
  );
}

function LeftContent4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField8 />
    </div>
  );
}

function Cell8() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent4 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          bruno.k@acne.co.uk
        </p>
      </div>
    </div>
  );
}

function TextField9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent9 />
    </div>
  );
}

function LeftContent5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField9 />
    </div>
  );
}

function Cell9() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent5 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">en-GB</p>
      </div>
    </div>
  );
}

function TextField10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent10 />
    </div>
  );
}

function LeftContent6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField10 />
    </div>
  );
}

function Cell10() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent6 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent11() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          2022-04-18 09:32:10
        </p>
      </div>
    </div>
  );
}

function TextField11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent11 />
    </div>
  );
}

function LeftContent7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField11 />
    </div>
  );
}

function Cell11() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent7 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Row2() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <Cell8 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
    </div>
  );
}

function TextContent12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">59812</p>
      </div>
    </div>
  );
}

function TextField12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent12 />
    </div>
  );
}

function LeftContent8() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField12 />
    </div>
  );
}

function Cell12() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent8 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">deepa_r@gmail.com</p>
      </div>
    </div>
  );
}

function TextField13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent13 />
    </div>
  );
}

function LeftContent9() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField13 />
    </div>
  );
}

function Cell13() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent9 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">hi-IN</p>
      </div>
    </div>
  );
}

function TextField14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent14 />
    </div>
  );
}

function LeftContent10() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField14 />
    </div>
  );
}

function Cell14() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent10 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent15() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          2021-06-21 17:25:35
        </p>
      </div>
    </div>
  );
}

function TextField15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent15 />
    </div>
  );
}

function LeftContent11() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField15 />
    </div>
  );
}

function Cell15() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent11 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Row3() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <Cell12 />
      <Cell13 />
      <Cell14 />
      <Cell15 />
    </div>
  );
}

function TextContent16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">21833</p>
      </div>
    </div>
  );
}

function TextField16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent16 />
    </div>
  );
}

function LeftContent12() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField16 />
    </div>
  );
}

function Cell16() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent12 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          carlos.m@gmail.com
        </p>
      </div>
    </div>
  );
}

function TextField17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent17 />
    </div>
  );
}

function LeftContent13() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField17 />
    </div>
  );
}

function Cell17() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent13 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent18() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">es-MX</p>
      </div>
    </div>
  );
}

function TextField18() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent18 />
    </div>
  );
}

function LeftContent14() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField18 />
    </div>
  );
}

function Cell18() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent14 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent19() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          2023-01-12 11:00:55
        </p>
      </div>
    </div>
  );
}

function TextField19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent19 />
    </div>
  );
}

function LeftContent15() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField19 />
    </div>
  );
}

function Cell19() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent15 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Row4() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <Cell16 />
      <Cell17 />
      <Cell18 />
      <Cell19 />
    </div>
  );
}

function TextContent20() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">43012</p>
      </div>
    </div>
  );
}

function TextField20() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent20 />
    </div>
  );
}

function LeftContent16() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField20 />
    </div>
  );
}

function Cell20() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent16 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">li.yan@gmail.com</p>
      </div>
    </div>
  );
}

function TextField21() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent21 />
    </div>
  );
}

function LeftContent17() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField21 />
    </div>
  );
}

function Cell21() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent17 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent22() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">zh-CN</p>
      </div>
    </div>
  );
}

function TextField22() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent22 />
    </div>
  );
}

function LeftContent18() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField22 />
    </div>
  );
}

function Cell22() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent18 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function TextContent23() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0"
      data-name="Text Content"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">
          2022-08-30 14:12:20
        </p>
      </div>
    </div>
  );
}

function TextField23() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Text Field"
    >
      <TextContent23 />
    </div>
  );
}

function LeftContent19() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Left Content"
    >
      <TextField23 />
    </div>
  );
}

function Cell23() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-px relative shrink-0"
      data-name="Cell"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
          <LeftContent19 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Row5() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Row"
    >
      <Cell20 />
      <Cell21 />
      <Cell22 />
      <Cell23 />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative rounded-lg shrink-0 w-full" data-name="Content">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        <Row />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function Response() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0 w-full"
      data-name="Response"
    >
      <Content5 />
      <Frame1000001402 />
      <Content6 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182026] text-[16px] text-nowrap text-right">
        <p className="block leading-[24px] whitespace-pre">
          Would you like me to provide you connection to this database?
        </p>
      </div>
    </div>
  );
}

function ChatContent() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-10 items-end justify-start p-0 relative shrink-0 w-full"
      data-name="Chat Content"
    >
      <Message />
      <Response />
    </div>
  );
}

function Frame1000001401() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-6 items-center justify-start left-[168.5px] p-0 top-6 w-[800px]">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#b3b3b4] text-[14px] text-center w-full">
        <p className="block leading-[20px]">1:40 PM</p>
      </div>
      <ChatContent />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative rounded shrink-0 w-full">
      <div className="flex flex-col items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-end p-[24px] relative size-full">
          <Input />
          <Frame1000001401 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px h-full items-start justify-start p-0 relative shrink-0 w-[1137px]">
      <Frame7 />
      <Frame2884 />
      <Frame6 />
    </div>
  );
}

export default function ChatUi() {
  return (
    <div
      className="bg-[#ebedf2] relative rounded-bl-[10px] rounded-br-[10px] size-full"
      data-name="ChatUI"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip px-px py-0 relative size-full">
          <LeftNav />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}