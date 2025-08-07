# 🎛️ Vim & NeoVim Shortcut Filter

A sleek, MPC-inspired interface for browsing and filtering Vim and NeoVim keyboard shortcuts. Built with Next.js, React, and Tailwind CSS.

![MPC Theme](https://img.shields.io/badge/Theme-MPC_Inspired-orange)
![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3+-cyan)

## ✨ Features

- **🎹 MPC-Inspired Design**: Professional beat machine aesthetic with orange accents
- **🔍 Smart Filtering**: 20 different categories to organize shortcuts
- **⌨️ Keyboard Navigation**: Full accessibility with arrow keys, tab, and enter
- **🌓 Dark/Light Mode**: Seamless theme switching with system preference support
- **📱 Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **🎯 Dual Editor Support**: Separate shortcuts for Vim and NeoVim
- **⚡ Fast Search**: Instant filtering with no loading delays

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/vim-shortcut-filter.git
cd vim-shortcut-filter

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 Filter Categories

| Category              | Description              | Icon |
| --------------------- | ------------------------ | ---- |
| **Exit**              | Quit commands            | 🚪   |
| **Cut**               | Delete/cut operations    | ✂️   |
| **Copy**              | Yank operations          | 📋   |
| **Paste**             | Put operations           | 📥   |
| **Move**              | Cursor movement          | ➡️   |
| **Delete**            | Delete commands          | 🗑️   |
| **Save**              | Write operations         | 💾   |
| **Search/Replace**    | Find and replace         | 🔍   |
| **Diff**              | Diff operations          | ⚖️   |
| **Tabs**              | Tab management           | 📁   |
| **Marks/Positions**   | Bookmarks and jumps      | 🔖   |
| **Visual Commands**   | Visual mode operations   | 👁️   |
| **Macros**            | Macro recording/playback | 🔄   |
| **Multi-File Search** | Project-wide search      | 📄   |
| **Insert Mode**       | Text insertion           | ⌨️   |
| **Indent**            | Indentation control      | 📐   |
| **Move Screen**       | Viewport control         | 🖥️   |
| **Registers**         | Register operations      | 🗃️   |
| **Undo/Redo**         | History navigation       | ⏪   |
| **Windows**           | Window management        | 🪟   |

## 🎮 Keyboard Controls

- **Arrow Keys**: Navigate between filter buttons
- **Tab/Shift+Tab**: Cycle through filters
- **Enter/Space**: Toggle filter selection
- **Escape**: Clear active filter

## 🎨 Theme Colors

### Light Theme (Classic MPC)

- **Background**: Cool silver-gray
- **Accent**: MPC Orange (`#D97706`)
- **Text**: Deep charcoal

### Dark Theme (Modern MPC)

- **Background**: Deep black
- **Accent**: Bright orange (`#F59E0B`)
- **Text**: Warm white

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # MPC-themed styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── shortcut-filters.tsx # Filter button grid
│   ├── shortcut-list.tsx   # Shortcuts display
│   └── mode-toggle.tsx     # Theme switcher
└── lib/
    └── utils.ts            # Utility functions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom MPC theme
- **Icons**: Lucide React
- **UI Components**: shadcn/ui
- **Theme**: next-themes

## 📝 Shortcuts Database

The application includes **200+ shortcuts** covering:

### Vim Shortcuts

- Basic movement and editing
- Advanced text objects
- Window and tab management
- Search and replace operations

### NeoVim Enhancements

- LSP commands (`gd` for go to definition)
- Telescope integration
- Tree-sitter aware indentation
- Enhanced clipboard support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the iconic Akai MPC design
- Built with [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Vim and NeoVim communities for the comprehensive shortcut knowledge

---

**Made with ❤️ for the Vim community**
