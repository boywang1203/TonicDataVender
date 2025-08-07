import { useState } from "react";
import HomeWithSearch from "./components/HomeWithSearch";
import Chat from "./components/Chat";

type View = 'home' | 'chat';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView('chat');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSearchQuery('');
  };

  return (
    <>
      {currentView === 'home' && (
        <HomeWithSearch onSearch={handleSearch} />
      )}
      {currentView === 'chat' && (
        <Chat 
          initialQuery={searchQuery} 
          onBackToHome={handleBackToHome} 
        />
      )}
    </>
  );
}