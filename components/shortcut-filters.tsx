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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if we're in the shortcut filters area or if a button is focused
      const target = event.target as HTMLElement;
      const isInFilters =
        target.closest(".shortcut-filters") ||
        buttonRefs.current.includes(target as HTMLButtonElement);

      if (isInFilters && focusedIndex >= 0) {
        const currentIndex = focusedIndex;
        let newIndex = currentIndex;

        switch (event.key) {
          case "Tab":
            event.preventDefault();
            if (event.shiftKey) {
              newIndex =
                currentIndex <= 0 ? filters.length - 1 : currentIndex - 1;
            } else {
              newIndex =
                currentIndex >= filters.length - 1 ? 0 : currentIndex + 1;
            }
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
            // Move down by 4 (one row in 4-column grid) or to end if near bottom
            const cols =
              window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 3 : 2;
            newIndex =
              currentIndex + cols >= filters.length
                ? (currentIndex + cols) % filters.length
                : currentIndex + cols;
            break;
          case "ArrowUp":
            event.preventDefault();
            // Move up by 4 (one row in 4-column grid) or wrap to end
            const colsUp =
              window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 3 : 2;
            newIndex =
              currentIndex - colsUp < 0
                ? filters.length + (currentIndex - colsUp)
                : currentIndex - colsUp;
            break;
          case "Enter":
          case " ":
            event.preventDefault();
            if (currentIndex >= 0 && currentIndex < filters.length) {
              const filter = filters[currentIndex];
              const isActive = activeFilter === filter.name;
              setActiveFilter(isActive ? null : filter.name);
            }
            break;
          case "Escape":
            event.preventDefault();
            setActiveFilter(null);
            setFocusedIndex(-1);
            // Focus back to container
            document.querySelector(".shortcut-filters")?.focus();
            break;
          default:
            return;
        }

        if (
          newIndex !== currentIndex &&
          newIndex >= 0 &&
          newIndex < filters.length
        ) {
          setFocusedIndex(newIndex);
          buttonRefs.current[newIndex]?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [focusedIndex, activeFilter, setActiveFilter, filters.length]);

  return (
    <div
      className="shortcut-filters grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 rounded-lg bg-[var(--muted)] shadow-inner transition-colors duration-300"
      tabIndex={0}
      onClick={() => {
        // Initiate keyboard navigation when container is clicked
        if (focusedIndex === -1) {
          setFocusedIndex(0);
          buttonRefs.current[0]?.focus();
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
            }}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => {
              // Only clear focus if we're not navigating to another button
              setTimeout(() => {
                if (!document.activeElement?.closest(".shortcut-filters")) {
                  setFocusedIndex(-1);
                }
              }, 0);
            }}
            className={cn(
              "flex flex-col items-center justify-start w-full h-32 p-4 rounded-lg transition-all duration-200",
              "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/90",
              isActive &&
                "bg-red-200 text-red-800 hover:bg-red-300 shadow-lg scale-105 dark:bg-red-900 dark:text-white dark:hover:bg-red-800",
              isFocused && "ring-2 ring-[var(--ring)] ring-offset-2"
            )}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <filter.icon
              className={cn(
                "size-8 mb-2 flex-shrink-0 transition-all duration-200",
                isActive && "text-orange-600 dark:text-orange-300"
              )}
            />
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
            <span className="sr-only">Filter by {filter.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
