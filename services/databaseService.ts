import { createClient } from '@supabase/supabase-js';

// Direct configuration for Figma Make environment
// In a production environment, these would be environment variables
const supabaseUrl = 'https://fspyevjjyfznpnvbprvs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzcHlldmpqeWZ6bnBudmJwcnZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTEyNTAsImV4cCI6MjA2OTk4NzI1MH0.xHi3nITDaPHB6MzzsrpLua-rgLKLio681YGW5zGhiFg';

// Initialize Supabase client
let supabase: any = null;
let initializationError: string | null = null;

try {
  console.log('🚀 Initializing Supabase client with direct configuration...');
  supabase = createClient(supabaseUrl, supabaseKey);
  console.log('✅ Supabase client initialized successfully');
  console.log('📊 Client details:', {
    supabaseUrl,
    hasRealtime: !!supabase.realtime,
    hasAuth: !!supabase.auth,
    hasStorage: !!supabase.storage
  });
} catch (error) {
  initializationError = `Failed to initialize Supabase: ${error instanceof Error ? error.message : 'Unknown error'}`;
  console.error('❌ Supabase initialization error:', error);
}

interface DatabaseQueryResult {
  found: boolean;
  data?: any[];
  tableName?: string;
  columns?: string[];
  error?: string;
  queryType?: 'table_data' | 'aggregate' | 'schema' | 'connection';
  diagnostics?: {
    rlsEnabled?: boolean;
    tableExists?: boolean;
    actualTables?: string[];
    suggestedFix?: string;
    connectionTest?: boolean;
    permissionLevel?: string;
  };
}

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

// Analyze conversation context for contextual responses
function analyzeConversationContext(conversationHistory: Message[]): {
  lastAssistantMessage?: Message;
  suggestedAction?: string;
  availableTables?: string[];
  hasTableData?: boolean;
} {
  // Find the last assistant message
  const lastAssistantMessage = conversationHistory
    .slice()
    .reverse()
    .find(msg => msg.type === 'assistant');

  if (!lastAssistantMessage) {
    return {};
  }

  const content = lastAssistantMessage.content.toLowerCase();
  let suggestedAction = '';
  let availableTables: string[] = [];

  // Check for specific patterns in the last assistant message
  if (content.includes('would you like me to show data from any specific table')) {
    suggestedAction = 'show_table_data';
    
    // Extract table names from the message
    const tableMatches = content.match(/table[s]?[:\s]+([^.?!]+)/i);
    if (tableMatches && tableMatches[1]) {
      availableTables = tableMatches[1]
        .split(/[,\s]+/)
        .map(t => t.trim())
        .filter(t => t && t.length > 0 && !['and', 'or', 'the', 'from'].includes(t));
    }
  } else if (content.includes('would you like me to provide you connection')) {
    suggestedAction = 'show_connection';
  } else if (content.includes('found') && content.includes('accessible table')) {
    suggestedAction = 'show_table_data';
    // Extract table names after "accessible table(s):"
    const tableMatches = content.match(/accessible table[s]?[:\s]+([^.?!]+)/i);
    if (tableMatches && tableMatches[1]) {
      availableTables = tableMatches[1]
        .split(/[,\s]+/)
        .map(t => t.trim())
        .filter(t => t && t.length > 0 && !['and', 'or', 'the', 'from'].includes(t));
    }
  }

  return {
    lastAssistantMessage,
    suggestedAction,
    availableTables,
    hasTableData: !!lastAssistantMessage.tableData
  };
}

// Check if a query is a contextual affirmative response
function isContextualAffirmativeResponse(query: string, context: any): {
  isAffirmative: boolean;
  suggestedAction?: string;
  tableName?: string;
} {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Common affirmative responses
  const affirmativeWords = [
    'yes', 'yeah', 'yep', 'sure', 'ok', 'okay', 'alright', 'please',
    'go ahead', 'show me', 'let me see', 'i would like', 'that would be great',
    'sounds good', 'absolutely', 'of course', 'definitely', 'indeed'
  ];

  const isAffirmative = affirmativeWords.some(word => 
    normalizedQuery === word || 
    normalizedQuery.startsWith(word + ' ') ||
    normalizedQuery.includes(' ' + word + ' ') ||
    normalizedQuery.endsWith(' ' + word)
  );

  if (!isAffirmative) {
    return { isAffirmative: false };
  }

  // If it's affirmative, check what the suggested action should be
  const { suggestedAction, availableTables } = context;
  
  // Check if user specified a table name in their response
  let tableName = '';
  if (availableTables && availableTables.length > 0) {
    for (const table of availableTables) {
      if (normalizedQuery.includes(table.toLowerCase())) {
        tableName = table;
        break;
      }
    }
    
    // If no specific table mentioned, use the first available table
    if (!tableName && suggestedAction === 'show_table_data') {
      tableName = availableTables[0];
    }
  }

  return {
    isAffirmative: true,
    suggestedAction,
    tableName
  };
}

// Parse natural language queries and determine intent
function parseQuery(query: string, conversationContext?: any): { intent: string; table?: string; operation?: string } {
  const normalizedQuery = query.toLowerCase().trim();
  
  // First check if this is a contextual affirmative response
  if (conversationContext) {
    const { isAffirmative, suggestedAction, tableName } = isContextualAffirmativeResponse(query, conversationContext);
    
    if (isAffirmative) {
      console.log('🎯 Detected contextual affirmative response:', { suggestedAction, tableName });
      
      if (suggestedAction === 'show_table_data') {
        return { intent: 'data', table: tableName };
      } else if (suggestedAction === 'show_connection') {
        return { intent: 'connection' };
      }
    }
  }
  
  // Connection-related queries
  if (normalizedQuery.includes('connection') || normalizedQuery.includes('connect') || 
      normalizedQuery.includes('database details') || normalizedQuery.includes('connection string')) {
    return { intent: 'connection' };
  }
  
  // Schema/structure queries
  if (normalizedQuery.includes('tables') || normalizedQuery.includes('schema') || 
      normalizedQuery.includes('structure') || normalizedQuery.includes('columns')) {
    return { intent: 'schema' };
  }
  
  // Count/aggregate queries
  if (normalizedQuery.includes('count') || normalizedQuery.includes('how many') || 
      normalizedQuery.includes('average') || normalizedQuery.includes('sum')) {
    return { intent: 'aggregate', operation: 'count' };
  }
  
  // Data queries - try to extract table name
  const tableKeywords = ['users', 'customers', 'orders', 'products', 'providers', 'doctors', 'patients', 'claims', 'profiles', 'posts', 'todos', 'items'];
  const foundTable = tableKeywords.find(table => normalizedQuery.includes(table));
  
  if (foundTable || normalizedQuery.includes('show') || normalizedQuery.includes('get') || 
      normalizedQuery.includes('find') || normalizedQuery.includes('data')) {
    return { intent: 'data', table: foundTable };
  }
  
  // Default to general query
  return { intent: 'general' };
}

// Test basic connection to Supabase
async function testConnection(): Promise<{ success: boolean; error?: string }> {
  if (!supabase) {
    return { success: false, error: 'No Supabase client available' };
  }

  try {
    console.log('🧪 Testing basic Supabase connection...');
    
    // Try to make a simple request to test the connection
    const { data, error } = await supabase.auth.getSession();
    
    if (error && !error.message.includes('session')) {
      console.log('❌ Connection test failed:', error);
      return { success: false, error: error.message };
    }
    
    console.log('✅ Basic connection test successful');
    return { success: true };
  } catch (error) {
    console.log('❌ Connection test error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Comprehensive table discovery with multiple approaches
async function discoverTables(): Promise<{ tables: string[]; method: string; diagnostics: any }> {
  if (!supabase) {
    return { tables: [], method: 'none', diagnostics: { error: 'No client' } };
  }

  const diagnostics: any = {};
  
  // Method 1: Try information_schema (most reliable if accessible)
  try {
    console.log('🔍 Method 1: Trying information_schema.tables...');
    const { data, error } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')
      .eq('table_type', 'BASE TABLE');

    if (!error && data && data.length > 0) {
      const tableNames = data.map((row: any) => row.table_name);
      console.log('✅ Found tables via information_schema:', tableNames);
      return { 
        tables: tableNames, 
        method: 'information_schema',
        diagnostics: { ...diagnostics, informationSchemaAccess: true }
      };
    } else {
      console.log('❌ Information schema failed:', error?.message);
      diagnostics.informationSchemaError = error?.message || 'No data returned';
    }
  } catch (error) {
    console.log('❌ Information schema exception:', error);
    diagnostics.informationSchemaException = error instanceof Error ? error.message : 'Unknown error';
  }

  // Method 2: Try Supabase REST API metadata endpoint
  try {
    console.log('🔍 Method 2: Trying REST API metadata...');
    const response = await fetch(`${supabaseUrl}/rest/v1/?apikey=${supabaseKey}`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log('📊 REST API response:', data);
      
      if (data.tables && Array.isArray(data.tables)) {
        const tableNames = data.tables.map((table: any) => table.name || table.table_name).filter(Boolean);
        if (tableNames.length > 0) {
          console.log('✅ Found tables via REST API:', tableNames);
          return { 
            tables: tableNames, 
            method: 'rest_api',
            diagnostics: { ...diagnostics, restApiAccess: true }
          };
        }
      }
    }
    diagnostics.restApiStatus = response.status;
  } catch (error) {
    console.log('❌ REST API method failed:', error);
    diagnostics.restApiError = error instanceof Error ? error.message : 'Unknown error';
  }

  // Method 3: Test a comprehensive list of common table names (UPDATED with claims!)
  console.log('🔍 Method 3: Testing comprehensive table list...');
  const commonTables = [
    // Put confirmed existing tables first
    'providers', 'claims',
    // User-related
    'users', 'user', 'accounts', 'profiles', 'people', 'customers', 'clients',
    // Content
    'posts', 'articles', 'blogs', 'content', 'pages', 'documents',
    // Commerce
    'products', 'items', 'orders', 'purchases', 'inventory', 'catalog',
    // Tasks/Projects
    'todos', 'tasks', 'projects', 'issues', 'tickets', 'notes',
    // Generic
    'data', 'records', 'entries', 'logs', 'events', 'messages',
    // Healthcare
    'patients', 'doctors', 'appointments', 'medical_records',
    // Business
    'employees', 'companies', 'organizations', 'departments',
    // Categories
    'categories', 'tags', 'groups', 'types', 'classifications'
  ];

  const accessibleTables = [];
  const rlsBlockedTables = [];
  const notFoundTables = [];

  for (const tableName of commonTables) {
    try {
      console.log(`🧪 Testing table: ${tableName}`);
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .limit(1);

      if (!error) {
        console.log(`✅ Table ${tableName} is accessible`);
        accessibleTables.push(tableName);
      } else {
        console.log(`❌ Table ${tableName} error:`, error.message);
        if (error.message.includes('relation') && error.message.includes('does not exist')) {
          notFoundTables.push(tableName);
        } else if (error.message.includes('policy') || error.message.includes('RLS') || 
                   error.message.includes('row-level security') || error.message.includes('permission')) {
          rlsBlockedTables.push(tableName);
        } else {
          rlsBlockedTables.push(tableName); // Assume RLS for other access errors
        }
      }
    } catch (e) {
      console.log(`❌ Exception testing ${tableName}:`, e);
      rlsBlockedTables.push(tableName);
    }
  }

  diagnostics.accessibleTables = accessibleTables;
  diagnostics.rlsBlockedTables = rlsBlockedTables;
  diagnostics.testedTablesCount = commonTables.length;

  if (accessibleTables.length > 0) {
    console.log(`✅ Found ${accessibleTables.length} accessible tables via testing:`, accessibleTables);
    return { 
      tables: accessibleTables, 
      method: 'table_testing',
      diagnostics
    };
  }

  console.log(`❌ No accessible tables found. RLS blocked: ${rlsBlockedTables.length}, Not found: ${notFoundTables.length}`);
  return { 
    tables: [], 
    method: 'none',
    diagnostics: {
      ...diagnostics,
      potentialRlsIssue: rlsBlockedTables.length > 0,
      suggestion: rlsBlockedTables.length > 0 ? 
        'Tables might exist but are blocked by Row Level Security policies' :
        'No tables found with common names - check your actual table names'
    }
  };
}

// Get database schema information with comprehensive diagnostics
async function getDatabaseSchema(): Promise<DatabaseQueryResult> {
  if (!supabase) {
    return { 
      found: false, 
      error: initializationError || 'Supabase client not available. Please check your configuration.' 
    };
  }

  try {
    console.log('🔍 Starting comprehensive database schema discovery...');
    
    // Test basic connection first
    const connectionTest = await testConnection();
    
    // Discover tables using multiple methods
    const { tables, method, diagnostics } = await discoverTables();
    
    if (tables.length > 0) {
      console.log(`🎉 Successfully found ${tables.length} table(s) using ${method}:`, tables);
      return {
        found: true,
        data: tables.map(name => ({ table_name: name })),
        queryType: 'schema',
        diagnostics: {
          connectionTest: connectionTest.success,
          actualTables: tables,
          discoveryMethod: method,
          ...diagnostics
        }
      };
    } else {
      // No tables found - provide comprehensive diagnostics
      console.log('❌ No accessible tables found with any method');
      
      let errorMessage = 'I cannot find any accessible tables in your database. ';
      let suggestedFix = '';
      
      if (diagnostics.potentialRlsIssue) {
        errorMessage += 'This appears to be a Row Level Security (RLS) issue.';
        suggestedFix = `Since you mentioned you have 2 tables in your database (including "providers" and "claims"), they likely have RLS policies blocking access. Here's how to fix this:

🔧 **Quick Fix Options:**

**Option 1: Disable RLS temporarily (for testing)**
1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Run these commands for each table:
   \`ALTER TABLE providers DISABLE ROW LEVEL SECURITY;\`
   \`ALTER TABLE claims DISABLE ROW LEVEL SECURITY;\`

**Option 2: Create a permissive policy**
1. Go to Authentication → Policies in your Supabase dashboard
2. Create a new policy for each table
3. Allow SELECT for anonymous users
4. Use this policy: \`(true)\` to allow all access

**Option 3: Try specific table names**
Try asking: "Show data from providers" or "Show data from claims"

💡 **What are your exact table names?** If you tell me the exact names, I can try to access them directly.`;
      } else {
        errorMessage += 'No tables were found with common names.';
        suggestedFix = `**What to check:**
1. Table names: Go to your Supabase Table Editor and check the exact table names
2. Schema: Make sure your tables are in the 'public' schema
3. Permissions: Verify the anonymous key has access to your tables

💡 **Tell me your table names:** If you share the exact table names, I can try to access them directly.`;
      }
      
      return { 
        found: false, 
        error: errorMessage,
        diagnostics: {
          connectionTest: connectionTest.success,
          discoveryMethod: method,
          suggestedFix,
          ...diagnostics
        }
      };
    }
  } catch (error) {
    console.error('Database schema discovery error:', error);
    return { 
      found: false, 
      error: `Failed to discover database schema: ${error instanceof Error ? error.message : 'Unknown error'}. This might be a permissions or network issue.`,
      diagnostics: {
        connectionTest: false,
        exception: error instanceof Error ? error.message : 'Unknown error',
        suggestedFix: 'Check your Supabase project settings and network connection.'
      }
    };
  }
}

// Query table data with enhanced error reporting
async function queryTableData(tableName?: string, limit: number = 5): Promise<DatabaseQueryResult> {
  if (!supabase) {
    return { 
      found: false, 
      error: initializationError || 'Database connection not available. Please check your Supabase configuration.' 
    };
  }

  try {
    if (!tableName) {
      console.log('🔍 No table specified, trying to discover tables...');
      const schemaResult = await getDatabaseSchema();
      if (!schemaResult.found || !schemaResult.data?.length) {
        return { 
          found: false, 
          error: schemaResult.error || 'No accessible tables found in database.',
          diagnostics: schemaResult.diagnostics
        };
      }
      tableName = schemaResult.data[0].table_name;
      console.log(`📋 Using discovered table: ${tableName}`);
    }
    
    console.log(`📊 Querying table: ${tableName} (limit: ${limit})`);
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .limit(limit);
    
    if (error) {
      console.error(`Table query error for ${tableName}:`, error);
      
      let diagnostics: any = {
        tableExists: !error.message.includes('does not exist'),
        queryAttempted: true,
        tableName: tableName
      };
      
      let errorMessage = `Cannot access table "${tableName}": ${error.message}.`;
      let suggestedFix = '';
      
      if (error.message.includes('relation') && error.message.includes('does not exist')) {
        diagnostics.tableExists = false;
        suggestedFix = `The table "${tableName}" doesn't exist. Please check your table names in the Supabase dashboard and try the exact name.`;
      } else if (error.message.includes('policy') || error.message.includes('RLS') || 
                 error.message.includes('row-level security') || error.message.includes('permission')) {
        diagnostics.rlsEnabled = true;
        suggestedFix = `Row Level Security is blocking access to "${tableName}". To fix this:

🔧 **Quick Solutions:**

**Disable RLS (for testing):**
\`ALTER TABLE ${tableName} DISABLE ROW LEVEL SECURITY;\`

**Or create a permissive policy:**
1. Go to Authentication → Policies in Supabase
2. Create policy for table "${tableName}"
3. Allow SELECT for anonymous role
4. Use condition: \`(true)\`

Run this in your SQL Editor to disable RLS:
\`ALTER TABLE ${tableName} DISABLE ROW LEVEL SECURITY;\``;
      } else {
        suggestedFix = `Unexpected error accessing "${tableName}". Check your Supabase project settings and table permissions.`;
      }
      
      return { 
        found: false, 
        error: errorMessage,
        diagnostics: {
          ...diagnostics,
          suggestedFix
        }
      };
    }
    
    if (!data || data.length === 0) {
      console.log(`📊 Table ${tableName} exists but is empty`);
      return { 
        found: false, 
        error: `Table "${tableName}" exists but contains no data.`,
        diagnostics: {
          tableExists: true,
          rlsEnabled: false,
          isEmpty: true
        }
      };
    }
    
    // Get column names from the first row
    const columns = Object.keys(data[0]);
    console.log(`✅ Successfully retrieved ${data.length} rows from ${tableName}`, { columns });
    
    return {
      found: true,
      data,
      tableName,
      columns,
      queryType: 'table_data'
    };
  } catch (error) {
    console.error('Table query error:', error);
    return { 
      found: false, 
      error: `Failed to query table data: ${error instanceof Error ? error.message : 'Unknown error'}. Please check your database permissions and table structure.`,
      diagnostics: {
        exception: error instanceof Error ? error.message : 'Unknown error',
        suggestedFix: 'Check your Supabase project configuration and table permissions.'
      }
    };
  }
}

// Perform aggregate queries with better error handling
async function performAggregateQuery(query: string): Promise<DatabaseQueryResult> {
  if (!supabase) {
    return { 
      found: false, 
      error: initializationError || 'Database connection not available for calculations. Please configure your Supabase connection.' 
    };
  }

  try {
    console.log('🧮 Performing aggregate query...');
    // Try to find a table to query
    const schemaResult = await getDatabaseSchema();
    if (!schemaResult.found || !schemaResult.data?.length) {
      return { 
        found: false, 
        error: schemaResult.error || 'No accessible tables found for calculations.',
        diagnostics: schemaResult.diagnostics
      };
    }
    
    const tableName = schemaResult.data[0].table_name;
    console.log(`📊 Counting records in table: ${tableName}`);
    
    // Perform a simple count query
    const { data, error, count } = await supabase
      .from(tableName)
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      console.error(`Aggregate query error for ${tableName}:`, error);
      return { 
        found: false, 
        error: `Cannot perform calculation on "${tableName}": ${error.message}`,
        diagnostics: {
          tableExists: true,
          rlsEnabled: error.message.includes('policy') || error.message.includes('RLS')
        }
      };
    }
    
    console.log(`✅ Count result: ${count} records in ${tableName}`);
    return {
      found: true,
      data: [{ count: count || 0, table: tableName }],
      queryType: 'aggregate'
    };
  } catch (error) {
    console.error('Aggregate query error:', error);
    return { 
      found: false, 
      error: `Failed to perform database calculations: ${error instanceof Error ? error.message : 'Unknown error'}. Check your database connection.`,
      diagnostics: {
        exception: error instanceof Error ? error.message : 'Unknown error',
        suggestedFix: 'Verify your database permissions and table access.'
      }
    };
  }
}

// Main function to process natural language queries with conversation context
export async function processNaturalLanguageQuery(query: string, conversationHistory: Message[] = []): Promise<Message> {
  console.log('🤖 Processing query with context:', { query, historyLength: conversationHistory.length });
  console.log('🔧 Supabase status:', {
    hasClient: !!supabase,
    initError: initializationError,
    url: supabaseUrl.substring(0, 30) + '...',
    configured: true
  });

  // Analyze conversation context
  const conversationContext = analyzeConversationContext(conversationHistory);
  console.log('🧠 Conversation context:', conversationContext);

  // Check if Supabase is configured
  if (!supabase) {
    console.log('❌ No Supabase client available');
    return {
      id: Date.now().toString(),
      type: 'assistant',
      content: initializationError 
        ? `Connection error: ${initializationError}. Please check your Supabase project and try again.`
        : 'I\'m having trouble connecting to your database. Here are the connection details:',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      showConnectionDetails: true
    };
  }

  console.log('✅ Supabase client available, processing query with context...');
  const { intent, table, operation } = parseQuery(query, conversationContext);
  console.log('🎯 Query intent with context:', { intent, table, operation });
  
  let result: DatabaseQueryResult;
  let responseContent: string;
  let tableData: any = undefined;
  let showConnectionDetails = false;
  
  switch (intent) {
    case 'connection':
      console.log('🔗 Processing connection request');
      return {
        id: Date.now().toString(),
        type: 'assistant',
        content: 'Here are the connection details for your Supabase database:',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        showConnectionDetails: true
      };
    
    case 'schema':
      console.log('📋 Processing schema request');
      result = await getDatabaseSchema();
      if (result.found && result.data) {
        const tableNames = result.data.map((t: any) => t.table_name).join(', ');
        responseContent = `I found ${result.data.length} accessible table${result.data.length === 1 ? '' : 's'} in your database: **${tableNames}**. Would you like me to show data from any specific table?`;
      } else {
        responseContent = `I'm having trouble accessing your database tables. ${result.error || ''}`;
        
        if (result.diagnostics?.suggestedFix) {
          responseContent += `\n\n${result.diagnostics.suggestedFix}`;
        }
        
        showConnectionDetails = true;
      }
      break;
    
    case 'aggregate':
      console.log('🧮 Processing aggregate request');
      result = await performAggregateQuery(query);
      if (result.found && result.data) {
        const countData = result.data[0];
        responseContent = `I found ${countData.count} record${countData.count === 1 ? '' : 's'} in the "${countData.table}" table.`;
      } else {
        responseContent = `Sorry, I couldn't perform the requested calculation. ${result.error || ''}`;
        if (result.diagnostics?.suggestedFix) {
          responseContent += `\n\n${result.diagnostics.suggestedFix}`;
        }
        showConnectionDetails = true;
      }
      break;
    
    case 'data':
      console.log('📊 Processing data request for table:', table);
      result = await queryTableData(table);
      if (result.found && result.data && result.columns) {
        responseContent = `Here's a preview of the "${result.tableName}" table with ${result.data.length} record${result.data.length === 1 ? '' : 's'}:`;
        
        // Convert data to table format
        tableData = {
          tableName: result.tableName || 'Unknown',
          database: 'Supabase Database',
          columns: result.columns,
          rows: result.data.map((row: any) => 
            result.columns!.map(col => String(row[col] || ''))
          )
        };
      } else {
        responseContent = `Sorry, I cannot find the requested data in the database. ${result.error || ''}`;
        
        if (result.diagnostics?.suggestedFix) {
          responseContent += `\n\n${result.diagnostics.suggestedFix}`;
        }
        
        showConnectionDetails = true;
      }
      break;
    
    default:
      console.log('🔍 Processing general request');
      // Try to get any available data as a general response
      result = await queryTableData();
      if (result.found && result.data && result.columns) {
        responseContent = `I found some data in your database. Here's a preview of the "${result.tableName}" table:`;
        
        tableData = {
          tableName: result.tableName || 'Unknown',
          database: 'Supabase Database',
          columns: result.columns,
          rows: result.data.map((row: any) => 
            result.columns!.map(col => String(row[col] || ''))
          )
        };
      } else {
        responseContent = `I'm connected to your Supabase database, but I cannot access data for "${query}". ${result.error || ''}`;
        
        if (result.diagnostics?.suggestedFix) {
          responseContent += `\n\n${result.diagnostics.suggestedFix}`;
        }
        
        showConnectionDetails = true;
      }
  }
  
  console.log('📤 Returning response with context awareness:', {
    hasTableData: !!tableData,
    showConnectionDetails,
    responseLength: responseContent.length,
    hasDiagnostics: !!result?.diagnostics,
    wasContextual: !!conversationContext.suggestedAction
  });

  return {
    id: Date.now().toString(),
    type: 'assistant',
    content: responseContent,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    tableData,
    showConnectionDetails
  };
}