"use client";

import { useEffect, useRef, useState } from "react";
import {
  Scissors,
  Copy,
  ArrowRight,
  Trash2,
  LogOut,
  Save,
  Search,
  GitCompare,
  FolderDot,
  Bookmark,
  SquareDashedMousePointer,
  Repeat,
  Files,
  Type,
  Indent,
  MonitorDot,
  ClipboardPaste,
  Database,
  History,
  LayoutPanelLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ShortcutFiltersProps {
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
}

const SAMPLE_BASE_TR505 =
  "https://oramics.github.io/sampled/DM/TR-505/samples/";
const soundMap: Record<string, string> = {
  cut: "tr505-kick.wav",
  copy: "tr505-snare.wav",
  paste: "tr505-hihat-closed.wav",
  delete: "tr505-clap.wav",
  move: "tr505-cowb-h.wav",
  save: "tr505-rim.wav",
  exit: "tr505-crash.wav",
  search_replace: "tr505-hihat-closed.wav",
  diff: "tr505-ride.wav",
  tabs: "tr505-conga-l.wav",
  marks_positions: "tr505-conga-h.wav",
  visual_commands: "tr505-tom-m.wav",
  macros: "tr505-tom-h.wav",
  multi_file_search: "tr505-tom-l.wav",
  insert_mode: "tr505-hihat-open.wav",
  indent: "tr505-clap.wav",
  move_screen_commands: "tr505-cowb-l.wav",
  registers: "tr505-timbal.wav",
  undo_redo: "tr505-conga-l.wav",
  window_management: "tr505-crash.wav",
};

function playSample(name: string) {
  const soundFile = soundMap[name];
  if (soundFile) {
    const audio = new Audio(SAMPLE_BASE_TR505 + soundFile);
    audio.play();
  }
}

export function ShortcutFilters({
  activeFilter,
  setActiveFilter,
}: ShortcutFiltersProps) {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filters = [
    { name: "exit", label: "Exit", icon: LogOut },
    { name: "cut", label: "Cut", icon: Scissors },
    { name: "copy", label: "Copy", icon: Copy },
    { name: "paste", label: "Paste", icon: ClipboardPaste },
    { name: "move", label: "Move", icon: ArrowRight },
    { name: "delete", label: "Delete", icon: Trash2 },
    { name: "save", label: "Save", icon: Save },
    { name: "search_replace", label: "Search/Replace", icon: Search },
    { name: "diff", label: "Diff", icon: GitCompare },
    { name: "tabs", label: "Tabs", icon: FolderDot },
    { name: "marks_positions", label: "Marks/Positions", icon: Bookmark },
    {
      name: "visual_commands",
      label: "Visual Commands",
      icon: SquareDashedMousePointer,
    },
    { name: "macros", label: "Macros", icon: Repeat },
    { name: "multi_file_search", label: "Multi-File Search", icon: Files },
    { name: "insert_mode", label: "Insert Mode", icon: Type },
    { name: "indent", label: "Indent", icon: Indent },
    { name: "move_screen_commands", label: "Move Screen", icon: MonitorDot },
    { name: "registers", label: "Registers", icon: Database },
    { name: "undo_redo", label: "Undo/Redo", icon: History },
    { name: "window_management", label: "Windows", icon: LayoutPanelLeft },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      const isInFilters =
        target.closest(".shortcut-filters") ||
        buttonRefs.current.includes(target as HTMLButtonElement);

      if (isInFilters) {
        const currentIndex = focusedIndex >= 0 ? focusedIndex : 0;
        let newIndex = currentIndex;

        switch (event.key) {
          case "Tab":
            event.preventDefault();
            newIndex = event.shiftKey
              ? currentIndex <= 0
                ? filters.length - 1
                : currentIndex - 1
              : currentIndex >= filters.length - 1
              ? 0
              : currentIndex + 1;
            break;
          case "ArrowRight":
            event.preventDefault();
            newIndex =
              currentIndex >= filters.length - 1 ? 0 : currentIndex + 1;
            break;
          case "ArrowLeft":
            event.preventDefault();
            newIndex =
              currentIndex <= 0 ? filters.length - 1 : currentIndex - 1;
            break;
          case "ArrowDown":
            event.preventDefault();
            const cols =
              window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 3 : 2;
            newIndex = currentIndex + cols;
            if (newIndex >= filters.length) newIndex = currentIndex % cols;
            break;
          case "ArrowUp":
            event.preventDefault();
            const colsUp =
              window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 3 : 2;
            newIndex = currentIndex - colsUp;
            if (newIndex < 0) {
              const column = currentIndex % colsUp;
              const lastRowStart =
                Math.floor((filters.length - 1) / colsUp) * colsUp;
              newIndex = lastRowStart + column;
              if (newIndex >= filters.length) newIndex -= colsUp;
            }
            break;
          case "Enter":
          case " ":
            event.preventDefault();
            const filterIndex =
              currentIndex >= 0 && currentIndex < filters.length
                ? currentIndex
                : 0;
            if (filterIndex >= 0 && filterIndex < filters.length) {
              const filter = filters[filterIndex];
              const isActive = activeFilter === filter.name;
              setActiveFilter(isActive ? null : filter.name);
              setFocusedIndex(filterIndex);
              playSample(filter.name);
            }
            break;
          case "Escape":
            event.preventDefault();
            setActiveFilter(null);
            setFocusedIndex(-1);
            (
              document.querySelector(".shortcut-filters") as HTMLElement | null
            )?.focus();
            break;
        }

        if (
          newIndex !== currentIndex &&
          newIndex >= 0 &&
          newIndex < filters.length
        ) {
          setFocusedIndex(newIndex);
          setTimeout(() => buttonRefs.current[newIndex]?.focus(), 0);
        } else if (focusedIndex < 0 && newIndex >= 0) {
          setFocusedIndex(newIndex);
          setTimeout(() => buttonRefs.current[newIndex]?.focus(), 0);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [focusedIndex, activeFilter, setActiveFilter, filters.length]);

  return (
    <div
      className="shortcut-filters grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 rounded-lg bg-muted shadow-inner transition-colors duration-300"
      role="group"
      aria-label="Filter shortcuts by category"
      tabIndex={focusedIndex < 0 ? 0 : -1}
      onFocus={() => {
        if (focusedIndex < 0) {
          setFocusedIndex(0);
          setTimeout(() => buttonRefs.current[0]?.focus(), 0);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Tab" && focusedIndex < 0) {
          e.preventDefault();
          setFocusedIndex(0);
          setTimeout(() => buttonRefs.current[0]?.focus(), 0);
        }
      }}
      onClick={() => {
        if (focusedIndex === -1) {
          setFocusedIndex(0);
          setTimeout(() => buttonRefs.current[0]?.focus(), 0);
        }
      }}
    >
      {filters.map((filter, index) => {
        const isActive = activeFilter === filter.name;
        const isFocused = focusedIndex === index;

        return (
          <Button
            key={filter.name}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            onClick={() => {
              const isCurrentlyActive = activeFilter === filter.name;
              setActiveFilter(isCurrentlyActive ? null : filter.name);
              setFocusedIndex(index);
              playSample(filter.name);
            }}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => {
              setTimeout(() => {
                if (!document.activeElement?.closest(".shortcut-filters")) {
                  setFocusedIndex(-1);
                }
              }, 0);
            }}
            tabIndex={focusedIndex === index ? 0 : -1}
            data-active={activeFilter === filter.name ? "true" : undefined}
            className={cn(
              "flex flex-col items-center justify-start w-full h-32 p-4 rounded-lg transition-all duration-200",
              "bg-secondary text-secondary-foreground hover:bg-secondary/90"
            )}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <filter.icon className="size-8 mb-2 flex-shrink-0 transition-all duration-200" />
            <div
              className="text-sm font-semibold text-center leading-tight px-2 flex-1 flex items-center justify-center w-full"
              style={{
                wordWrap: "break-word",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                hyphens: "auto",
                whiteSpace: "normal",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {filter.label}
            </div>
            <span className="sr-only">
              Filter by {filter.label}.{" "}
              {isActive
                ? "Currently active filter."
                : "Press Enter or Space to activate."}
            </span>
          </Button>
        );
      })}
    </div>
  );
}
