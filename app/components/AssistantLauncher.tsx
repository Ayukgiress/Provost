'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import AssistantBotIcon from './AssistantBotIcon';

// Lazy load the chat sheet only when first opened
const AssistantChatSheet = dynamic(() => import('./AssistantChatSheet'), {
  ssr: false,
  loading: () => null,
});

const ASSISTANT_NAME = process.env.NEXT_PUBLIC_ASSISTANT_NAME || 'Provost';
const FIRST_VISIT_KEY = 'provost_assistant_first_visit';

export default function AssistantLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasVisited, setHasVisited] = useState(true);
  const [showPulse, setShowPulse] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Check if this is the first visit
    const hasSeen = localStorage.getItem(FIRST_VISIT_KEY);
    if (!hasSeen) {
      setHasVisited(false);
      setShowPulse(true);
      localStorage.setItem(FIRST_VISIT_KEY, 'true');
      // Remove pulse after animation
      setTimeout(() => setShowPulse(false), 2000);
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setHasVisited(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Return focus to launcher when sheet closes
    launcherRef.current?.focus();
  };

  return (
    <>
      {/* Floating launcher button */}
      <button
        ref={launcherRef}
        onClick={handleOpen}
        aria-label={`Open ${ASSISTANT_NAME} assistant`}
        className={`
          fixed bottom-6 right-6 z-50 flex items-center justify-center
          min-h-[48px] min-w-[48px] h-[56px] w-[56px] rounded-full
          bg-[#14213D] text-white shadow-lg hover:bg-[#1d2a3e]
          transition-all focus-visible:outline-none focus-visible:ring-4
          focus-visible:ring-[#F5A524]/50 lg:bottom-8 lg:right-8
          ${showPulse ? 'animate-pulse-once' : ''}
          ${!hasVisited ? 'pr-16' : ''}
        `}
      >
        {/* Label that shows only on first visit */}
        {!hasVisited && (
          <span className="absolute right-full mr-3 whitespace-nowrap text-sm font-medium text-[#14213D] bg-white px-3 py-1.5 rounded-full shadow-md">
            Ask {ASSISTANT_NAME}
          </span>
        )}
        <AssistantBotIcon size={36} aria-hidden={false} />
      </button>

      {/* Chat sheet - only rendered when open */}
      {isOpen && <AssistantChatSheet onClose={handleClose} />}

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-once {
            animation: none !important;
          }
        }
        @keyframes pulse-once {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 10px 15px -3px rgba(20, 33, 61, 0.1), 0 4px 6px -4px rgba(20, 33, 61, 0.1);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 20px 25px -5px rgba(20, 33, 61, 0.15), 0 8px 10px -6px rgba(20, 33, 61, 0.1);
          }
        }
        .animate-pulse-once {
          animation: pulse-once 2s ease-in-out 1;
        }
      `}</style>
    </>
  );
}