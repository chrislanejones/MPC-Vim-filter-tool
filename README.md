# 🎛️ Vim & NeoVim Shortcut Filter

A sleek, MPC-inspired interface for browsing and filtering Vim and NeoVim keyboard shortcuts. Built with **Next.js**, **React**, and **Tailwind CSS**, featuring **keyboard accessibility**, **dark/light themes**, and **retro drum-machine sounds** powered by the TR-505 sample kit.

![MPC Theme](https://img.shields.io/badge/Theme-MPC_Inspired-orange)
![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3+-cyan)

---

## ✨ Features

- 🎹 **MPC-Inspired UI** with 20 drum pad-style filters
- 🎵 **TR-505 Drum Samples** for audio feedback on filter toggle
- 🔍 **Smart Filtering**: Toggleable shortcut categories
- ⌨️ **Full Keyboard Support**: Tab, arrows, space/enter, escape
- 🌗 **Theme Toggle**: Light & dark modes via `next-themes`
- 📱 **Responsive Layout**: Built for desktop + mobile
- ⚡ **Instant UX**: No loading delays or rerenders

---

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/yourusername/vim-shortcut-filter.git
cd vim-shortcut-filter
pnpm install

# Start dev server
pnpm dev
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 🎮 Keyboard Controls

| Key             | Action                                |
| --------------- | ------------------------------------- |
| Arrow Keys      | Navigate between filters              |
| Tab / Shift+Tab | Move focus forward/backward           |
| Enter / Space   | Toggle the active filter + play sound |
| Escape          | Clear selection and reset focus       |

---

## 🎨 Visual & Audio Feedback

- **Selected Filter**: Orange border (`ring`) + pressed styling
- **Focused Filter**: Subtle highlight ring
- **Sound**: TR-505 `.wav` sound triggered on filter activation

Example:

| Filter  | Sound                    |
| ------- | ------------------------ |
| Cut     | `tr505-kick.wav`         |
| Paste   | `tr505-hihat-closed.wav` |
| Delete  | `tr505-clap.wav`         |
| Macros  | `tr505-tom-h.wav`        |
| Windows | `tr505-crash.wav`        |

All mapped in [`shortcut-filters.tsx`](./components/shortcut-filters.tsx)

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css           # Custom MPC theme
│   ├── layout.tsx            # Layout shell
│   └── page.tsx              # Main page
├── components/
│   ├── shortcut-filters.tsx  # Grid of buttons (pads)
│   ├── shortcut-list.tsx     # Shortcut display list
│   ├── mode-toggle.tsx       # Light/dark switch
│   └── ui/                   # shadcn/ui components
└── lib/
    └── utils.ts              # Utility functions
```

---

## 🔧 Tech Stack

- ✅ **Next.js 14+** with App Router
- ✅ **TypeScript 5+**
- ✅ **Tailwind CSS 3+**
- ✅ **Lucide React** for icons
- ✅ **shadcn/ui** component library
- ✅ **TR-505** drum samples via [oramics.github.io](https://oramics.github.io/sampled/DM/TR-505/)

---

## 📚 Shortcuts Covered

### Vim

- Motion (`h`, `j`, `k`, `l`)
- Editing (`d`, `c`, `y`, `p`)
- Windows, Registers, Visual Mode

### NeoVim

- LSP support (e.g. `gd`, `gr`)
- Plugins like Telescope, Tree-sitter

---

## 🙏 Acknowledgments

- 🎛️ Inspired by the Akai MPC
- 🥁 TR-505 sounds from [oramics.github.io](https://oramics.github.io/sampled/DM/TR-505/)
- 🎨 UI framework by [shadcn/ui](https://ui.shadcn.com)
- ⚡ Icons from [Lucide](https://lucide.dev)

---

**Made with ❤️ for the Vim & NeoVim community**
