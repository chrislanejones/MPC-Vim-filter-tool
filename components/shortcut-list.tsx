"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ShortcutListProps {
  activeFilter: string | null;
  activeEditor: "vim" | "neovim";
}

const shortcuts = [
  // VIM SHORTCUTS
  {
    command: "dd",
    description: "Delete (cut) current line",
    category: "cut",
    editor: "vim",
  },
  {
    command: "dw",
    description: "Delete (cut) word",
    category: "cut",
    editor: "vim",
  },
  {
    command: "d$",
    description: "Delete (cut) to end of line",
    category: "cut",
    editor: "vim",
  },
  {
    command: "x",
    description: "Delete (cut) character under cursor",
    category: "cut",
    editor: "vim",
  },
  {
    command: "D",
    description: "Delete (cut) to end of line (same as d$)",
    category: "cut",
    editor: "vim",
  },

  {
    command: "yy",
    description: "Yank (copy) current line",
    category: "copy",
    editor: "vim",
  },
  {
    command: "yw",
    description: "Yank (copy) word",
    category: "copy",
    editor: "vim",
  },
  {
    command: "y$",
    description: "Yank (copy) to end of line",
    category: "copy",
    editor: "vim",
  },
  {
    command: "Y",
    description: "Yank (copy) current line (same as yy)",
    category: "copy",
    editor: "vim",
  },

  {
    command: "p",
    description: "Paste after cursor",
    category: "paste",
    editor: "vim",
  },
  {
    command: "P",
    description: "Paste before cursor",
    category: "paste",
    editor: "vim",
  },
  {
    command: '"ap',
    description: 'Paste from register "a"',
    category: "paste",
    editor: "vim",
  },
  {
    command: '"*p',
    description: "Paste from system clipboard",
    category: "paste",
    editor: "vim",
  },
  {
    command: "gp",
    description: "Paste and leave cursor after new text",
    category: "paste",
    editor: "vim",
  },
  {
    command: "gP",
    description: "Paste before and leave cursor after new text",
    category: "paste",
    editor: "vim",
  },

  {
    command: ">>",
    description: "Indent line right",
    category: "move",
    editor: "vim",
  },
  {
    command: "<<",
    description: "Indent line left",
    category: "move",
    editor: "vim",
  },
  { command: "J", description: "Join lines", category: "move", editor: "vim" },
  {
    command: "h",
    description: "Move cursor left",
    category: "move",
    editor: "vim",
  },
  {
    command: "j",
    description: "Move cursor down",
    category: "move",
    editor: "vim",
  },
  {
    command: "k",
    description: "Move cursor up",
    category: "move",
    editor: "vim",
  },
  {
    command: "l",
    description: "Move cursor right",
    category: "move",
    editor: "vim",
  },
  {
    command: "w",
    description: "Move to next word",
    category: "move",
    editor: "vim",
  },
  {
    command: "b",
    description: "Move to beginning of word",
    category: "move",
    editor: "vim",
  },
  {
    command: "0",
    description: "Move to beginning of line",
    category: "move",
    editor: "vim",
  },
  {
    command: "$",
    description: "Move to end of line",
    category: "move",
    editor: "vim",
  },
  {
    command: "f<char>",
    description: "Find character forward in line",
    category: "move",
    editor: "vim",
  },
  {
    command: "t<char>",
    description: "Move to before character in line",
    category: "move",
    editor: "vim",
  },
  {
    command: ";",
    description: "Repeat last f/t command",
    category: "move",
    editor: "vim",
  },
  {
    command: "gg",
    description: "Go to beginning of file",
    category: "move",
    editor: "vim",
  },
  {
    command: "G",
    description: "Go to end of file",
    category: "move",
    editor: "vim",
  },

  // Shortcuts for 'delete'
  {
    command: "dd",
    description: "Delete current line",
    category: "delete",
    editor: "vim",
  },
  {
    command: "dG",
    description: "Delete to end of file",
    category: "delete",
    editor: "vim",
  },
  {
    command: "dgg",
    description: "Delete to beginning of file",
    category: "delete",
    editor: "vim",
  },
  {
    command: "C",
    description: "Delete to end of line and enter insert mode",
    category: "delete",
    editor: "vim",
  },
  {
    command: "cc",
    description: "Change entire line",
    category: "delete",
    editor: "vim",
  },
  {
    command: "cw",
    description: "Change word",
    category: "delete",
    editor: "vim",
  },

  // Shortcuts for 'exit'
  {
    command: ":q",
    description: "Quit (close current window/buffer)",
    category: "exit",
    editor: "vim",
  },
  {
    command: ":q!",
    description: "Quit without saving",
    category: "exit",
    editor: "vim",
  },
  {
    command: ":wq",
    description: "Write and quit",
    category: "exit",
    editor: "vim",
  },
  {
    command: ":x",
    description: "Write and quit (only if changes were made)",
    category: "exit",
    editor: "vim",
  },
  {
    command: "ZZ",
    description: "Save and quit (shortcut for :wq)",
    category: "exit",
    editor: "vim",
  },
  {
    command: "ZQ",
    description: "Quit without saving (shortcut for :q!)",
    category: "exit",
    editor: "vim",
  },

  // Shortcuts for 'save'
  {
    command: ":w",
    description: "Write (save) the current file",
    category: "save",
    editor: "vim",
  },
  {
    command: ":w new_file",
    description: "Save to a new file",
    category: "save",
    editor: "vim",
  },
  {
    command: ":wa",
    description: "Save all open files",
    category: "save",
    editor: "vim",
  },

  // Shortcuts for 'search_replace'
  {
    command: "/",
    description: "Search forward",
    category: "search_replace",
    editor: "vim",
  },
  {
    command: "?",
    description: "Search backward",
    category: "search_replace",
    editor: "vim",
  },
  {
    command: "n",
    description: "Next search result",
    category: "search_replace",
    editor: "vim",
  },
  {
    command: "N",
    description: "Previous search result",
    category: "search_replace",
    editor: "vim",
  },
  {
    command: ":%s/old/new/g",
    description: 'Replace all occurrences of "old" with "new" globally',
    category: "search_replace",
    editor: "vim",
  },
  {
    command: ":%s/old/new/gc",
    description: "Replace all occurrences with confirmation",
    category: "search_replace",
    editor: "vim",
  },
  {
    command: "*",
    description: "Search for word under cursor forward",
    category: "search_replace",
    editor: "vim",
  },
  {
    command: "#",
    description: "Search for word under cursor backward",
    category: "search_replace",
    editor: "vim",
  },

  // Shortcuts for 'diff'
  {
    command: ":diffthis",
    description: "Start diffing current buffer with another",
    category: "diff",
    editor: "vim",
  },
  {
    command: ":diffsplit",
    description: "Open a new window with diff of current file",
    category: "diff",
    editor: "vim",
  },
  {
    command: "]c",
    description: "Jump to next diff hunk",
    category: "diff",
    editor: "vim",
  },
  {
    command: "[c",
    description: "Jump to previous diff hunk",
    category: "diff",
    editor: "vim",
  },

  // Shortcuts for 'tabs'
  {
    command: ":tabnew",
    description: "Open a new tab",
    category: "tabs",
    editor: "vim",
  },
  {
    command: "gt",
    description: "Go to next tab",
    category: "tabs",
    editor: "vim",
  },
  {
    command: "gT",
    description: "Go to previous tab",
    category: "tabs",
    editor: "vim",
  },
  {
    command: ":tabclose",
    description: "Close current tab",
    category: "tabs",
    editor: "vim",
  },
  {
    command: ":tabs",
    description: "List all tabs",
    category: "tabs",
    editor: "vim",
  },

  // Shortcuts for 'marks_positions'
  {
    command: "ma",
    description: 'Set mark "a" at current position',
    category: "marks_positions",
    editor: "vim",
  },
  {
    command: "`a",
    description: 'Jump to mark "a" (exact position)',
    category: "marks_positions",
    editor: "vim",
  },
  {
    command: "'a",
    description: 'Jump to mark "a" (beginning of line)',
    category: "marks_positions",
    editor: "vim",
  },
  {
    command: "``",
    description: "Jump to last edit position (exact)",
    category: "marks_positions",
    editor: "vim",
  },
  {
    command: "''",
    description: "Jump to last edit position (beginning of line)",
    category: "marks_positions",
    editor: "vim",
  },

  // Shortcuts for 'visual_commands'
  {
    command: "v",
    description: "Start visual mode (character-wise)",
    category: "visual_commands",
    editor: "vim",
  },
  {
    command: "V",
    description: "Start visual line mode (line-wise)",
    category: "visual_commands",
    editor: "vim",
  },
  {
    command: "Ctrl+v",
    description: "Start visual block mode (block-wise)",
    category: "visual_commands",
    editor: "vim",
  },
  {
    command: "y",
    description: "Yank (copy) visual selection",
    category: "visual_commands",
    editor: "vim",
  },
  {
    command: "d",
    description: "Delete visual selection",
    category: "visual_commands",
    editor: "vim",
  },

  // Shortcuts for 'macros'
  {
    command: "q<register>",
    description: "Start recording macro into register (e.g., qa)",
    category: "macros",
    editor: "vim",
  },
  {
    command: "q",
    description: "Stop recording macro",
    category: "macros",
    editor: "vim",
  },
  {
    command: "@<register>",
    description: "Execute macro from register (e.g., @a)",
    category: "macros",
    editor: "vim",
  },
  {
    command: "@@",
    description: "Repeat last executed macro",
    category: "macros",
    editor: "vim",
  },

  // Shortcuts for 'multi_file_search'
  {
    command: ":grep <pattern> <files>",
    description: "Search for pattern in files",
    category: "multi_file_search",
    editor: "vim",
  },
  {
    command: ":vimgrep <pattern> <files>",
    description: "Vim-specific grep",
    category: "multi_file_search",
    editor: "vim",
  },
  {
    command: ":args",
    description: "List files in argument list",
    category: "multi_file_search",
    editor: "vim",
  },
  {
    command: ":next",
    description: "Go to next file in argument list",
    category: "multi_file_search",
    editor: "vim",
  },
  {
    command: ":prev",
    description: "Go to previous file in argument list",
    category: "multi_file_search",
    editor: "vim",
  },

  // Shortcuts for 'insert_mode'
  {
    command: "i",
    description: "Insert before cursor",
    category: "insert_mode",
    editor: "vim",
  },
  {
    command: "I",
    description: "Insert at beginning of line",
    category: "insert_mode",
    editor: "vim",
  },
  {
    command: "a",
    description: "Append after cursor",
    category: "insert_mode",
    editor: "vim",
  },
  {
    command: "A",
    description: "Append at end of line",
    category: "insert_mode",
    editor: "vim",
  },
  {
    command: "o",
    description: "Open new line below and insert",
    category: "insert_mode",
    editor: "vim",
  },
  {
    command: "O",
    description: "Open new line above and insert",
    category: "insert_mode",
    editor: "vim",
  },
  {
    command: "s",
    description: "Delete character and insert",
    category: "insert_mode",
    editor: "vim",
  },
  {
    command: "S",
    description: "Delete line and insert",
    category: "insert_mode",
    editor: "vim",
  },
  {
    command: "R",
    description: "Replace characters (overwrite)",
    category: "insert_mode",
    editor: "vim",
  },
  {
    command: "r",
    description: "Replace single character",
    category: "insert_mode",
    editor: "vim",
  },

  // Shortcuts for 'indent'
  {
    command: "==",
    description: "Auto-indent current line",
    category: "indent",
    editor: "vim",
  },
  {
    command: "gg=G",
    description: "Auto-indent entire file",
    category: "indent",
    editor: "vim",
  },
  {
    command: ">",
    description: "Indent selected text (visual mode)",
    category: "indent",
    editor: "vim",
  },
  {
    command: "<",
    description: "Unindent selected text (visual mode)",
    category: "indent",
    editor: "vim",
  },

  // Shortcuts for 'move_screen_commands'
  {
    command: "Ctrl+f",
    description: "Page down (forward)",
    category: "move_screen_commands",
    editor: "vim",
  },
  {
    command: "Ctrl+b",
    description: "Page up (backward)",
    category: "move_screen_commands",
    editor: "vim",
  },
  {
    command: "Ctrl+d",
    description: "Scroll down half page",
    category: "move_screen_commands",
    editor: "vim",
  },
  {
    command: "Ctrl+u",
    description: "Scroll up half page",
    category: "move_screen_commands",
    editor: "vim",
  },
  {
    command: "zz",
    description: "Center screen on cursor",
    category: "move_screen_commands",
    editor: "vim",
  },
  {
    command: "zt",
    description: "Move cursor line to top of screen",
    category: "move_screen_commands",
    editor: "vim",
  },
  {
    command: "zb",
    description: "Move cursor line to bottom of screen",
    category: "move_screen_commands",
    editor: "vim",
  },

  // Shortcuts for 'registers'
  {
    command: '"ay',
    description: 'Yank into register "a"',
    category: "registers",
    editor: "vim",
  },
  {
    command: '"ap',
    description: 'Paste from register "a"',
    category: "registers",
    editor: "vim",
  },
  {
    command: ":reg",
    description: "Display contents of all registers",
    category: "registers",
    editor: "vim",
  },
  {
    command: ":reg a",
    description: 'Display content of register "a"',
    category: "registers",
    editor: "vim",
  },
  {
    command: '"+y',
    description: "Yank to system clipboard",
    category: "registers",
    editor: "vim",
  },
  {
    command: '"+p',
    description: "Paste from system clipboard",
    category: "registers",
    editor: "vim",
  },

  // Shortcuts for 'undo_redo'
  {
    command: "u",
    description: "Undo last change",
    category: "undo_redo",
    editor: "vim",
  },
  {
    command: "Ctrl+r",
    description: "Redo last change",
    category: "undo_redo",
    editor: "vim",
  },
  {
    command: "U",
    description: "Undo all changes on current line",
    category: "undo_redo",
    editor: "vim",
  },
  {
    command: ":earlier <time>",
    description: "Go back in time (e.g., :earlier 1h)",
    category: "undo_redo",
    editor: "vim",
  },
  {
    command: ":later <time>",
    description: "Go forward in time",
    category: "undo_redo",
    editor: "vim",
  },

  // Shortcuts for 'window_management'
  {
    command: ":sp",
    description: "Split window horizontally",
    category: "window_management",
    editor: "vim",
  },
  {
    command: ":vsp",
    description: "Split window vertically",
    category: "window_management",
    editor: "vim",
  },
  {
    command: "Ctrl+w h",
    description: "Move to left window",
    category: "window_management",
    editor: "vim",
  },
  {
    command: "Ctrl+w j",
    description: "Move to lower window",
    category: "window_management",
    editor: "vim",
  },
  {
    command: "Ctrl+w k",
    description: "Move to upper window",
    category: "window_management",
    editor: "vim",
  },
  {
    command: "Ctrl+w l",
    description: "Move to right window",
    category: "window_management",
    editor: "vim",
  },
  {
    command: "Ctrl+w q",
    description: "Close current window",
    category: "window_management",
    editor: "vim",
  },
  {
    command: "Ctrl+w o",
    description: "Close all other windows",
    category: "window_management",
    editor: "vim",
  },
  {
    command: "Ctrl+w =",
    description: "Make all windows equal size",
    category: "window_management",
    editor: "vim",
  },
  {
    command: "Ctrl+w r",
    description: "Rotate windows",
    category: "window_management",
    editor: "vim",
  },

  // NEOVIM SHORTCUTS
  // Basic NeoVim shortcuts (inherit most from Vim)
  {
    command: "dd",
    description: "Delete (cut) current line",
    category: "cut",
    editor: "neovim",
  },
  {
    command: "dw",
    description: "Delete (cut) word",
    category: "cut",
    editor: "neovim",
  },
  {
    command: "d$",
    description: "Delete (cut) to end of line",
    category: "cut",
    editor: "neovim",
  },
  {
    command: "x",
    description: "Delete (cut) character under cursor",
    category: "cut",
    editor: "neovim",
  },
  {
    command: "D",
    description: "Delete (cut) to end of line (same as d$)",
    category: "cut",
    editor: "neovim",
  },

  {
    command: "yy",
    description: "Yank (copy) current line",
    category: "copy",
    editor: "neovim",
  },
  {
    command: "yw",
    description: "Yank (copy) word",
    category: "copy",
    editor: "neovim",
  },
  {
    command: "y$",
    description: "Yank (copy) to end of line",
    category: "copy",
    editor: "neovim",
  },
  {
    command: "Y",
    description: "Yank (copy) current line (same as yy)",
    category: "copy",
    editor: "neovim",
  },

  {
    command: "p",
    description: "Paste after cursor",
    category: "paste",
    editor: "neovim",
  },
  {
    command: "P",
    description: "Paste before cursor",
    category: "paste",
    editor: "neovim",
  },
  {
    command: '"ap',
    description: 'Paste from register "a"',
    category: "paste",
    editor: "neovim",
  },
  {
    command: '"+p',
    description: "Paste from system clipboard (enhanced)",
    category: "paste",
    editor: "neovim",
  },
  {
    command: "gp",
    description: "Paste and leave cursor after new text",
    category: "paste",
    editor: "neovim",
  },
  {
    command: "gP",
    description: "Paste before and leave cursor after new text",
    category: "paste",
    editor: "neovim",
  },

  // NeoVim enhanced movement
  {
    command: ">>",
    description: "Indent line right",
    category: "move",
    editor: "neovim",
  },
  {
    command: "<<",
    description: "Indent line left",
    category: "move",
    editor: "neovim",
  },
  {
    command: "J",
    description: "Join lines",
    category: "move",
    editor: "neovim",
  },
  {
    command: "h",
    description: "Move cursor left",
    category: "move",
    editor: "neovim",
  },
  {
    command: "j",
    description: "Move cursor down",
    category: "move",
    editor: "neovim",
  },
  {
    command: "k",
    description: "Move cursor up",
    category: "move",
    editor: "neovim",
  },
  {
    command: "l",
    description: "Move cursor right",
    category: "move",
    editor: "neovim",
  },
  {
    command: "w",
    description: "Move to next word",
    category: "move",
    editor: "neovim",
  },
  {
    command: "b",
    description: "Move to beginning of word",
    category: "move",
    editor: "neovim",
  },
  {
    command: "0",
    description: "Move to beginning of line",
    category: "move",
    editor: "neovim",
  },
  {
    command: "$",
    description: "Move to end of line",
    category: "move",
    editor: "neovim",
  },
  {
    command: "f<char>",
    description: "Find character forward in line",
    category: "move",
    editor: "neovim",
  },
  {
    command: "t<char>",
    description: "Move to before character in line",
    category: "move",
    editor: "neovim",
  },
  {
    command: ";",
    description: "Repeat last f/t command",
    category: "move",
    editor: "neovim",
  },
  {
    command: "gg",
    description: "Go to beginning of file",
    category: "move",
    editor: "neovim",
  },
  {
    command: "G",
    description: "Go to end of file",
    category: "move",
    editor: "neovim",
  },
  {
    command: "gd",
    description: "Go to definition (LSP)",
    category: "move",
    editor: "neovim",
  },

  // NeoVim delete commands
  {
    command: "dd",
    description: "Delete current line",
    category: "delete",
    editor: "neovim",
  },
  {
    command: "dG",
    description: "Delete to end of file",
    category: "delete",
    editor: "neovim",
  },
  {
    command: "dgg",
    description: "Delete to beginning of file",
    category: "delete",
    editor: "neovim",
  },
  {
    command: "C",
    description: "Delete to end of line and enter insert mode",
    category: "delete",
    editor: "neovim",
  },
  {
    command: "cc",
    description: "Change entire line",
    category: "delete",
    editor: "neovim",
  },
  {
    command: "cw",
    description: "Change word",
    category: "delete",
    editor: "neovim",
  },

  // NeoVim exit commands
  {
    command: ":q",
    description: "Quit (close current window/buffer)",
    category: "exit",
    editor: "neovim",
  },
  {
    command: ":q!",
    description: "Quit without saving",
    category: "exit",
    editor: "neovim",
  },
  {
    command: ":wq",
    description: "Write and quit",
    category: "exit",
    editor: "neovim",
  },
  {
    command: ":x",
    description: "Write and quit (only if changes were made)",
    category: "exit",
    editor: "neovim",
  },
  {
    command: "ZZ",
    description: "Save and quit (shortcut for :wq)",
    category: "exit",
    editor: "neovim",
  },
  {
    command: "ZQ",
    description: "Quit without saving (shortcut for :q!)",
    category: "exit",
    editor: "neovim",
  },

  // NeoVim save commands
  {
    command: ":w",
    description: "Write (save) the current file",
    category: "save",
    editor: "neovim",
  },
  {
    command: ":w new_file",
    description: "Save to a new file",
    category: "save",
    editor: "neovim",
  },
  {
    command: ":wa",
    description: "Save all open files",
    category: "save",
    editor: "neovim",
  },

  // NeoVim enhanced search/replace with Telescope integration
  {
    command: "/",
    description: "Search forward",
    category: "search_replace",
    editor: "neovim",
  },
  {
    command: "?",
    description: "Search backward",
    category: "search_replace",
    editor: "neovim",
  },
  {
    command: "n",
    description: "Next search result",
    category: "search_replace",
    editor: "neovim",
  },
  {
    command: "N",
    description: "Previous search result",
    category: "search_replace",
    editor: "neovim",
  },
  {
    command: ":%s/old/new/g",
    description: "Replace all occurrences globally",
    category: "search_replace",
    editor: "neovim",
  },
  {
    command: ":Telescope live_grep",
    description: "Live grep search with Telescope",
    category: "search_replace",
    editor: "neovim",
  },
  {
    command: ":Telescope find_files",
    description: "Find files with Telescope",
    category: "search_replace",
    editor: "neovim",
  },
  {
    command: "*",
    description: "Search for word under cursor forward",
    category: "search_replace",
    editor: "neovim",
  },
  {
    command: "#",
    description: "Search for word under cursor backward",
    category: "search_replace",
    editor: "neovim",
  },

  // NeoVim diff commands
  {
    command: ":diffthis",
    description: "Start diffing current buffer",
    category: "diff",
    editor: "neovim",
  },
  {
    command: ":diffsplit",
    description: "Open diff in split window",
    category: "diff",
    editor: "neovim",
  },
  {
    command: "]c",
    description: "Jump to next diff hunk",
    category: "diff",
    editor: "neovim",
  },
  {
    command: "[c",
    description: "Jump to previous diff hunk",
    category: "diff",
    editor: "neovim",
  },

  // NeoVim tabs
  {
    command: ":tabnew",
    description: "Open a new tab",
    category: "tabs",
    editor: "neovim",
  },
  {
    command: "gt",
    description: "Go to next tab",
    category: "tabs",
    editor: "neovim",
  },
  {
    command: "gT",
    description: "Go to previous tab",
    category: "tabs",
    editor: "neovim",
  },
  {
    command: ":tabclose",
    description: "Close current tab",
    category: "tabs",
    editor: "neovim",
  },
  {
    command: ":tabs",
    description: "List all tabs",
    category: "tabs",
    editor: "neovim",
  },

  // NeoVim marks and positions
  {
    command: "ma",
    description: 'Set mark "a" at current position',
    category: "marks_positions",
    editor: "neovim",
  },
  {
    command: "`a",
    description: 'Jump to mark "a" (exact position)',
    category: "marks_positions",
    editor: "neovim",
  },
  {
    command: "'a",
    description: 'Jump to mark "a" (beginning of line)',
    category: "marks_positions",
    editor: "neovim",
  },
  {
    command: "``",
    description: "Jump to last edit position (exact)",
    category: "marks_positions",
    editor: "neovim",
  },
  {
    command: "''",
    description: "Jump to last edit position (beginning of line)",
    category: "marks_positions",
    editor: "neovim",
  },

  // NeoVim visual commands
  {
    command: "v",
    description: "Start visual mode (character-wise)",
    category: "visual_commands",
    editor: "neovim",
  },
  {
    command: "V",
    description: "Start visual line mode (line-wise)",
    category: "visual_commands",
    editor: "neovim",
  },
  {
    command: "Ctrl+v",
    description: "Start visual block mode (block-wise)",
    category: "visual_commands",
    editor: "neovim",
  },
  {
    command: "y",
    description: "Yank (copy) visual selection",
    category: "visual_commands",
    editor: "neovim",
  },
  {
    command: "d",
    description: "Delete visual selection",
    category: "visual_commands",
    editor: "neovim",
  },

  // NeoVim macros
  {
    command: "q<register>",
    description: "Start recording macro into register",
    category: "macros",
    editor: "neovim",
  },
  {
    command: "q",
    description: "Stop recording macro",
    category: "macros",
    editor: "neovim",
  },
  {
    command: "@<register>",
    description: "Execute macro from register",
    category: "macros",
    editor: "neovim",
  },
  {
    command: "@@",
    description: "Repeat last executed macro",
    category: "macros",
    editor: "neovim",
  },

  // NeoVim enhanced multi-file search with Telescope
  {
    command: ":Telescope grep_string",
    description: "Search for string under cursor",
    category: "multi_file_search",
    editor: "neovim",
  },
  {
    command: ":Telescope live_grep",
    description: "Live grep across project",
    category: "multi_file_search",
    editor: "neovim",
  },
  {
    command: ":Telescope find_files",
    description: "Find files in project",
    category: "multi_file_search",
    editor: "neovim",
  },
  {
    command: ":Telescope buffers",
    description: "Search open buffers",
    category: "multi_file_search",
    editor: "neovim",
  },
  {
    command: ":Telescope oldfiles",
    description: "Search recently opened files",
    category: "multi_file_search",
    editor: "neovim",
  },

  // NeoVim insert mode
  {
    command: "i",
    description: "Insert before cursor",
    category: "insert_mode",
    editor: "neovim",
  },
  {
    command: "I",
    description: "Insert at beginning of line",
    category: "insert_mode",
    editor: "neovim",
  },
  {
    command: "a",
    description: "Append after cursor",
    category: "insert_mode",
    editor: "neovim",
  },
  {
    command: "A",
    description: "Append at end of line",
    category: "insert_mode",
    editor: "neovim",
  },
  {
    command: "o",
    description: "Open new line below and insert",
    category: "insert_mode",
    editor: "neovim",
  },
  {
    command: "O",
    description: "Open new line above and insert",
    category: "insert_mode",
    editor: "neovim",
  },
  {
    command: "s",
    description: "Delete character and insert",
    category: "insert_mode",
    editor: "neovim",
  },
  {
    command: "S",
    description: "Delete line and insert",
    category: "insert_mode",
    editor: "neovim",
  },
  {
    command: "R",
    description: "Replace characters (overwrite)",
    category: "insert_mode",
    editor: "neovim",
  },
  {
    command: "r",
    description: "Replace single character",
    category: "insert_mode",
    editor: "neovim",
  },

  // NeoVim enhanced indentation with Tree-sitter
  {
    command: "==",
    description: "Auto-indent current line (Tree-sitter aware)",
    category: "indent",
    editor: "neovim",
  },
  {
    command: "gg=G",
    description: "Auto-indent entire file (Tree-sitter aware)",
    category: "indent",
    editor: "neovim",
  },
  {
    command: ">",
    description: "Indent selected text (visual mode)",
    category: "indent",
    editor: "neovim",
  },
  {
    command: "<",
    description: "Unindent selected text (visual mode)",
    category: "indent",
    editor: "neovim",
  },

  // NeoVim screen movement
  {
    command: "Ctrl+f",
    description: "Page down (forward)",
    category: "move_screen_commands",
    editor: "neovim",
  },
  {
    command: "Ctrl+b",
    description: "Page up (backward)",
    category: "move_screen_commands",
    editor: "neovim",
  },
  {
    command: "Ctrl+d",
    description: "Scroll down half page",
    category: "move_screen_commands",
    editor: "neovim",
  },
  {
    command: "Ctrl+u",
    description: "Scroll up half page",
    category: "move_screen_commands",
    editor: "neovim",
  },
  {
    command: "zz",
    description: "Center screen on cursor",
    category: "move_screen_commands",
    editor: "neovim",
  },
  {
    command: "zt",
    description: "Move cursor line to top of screen",
    category: "move_screen_commands",
    editor: "neovim",
  },
  {
    command: "zb",
    description: "Move cursor line to bottom of screen",
    category: "move_screen_commands",
    editor: "neovim",
  },

  // NeoVim enhanced registers
  {
    command: '"ay',
    description: 'Yank into register "a"',
    category: "registers",
    editor: "neovim",
  },
  {
    command: '"ap',
    description: 'Paste from register "a"',
    category: "registers",
    editor: "neovim",
  },
  {
    command: ":reg",
    description: "Display contents of all registers",
    category: "registers",
    editor: "neovim",
  },
  {
    command: ":reg a",
    description: 'Display content of register "a"',
    category: "registers",
    editor: "neovim",
  },
  {
    command: '"+y',
    description: "Yank to system clipboard (enhanced)",
    category: "registers",
    editor: "neovim",
  },
  {
    command: '"+p',
    description: "Paste from system clipboard (enhanced)",
    category: "registers",
    editor: "neovim",
  },

  // NeoVim undo/redo with enhanced undo tree
  {
    command: "u",
    description: "Undo last change",
    category: "undo_redo",
    editor: "neovim",
  },
  {
    command: "Ctrl+r",
    description: "Redo last change",
    category: "undo_redo",
    editor: "neovim",
  },
  {
    command: "U",
    description: "Undo all changes on current line",
    category: "undo_redo",
    editor: "neovim",
  },
  {
    command: ":earlier <time>",
    description: "Go back in time (enhanced)",
    category: "undo_redo",
    editor: "neovim",
  },
  {
    command: ":later <time>",
    description: "Go forward in time (enhanced)",
    category: "undo_redo",
    editor: "neovim",
  },
  {
    command: ":UndotreeToggle",
    description: "Toggle undo tree visualization",
    category: "undo_redo",
    editor: "neovim",
  },

  // NeoVim enhanced window management
  {
    command: ":sp",
    description: "Split window horizontally",
    category: "window_management",
    editor: "neovim",
  },
  {
    command: ":vsp",
    description: "Split window vertically",
    category: "window_management",
    editor: "neovim",
  },
  {
    command: "Ctrl+w h",
    description: "Move to left window",
    category: "window_management",
    editor: "neovim",
  },
  {
    command: "Ctrl+w j",
    description: "Move to lower window",
    category: "window_management",
    editor: "neovim",
  },
  {
    command: "Ctrl+w k",
    description: "Move to upper window",
    category: "window_management",
    editor: "neovim",
  },
  {
    command: "Ctrl+w l",
    description: "Move to right window",
    category: "window_management",
    editor: "neovim",
  },
  {
    command: "Ctrl+w q",
    description: "Close current window",
    category: "window_management",
    editor: "neovim",
  },
  {
    command: "Ctrl+w o",
    description: "Close all other windows",
    category: "window_management",
    editor: "neovim",
  },
  {
    command: "Ctrl+w =",
    description: "Make all windows equal size",
    category: "window_management",
    editor: "neovim",
  },
  {
    command: "Ctrl+w r",
    description: "Rotate windows",
    category: "window_management",
    editor: "neovim",
  },
  {
    command: ":checkhealth",
    description: "Check NeoVim health and configuration",
    category: "window_management",
    editor: "neovim",
  },
];

export function ShortcutList({
  activeFilter,
  activeEditor,
}: ShortcutListProps) {
  const { theme } = useTheme();

  const filteredShortcuts = shortcuts.filter(
    (shortcut) =>
      (activeFilter ? shortcut.category === activeFilter : true) &&
      (activeEditor ? shortcut.editor === activeEditor : true)
  );

  return (
    <div className="grid gap-4 p-4 rounded-lg bg-muted shadow-inner max-h-[calc(100vh-150px)] overflow-y-auto transition-colors duration-300">
      {filteredShortcuts.length === 0 ? (
        <p className="text-center text-muted-foreground text-lg py-8">
          No shortcuts found for this filter.
        </p>
      ) : (
        filteredShortcuts.map((shortcut, index) => (
          <Card
            key={index}
            className="bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold text-card-foreground">
                {shortcut.description}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p
                className="text-lg font-mono px-3 py-1 rounded-md inline-block"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-foreground)",
                }}
              >
                {shortcut.command}
              </p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
