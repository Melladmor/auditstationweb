"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch, Flex } from "@chakra-ui/react";
import { useLocale } from "next-intl";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Flex align="center" gap={2}>
      <Switch.Root
        className="theme-switch w-[45px] h-[22px]"
        sm={{
          "& span": {
            direction: locale === "en" ? "ltr" : "rtl",
          },
        }}
        checked={theme === "dark"}
        onCheckedChange={(e) => setTheme(e.checked ? "dark" : "light")}>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label />
      </Switch.Root>
    </Flex>
  );
}
