"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

import { HStack, createListCollection } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "@/components/ui/select";
import { useLocale } from "next-intl";

const langs = createListCollection({
  items: [
    {
      name: "EN",
      id: "en",
      avatar: "/images/flags/en.png",
    },
    {
      name: "AR",
      id: "ar",
      avatar: "/images/flags/ar.png",
    },
  ],
  itemToString: (item) => item.name,
  itemToValue: (item) => item.id,
});

export default function LanguageSelect() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <SelectRoot
      collection={langs}
      size="sm"
      width="240px"
      defaultValue={[locale]}
      positioning={{ sameWidth: true }}
      onChange={(e: any) => onSelectChange(e.target.value)}
      w="85px">
      <SelectTrigger>
        {locale === "en" ? (
          <HStack>
            <Avatar
              shape="rounded"
              size="2xs"
              bg="none"
              src="/images/flags/en.png"
            />
            {locale.toLocaleUpperCase()}
          </HStack>
        ) : (
          <HStack>
            <Avatar
              shape="rounded"
              size="2xs"
              bg="none"
              src="/images/flags/ar.png"
            />
            {locale.toLocaleUpperCase()}
          </HStack>
        )}
      </SelectTrigger>
      <SelectContent portalled={false} w="100px">
        {langs.items.map((item) => (
          <SelectItem item={item} key={item.id} justifyContent="flex-start">
            <Avatar
              shape="square"
              name={item.name}
              src={item.avatar}
              size="2xs"
              bg="none"
            />
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
