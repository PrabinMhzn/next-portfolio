"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (theme) {
      setIsDarkMode(theme === "dark");
    }
  }, [theme]);

  const handleToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
  };

  if (isDarkMode === undefined) {
    // Optionally render a loading state or nothing while determining the theme
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-toggle"
        checked={isDarkMode}
        onCheckedChange={handleToggle}
      />
      <Label htmlFor="theme-toggle">
        {isDarkMode ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Label>
    </div>
  );
}
