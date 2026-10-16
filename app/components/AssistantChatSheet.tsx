'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import AssistantBotIcon from './AssistantBotIcon';
import { IconX } from './icons';

const ASSISTANT_NAME = process.env.NEXT_PUBLIC_ASSISTANT_NAME || 'Provost';

interface AssistantChatSheetProps {
  onClose: () => void;
}

export default function AssistantChatSheet({ onClose }: AssistantChatSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isMounted] = useState(true); // is always mounted when rendered
  const dragStartY = useRef(0);
  const dragCurrentY = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Focus management
  useEffect(() => {
    // Focus close button when sheet opens
    setTimeout(() => closeButtonRef.current?.focus(), 100);

    // Trap focus within the sheet
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Handle touch drag for mobile bottom sheet
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartY.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    dragCurrentY.current = e.touches[0].clientY;
    const diff = dragCurrentY.current - dragStartY.current;
    if (diff > 0) {
      setDragOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // If dragged down more than 100px, close the sheet
    if (dragOffset > 100) {
      onClose();
    } else {
      setDragOffset(0);
    }
  };

  // Prevent body scroll when sheet is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!isMounted) return null;

  const sheetContent = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Mobile bottom sheet */}
      <div
        ref={sheetRef}
        className="
          fixed bottom-0 left-0 right-0 z-50 bg-[#FAF8F4] rounded-t-2xl shadow-2xl
          max-h-[85vh] flex flex-col transform transition-transform lg:hidden
        "
        style={{
          transform: `translateY(${dragOffset}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-title"
      >
        {/* Drag handle */}
        <div
          className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-[#E8E3DA] cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
        
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-[#E8E3DA]">
          <AssistantBotIcon size={40} />
          <div className="flex-1">
            <h2 id="assistant-title" className="font-semibold text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
              {ASSISTANT_NAME}
            </h2>
            <p className="text-xs text-[#6B7280]">AI assistant. Always check the official page.</p>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close assistant"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#F0EDE6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A524]"
          >
            <IconX className="h-5 w-5 text-[#14213D]" />
          </button>
        </div>

        {/* Chat area - placeholder for Step 2 */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-4">
            {/* Welcome message will go here in Step 2 */}
            <div className="flex gap-3">
              <AssistantBotIcon size={32} />
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 border border-[#E8E3DA] max-w-[80%]">
                <p className="text-sm text-[#14213D]">
                  Hi, I&apos;m {ASSISTANT_NAME}, the Provost assistant. I can find opportunities you qualify for, explain your matches, and help you get ready. What would you like to do?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Input area - placeholder */}
        <div className="border-t border-[#E8E3DA] p-4">
          <div className="flex items-end gap-2">
            <textarea
              placeholder="Type a message..."
              className="flex-1 resize-none rounded-xl border border-[#E8E3DA] bg-white px-4 py-3 text-sm text-[#14213D] outline-none focus:border-[#14213D] min-h-[44px] max-h-32"
              rows={1}
              disabled
            />
            <button
              disabled
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5A524] text-white disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-5-9-9-5 20-7z" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-xs text-[#6B7280] text-center">5 messages left today</p>
        </div>
      </div>

      {/* Desktop floating panel */}
      <div
        className="
          hidden lg:flex fixed bottom-8 right-8 z-50 w-[380px] h-[600px] max-h-[calc(100vh-64px)]
          bg-[#FAF8F4] rounded-2xl shadow-2xl border border-[#E8E3DA] flex-col
        "
        role="dialog"
        aria-modal="true"
        aria-labelledby="assistant-title-desktop"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-[#E8E3DA] rounded-t-2xl bg-white">
          <AssistantBotIcon size={40} />
          <div className="flex-1">
            <h2 id="assistant-title-desktop" className="font-semibold text-[#14213D]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
              {ASSISTANT_NAME}
            </h2>
            <p className="text-xs text-[#6B7280]">AI assistant. Always check the official page.</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close assistant"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[#F0EDE6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A524]"
          >
            <IconX className="h-5 w-5 text-[#14213D]" />
          </button>
        </div>

        {/* Chat area - placeholder for Step 2 */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-4">
            {/* Welcome message */}
            <div className="flex gap-3">
              <AssistantBotIcon size={32} />
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 border border-[#E8E3DA] max-w-[80%]">
                <p className="text-sm text-[#14213D]">
                  Hi, I&apos;m {ASSISTANT_NAME}, the Provost assistant. I can find opportunities you qualify for, explain your matches, and help you get ready. What would you like to do?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Input area - placeholder */}
        <div className="border-t border-[#E8E3DA] p-4 bg-white rounded-b-2xl">
          <div className="flex items-end gap-2">
            <textarea
              placeholder="Type a message..."
              className="flex-1 resize-none rounded-xl border border-[#E8E3DA] bg-[#FAF8F4] px-4 py-3 text-sm text-[#14213D] outline-none focus:border-[#14213D] min-h-[44px] max-h-32"
              rows={1}
              disabled
            />
            <button
              disabled
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5A524] text-white disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-5-9-9-5 20-7z" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-xs text-[#6B7280] text-center">5 messages left today</p>
        </div>
      </div>
    </>
  );

  return createPortal(sheetContent, document.body);
}