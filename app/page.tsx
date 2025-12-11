"use client";

import { useState } from "react";
import { ShortcutFilters } from "@/components/shortcut-filters";
import { ShortcutList } from "@/components/shortcut-list";
import { ModeToggle } from "@/components/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 transition-colors duration-300">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">
          Vim and NeoVim Shortcut Filter
        </h1>
        <ModeToggle />
      </div>

      <div className="max-w-8xl mx-auto">
        <Tabs defaultValue="vim" className="w-full mb-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-muted border border-border rounded-t-md overflow-hidden">
            <TabsTrigger
              value="vim"
              data-slot="tabs-trigger"
              className="text-muted-foreground"
            >
              Vim
            </TabsTrigger>
            <TabsTrigger
              value="neovim"
              data-slot="tabs-trigger"
              className="text-muted-foreground"
            >
              NeoVim
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vim">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-3">
                <ShortcutFilters
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                />
              </div>
              <div className="md:col-span-2">
                <ShortcutList activeFilter={activeFilter} activeEditor="vim" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="neovim">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-3">
                <ShortcutFilters
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                />
              </div>
              <div className="md:col-span-2">
                <ShortcutList
                  activeFilter={activeFilter}
                  activeEditor="neovim"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
