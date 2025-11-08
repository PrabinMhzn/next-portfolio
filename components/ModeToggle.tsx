"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (theme !== undefined) {
      setIsDarkMode(theme === "dark");
    }
  }, [theme]);

  const handleToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
  };

  if (isDarkMode === undefined) {
    // Render a loading state or apply a default theme while determining the theme
    return (
      <div className="flex items-center space-x-2">
        <Switch id="theme-toggle" checked={false} disabled />
        <Label htmlFor="theme-toggle">
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </Label>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-toggle"
        checked={isDarkMode}
        onCheckedChange={handleToggle}
        aria-label="Toggle dark mode"
      />
      <Label htmlFor="theme-toggle">
        {isDarkMode ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] text-neutral-800" />
        )}
      </Label>
    </div>
  );
}
