import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logos/auditlogo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="xl:size-[48px] lg:size-[38px] md:size-[38px] sm:size-[38px] xs:size-[38px]"
      />

      <Image
        src="/logos/auditlogo2.svg"
        alt="Logo"
        width={100}
        height={100}
        className="xl:w-[82px] xl:h-[41px] lg:w-[72px] lg:h-[31px] md:w-[72px] md:h-[31px] sm:w-[72px] sm:h-[31px] xs:w-[72px] xs:h-[31px]"
      />
    </Link>
  );
};

export default Logo;
