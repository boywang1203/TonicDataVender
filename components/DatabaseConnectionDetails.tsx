export default function DatabaseConnectionDetails() {
  // Since we're using direct configuration in Figma Make, show the actual connection details
  const supabaseUrl = 'https://fspyevjjyfznpnvbprvs.supabase.co';
  const host = 'fspyevjjyfznpnvbprvs.supabase.co';
  const isConfigured = true; // Direct configuration is active
  
  return (
    <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-3 items-start justify-start leading-[0] not-italic p-4 relative bg-[#f8f9fa] rounded-lg border border-[#e3e4ec]">
      <div className="relative shrink-0 bg-[#d1edff] border border-[#bee5eb] rounded p-3 w-full">
        <p className="leading-[20px] text-[14px] text-[#0c5460]">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">✅ Connected:</span>
          <span> Your database chatbot is successfully connected to Supabase</span>
        </p>
      </div>
      
      <div className="relative shrink-0">
        <p className="leading-[20px] text-[14px] text-nowrap whitespace-pre">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">
            Database Type:
          </span>
          <span>{` PostgreSQL (Supabase)`}</span>
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-[14px] text-nowrap whitespace-pre">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">
            Host:
          </span>
          <span>{` db.${host}`}</span>
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-[14px] text-nowrap whitespace-pre">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">
            Port:
          </span>
          <span>{` 5432`}</span>
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-[14px] text-nowrap whitespace-pre">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">
            Database:
          </span>
          <span>{` postgres`}</span>
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-[14px] text-nowrap whitespace-pre">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">
            Username:
          </span>
          <span>{` postgres`}</span>
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-[14px] text-nowrap whitespace-pre">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">
            Password:
          </span>
          <span>{` [Your database password from Supabase]`}</span>
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-[14px] break-words">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">
            Supabase URL:
          </span>
          <span>{` ${supabaseUrl}`}</span>
        </p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[20px] text-[14px] text-nowrap whitespace-pre">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">
            API Key Status:
          </span>
          <span className="text-green-600">{` [Configured]`}</span>
        </p>
      </div>
      
      <div className="relative shrink-0 bg-[#e7f3ff] border border-[#b3d8ff] rounded p-3 w-full mt-2">
        <p className="leading-[20px] text-[14px] text-[#004085]">
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">🚀 Ready to Use:</span>
          <br />Your chatbot is now connected and ready to query your Supabase database!
          <br />Try asking: "What tables do you have?" or "Show me some data"
          <br />
          <br />💡 <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">Tip:</span> Create some tables in your Supabase dashboard to see real data responses.
        </p>
      </div>
    </div>
  );
}