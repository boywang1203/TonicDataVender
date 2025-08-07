import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-mwe9gp80zo";
import svgPathsHome from "../imports/svg-ihad3qv51t";
import imgAvatar from "figma:asset/943b6773c80d8805ffa717f47d0e7ebb9c5c80c9.png";
import DatabaseConnectionDetails from "./DatabaseConnectionDetails";
import { processNaturalLanguageQuery } from "../services/databaseService";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
  tableData?: {
    tableName: string;
    database: string;
    columns: string[];
    rows: string[][];
  };
  showConnectionDetails?: boolean;
  context?: {
    suggestedAction?: string;
    availableTables?: string[];
    lastQuery?: string;
  };
}

interface ChatProps {
  initialQuery: string;
  onBackToHome: () => void;
}

// Typewriter animation component
function TypewriterText({ text, speed = 30, onComplete }: { 
  text: string; 
  speed?: number;
  onComplete?: () => void;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);

  return <span className="block break-words whitespace-normal">{displayedText}</span>;
}

// Dynamic database response generation with context
const generateDatabaseResponse = async (query: string, conversationHistory: Message[]): Promise<Message> => {
  try {
    return await processNaturalLanguageQuery(query, conversationHistory);
  } catch (error) {
    console.error('Database query error:', error);
    return {
      id: Date.now().toString(),
      type: 'assistant',
      content: `Sorry, I encountered an error while querying the database: ${error instanceof Error ? error.message : 'Unknown error'}. Here are the connection details you can use to access the database directly:`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      showConnectionDetails: true
    };
  }
};

export default function Chat({ initialQuery, onBackToHome }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Immediately show the user's message and start loading
    const initialUserMessage: Message = {
      id: '1',
      type: 'user',
      content: initialQuery,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Set the user message immediately
    setMessages([initialUserMessage]);
    setIsLoading(true);

    // Process the database response in the background
    const processInitialQuery = async () => {
      try {
        const initialResponse = await generateDatabaseResponse(initialQuery, [initialUserMessage]);
        setMessages(prev => [...prev, initialResponse]);
      } catch (error) {
        console.error('Error processing initial query:', error);
        const errorResponse: Message = {
          id: Date.now().toString(),
          type: 'assistant',
          content: 'Sorry, I encountered an error while processing your request. Please try again.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          showConnectionDetails: true
        };
        setMessages(prev => [...prev, errorResponse]);
      } finally {
        setIsLoading(false);
      }
    };

    processInitialQuery();
  }, [initialQuery]);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue("");
    setIsLoading(true);

    // Process the database response
    try {
      const assistantResponse = await generateDatabaseResponse(inputValue, updatedMessages);
      setMessages(prev => [...prev, assistantResponse]);
    } catch (error) {
      console.error('Error processing message:', error);
      const errorResponse: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: 'Sorry, I encountered an error while processing your request. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showConnectionDetails: true
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyTable = () => {
    // Simple copy functionality - in a real app, this would copy table data
    navigator.clipboard.writeText("Table data copied!");
  };

  return (
    <div className="bg-[#ebedf2] relative rounded-bl-[10px] rounded-br-[10px] size-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip px-px py-0 relative size-full">
          {/* Left Navigation - Complete from Home */}
          <LeftNav />
          
          {/* Main Content */}
          <div className="box-border content-stretch flex flex-col gap-px h-full items-start justify-start p-0 relative shrink-0 w-[1137px]">
            {/* Top Nav */}
            <TopNav />
            
            {/* Breadcrumb */}
            <Breadcrumb onBack={onBackToHome} />
            
            {/* Chat Area */}
            <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative rounded shrink-0 w-full overflow-hidden">
              <div className="flex flex-col items-center justify-start relative size-full">
                <div className="box-border content-stretch flex flex-col gap-10 items-center justify-start p-[24px] relative size-full max-w-full">
                  {/* Chat Messages */}
                  <div 
                    ref={chatContainerRef}
                    className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative w-full max-w-[800px] flex-1 overflow-y-auto overflow-x-hidden"
                  >
                    <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#b3b3b4] text-[14px] text-center w-full">
                      <p className="block leading-[20px]">
                        {messages[0]?.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    
                    <div className="box-border content-stretch flex flex-col gap-10 items-end justify-start p-0 relative shrink-0 w-full">
                      {messages.map((message, index) => (
                        <div key={message.id} className={`w-full ${message.type === 'user' ? 'flex justify-end' : 'flex justify-start'}`}>
                          {message.type === 'user' ? (
                            <UserMessage content={message.content} />
                          ) : (
                            <AssistantMessage 
                              content={message.content} 
                              tableData={message.tableData}
                              onCopyTable={handleCopyTable}
                              isLatest={index === messages.length - 1}
                              showConnectionDetails={message.showConnectionDetails}
                            />
                          )}
                        </div>
                      ))}
                      
                      {isLoading && (
                        <div className="w-full flex justify-start">
                          <div className="bg-white rounded-lg p-4 max-w-[80%]">
                            <div className="flex space-x-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Chat Input at bottom */}
                  <ChatInput 
                    value={inputValue}
                    onChange={setInputValue}
                    onSubmit={handleSendMessage}
                    isLoading={isLoading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component definitions from the original Home (using HomeWithSearch structure)
function Vendor() {
  return (
    <div className="h-4 relative w-[95.298px]" data-name="VENDOR">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 16">
        <g id="VENDOR">
          <path d={svgPathsHome.p10b3700} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPathsHome.p29b07b00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPathsHome.p2e574b00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPathsHome.p359c3a80} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPathsHome.p2944d680} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPathsHome.p3d237600} fill="var(--fill-0, black)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group2867() {
  return (
    <div className="[grid-area:1_/_1] h-4 ml-0 mt-0 relative w-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
        <g id="Group 2867">
          <path d={svgPathsHome.p355ef100} fill="var(--fill-0, black)" id="Star 2" />
          <path d={svgPathsHome.p2da87700} fill="var(--fill-0, black)" id="Star 3" />
        </g>
      </svg>
    </div>
  );
}

function Group2868() {
  return (
    <div className="[grid-area:1_/_1] h-4 ml-2 mt-0 relative w-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
        <g id="Group 2868">
          <path d={svgPathsHome.p5af4980} fill="var(--fill-0, black)" id="Star 2" />
          <path d={svgPathsHome.p31494670} fill="var(--fill-0, black)" id="Star 3" />
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
    <div className="box-border content-stretch flex flex-col gap-1 h-[123.298px] items-start justify-start p-0 relative w-[16.057px]" data-name="Logo">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Right Icon">
          <path d={svgPathsHome.paee2100} id="Vector" stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
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
      <div aria-hidden="true" className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Frame2871() {
  return (
    <div className="bg-[#ffffff] max-w-[1120px] relative rounded shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-neutral-200 border-solid inset-0 pointer-events-none rounded" />
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

// Complete LeftNav with all navigation items from Home
function LeftIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="Left Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_8216)" id="Left Icon">
          <path d={svgPathsHome.p25a3cd00} id="Vector" stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
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
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0" data-name="Label Frame">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Catalog</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[#f5f6f9] grow min-h-px min-w-px relative rounded shrink-0 w-full" data-name="Button">
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
    <div className="box-border content-stretch flex flex-col gap-2 h-9 items-start justify-start px-2.5 py-0 relative shrink-0 w-[300px]" data-name="Catalog">
      <Button1 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[300px]" data-name="Tabs">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPathsHome.p13a86400} id="Vector" stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame1() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0" data-name="Label Frame">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">New group</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0" data-name="Button">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPathsHome.p35d79f80} id="Vector" stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label Frame">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Right Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #67686B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPathsHome.p35d79f80} id="Vector" stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Label Frame">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Right Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #67686B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
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
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0" data-name="Content">
      <Frame2870 />
      <Frame2876 />
      <Frame2873 />
    </div>
  );
}

function Groups() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[300px]" data-name="Groups">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPathsHome.p2d1f8bc0} id="Vector" stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame4() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0" data-name="Label Frame">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Staging dev</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0" data-name="Button">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPathsHome.p2d1f8bc0} id="Vector" stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame5() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0" data-name="Label Frame">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Testing Env</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0" data-name="Button">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Left Icon">
          <path d={svgPathsHome.p2d1f8bc0} id="Vector" stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function LabelFrame6() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0" data-name="Label Frame">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Disaster Recovery Env</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0" data-name="Button">
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
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0" data-name="Content">
      <Frame2872 />
      <Frame2878 />
      <Frame2877 />
    </div>
  );
}

function PinnedDatasets() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[300px]" data-name="Pinned Datasets">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_8165)" id="Left Icon">
          <path d={svgPathsHome.p24264080} id="Vector" stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
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
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0" data-name="Label Frame">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Currently active databases</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0" data-name="Button">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_8165)" id="Left Icon">
          <path d={svgPathsHome.p24264080} id="Vector" stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
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
    <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[3px] py-0 relative shrink-0" data-name="Label Frame">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[16px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">Databases in US</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0" data-name="Button">
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
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0" data-name="Content">
      <Frame2874 />
      <Frame2879 />
      <Frame2874 />
    </div>
  );
}

function SavedSearches() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[300px]" data-name="Saved Searches">
      <Label2 />
      <Content2 />
    </div>
  );
}

function ContentGroups() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 h-[1257px] items-start justify-start p-0 relative shrink-0" data-name="Content Groups">
      <Tabs />
      <Groups />
      <PinnedDatasets />
      <SavedSearches />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 bg-[#ffffff] grow max-w-[1120px] min-h-px min-w-px relative rounded shrink-0 w-full" data-name="Content">
      <div className="box-border content-stretch flex flex-col items-start justify-start max-w-inherit overflow-clip px-0 py-4 relative size-full">
        <ContentGroups />
      </div>
      <div aria-hidden="true" className="absolute border-[#e3e4ec] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

// Complete LeftNav with all sections from Home
function LeftNav() {
  return (
    <div className="box-border content-stretch flex flex-col gap-px h-full items-center justify-start p-0 relative rounded shrink-0" data-name="Left Nav">
      <Frame2871 />
      <Content3 />
    </div>
  );
}

function TopNav() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 w-full">
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-end px-2 py-0 relative w-full">
          <div className="box-border content-stretch flex flex-row gap-4 items-start justify-end px-0 py-2 relative shrink-0">
            <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
              <div className="box-border content-stretch flex flex-row gap-px h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0">
                <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182026] text-[14px] text-left text-nowrap">
                  <p className="block leading-[20px] whitespace-pre">Gregg M.</p>
                </div>
              </div>
              <div className="relative shrink-0 size-7">
                <div className="absolute inset-0">
                  <img className="block max-w-none size-full" height="28" src={imgAvatar} width="28" />
                </div>
                <div className="absolute right-[-0.5px] size-2 top-0">
                  <div className="absolute inset-[-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                      <circle cx="5" cy="5" fill="var(--fill-0, #FF9F37)" r="4.5" stroke="var(--stroke-0, #414141)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
              <div className="h-7 relative rounded shrink-0">
                <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative">
                  <div className="relative shrink-0 size-4">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p10a1c700} stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
              </div>
              <div className="h-7 relative rounded shrink-0">
                <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative">
                  <div className="relative shrink-0 size-4">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p4b9b700} stroke="var(--stroke-0, #414141)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Breadcrumb({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-2 relative w-full">
          <button 
            onClick={onBack}
            className="box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 hover:opacity-70 transition-opacity"
          >
            <div className="h-7 relative rounded shrink-0">
              <div className="box-border content-stretch flex flex-row gap-2 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative">
                <div className="relative shrink-0 size-4">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p27ae5500} stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
            </div>
          </button>
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Database Assistant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatInput({ value, onChange, onSubmit, isLoading }: {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}) {
  return (
    <form onSubmit={onSubmit} className="bg-[#ffffff] relative rounded shrink-0 w-full max-w-[800px]">
      <div className="flex flex-col items-end overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[39px] items-end justify-start px-4 py-3 relative w-full">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search or ask a question"
            disabled={isLoading}
            className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#1a1e27] text-[18px] text-left bg-transparent border-none outline-none placeholder:text-[#808083]"
          />
          <button
            type="submit"
            disabled={!value.trim() || isLoading}
            className="bg-[#004141] box-border content-stretch flex flex-row gap-2 h-8 items-center justify-center px-3.5 py-3 relative rounded shrink-0 w-[51px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#006161] transition-colors duration-200"
          >
            <div aria-hidden="true" className="absolute border-[#00dcdc] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 rounded top-0" />
            <div className="relative shrink-0 size-4">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p295fd800} stroke="var(--stroke-0, #00DCDC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e4ec] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </form>
  );
}

function UserMessage({ content }: { content: string }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-end justify-start p-0 relative w-full max-w-[80%]">
      <div className="bg-[#f1f2f5] box-border content-stretch flex flex-row gap-2.5 items-start justify-end px-3 py-2 relative rounded-lg max-w-[400px] min-w-[120px]">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative text-[#1a1e27] text-[16px] text-left break-words overflow-wrap-anywhere w-full">
          <p className="block leading-[24px] break-words">{content}</p>
        </div>
      </div>
    </div>
  );
}

function AssistantMessage({ content, tableData, onCopyTable, isLatest, showConnectionDetails }: { 
  content: string; 
  tableData?: { tableName: string; database: string; columns: string[]; rows: string[][] };
  onCopyTable: () => void;
  isLatest?: boolean;
  showConnectionDetails?: boolean;
}) {
  const [showTable, setShowTable] = useState(false);
  const [showConnection, setShowConnection] = useState(false);

  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative w-full max-w-[90%]">
      <div className="box-border flex flex-col gap-2 items-start justify-start p-0 relative w-full break-words">
        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative w-full text-[#182026] text-[16px] text-left break-words overflow-wrap-anywhere">
          <p className="block leading-[24px] break-words">
            {isLatest ? (
              <TypewriterText 
                text={content} 
                speed={15}
                onComplete={() => {
                  setShowTable(true);
                  setShowConnection(true);
                }}
              />
            ) : (
              content
            )}
          </p>
        </div>
      </div>
      
      {showConnectionDetails && (showConnection || !isLatest) && (
        <>
          <DatabaseConnectionDetails />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182026] text-[16px] text-left">
            <p className="block leading-[24px]">You can use these connection details with any PostgreSQL client or connect directly through the Supabase dashboard. Let me know if you need help with anything else!</p>
          </div>
        </>
      )}

      {tableData && (showTable || !isLatest) && (
        <>
          <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative shrink-0 w-full">
            <div className="bg-[#ebedf2] box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative rounded shrink-0">
              <div className="relative shrink-0 size-4">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p3c550b00} fill="var(--fill-0, #1A1E27)" fillRule="evenodd" />
                </svg>
              </div>
              <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
                <p className="block leading-[20px] whitespace-pre">{tableData.tableName}</p>
              </div>
            </div>
            
            <button 
              onClick={onCopyTable}
              className="h-7 relative rounded shrink-0 hover:bg-gray-100 transition-colors"
            >
              <div className="box-border content-stretch flex flex-row gap-1 h-7 items-center justify-center overflow-clip px-1.5 py-1 relative">
                <div className="relative shrink-0 size-4">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p149a0300} stroke="var(--stroke-0, #1A1E27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
                  </svg>
                </div>
                <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
                  <p className="block leading-[20px] whitespace-pre">Copy</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#d5d9e3] border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
            </button>
          </div>
          
          <div className="relative rounded-lg shrink-0 w-full overflow-x-auto">
            <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full min-w-max">
              {/* Table Header */}
              <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                {tableData.columns.map((column, index) => (
                  <div key={index} className="basis-0 bg-[#f5f6f9] grow h-9 min-h-px min-w-[120px] relative shrink-0">
                    <div className="flex flex-row items-center overflow-clip relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start px-3 py-1.5 relative w-full">
                        <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
                          <p className="block leading-[20px] whitespace-pre">{column}</p>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
                  </div>
                ))}
              </div>
              
              {/* Table Rows */}
              {tableData.rows.map((row, rowIndex) => (
                <div key={rowIndex} className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
                  {row.map((cell, cellIndex) => (
                    <div key={cellIndex} className="basis-0 bg-[#ffffff] grow h-9 min-h-px min-w-[120px] relative shrink-0">
                      <div className="flex flex-row items-center overflow-clip relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-2.5 h-9 items-center justify-start p-[12px] relative w-full">
                          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#1a1e27] text-[14px] text-left text-nowrap">
                            <p className="block leading-[20px] whitespace-pre">{cell}</p>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-lg" />
          </div>
          
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#182026] text-[16px] text-left">
            <p className="block leading-[24px]">Would you like me to provide you connection to this database?</p>
          </div>
        </>
      )}
    </div>
  );
}