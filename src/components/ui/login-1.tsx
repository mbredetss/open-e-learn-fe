import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Login1Props {
  heading?: string;
  logo?: {
    src: string;
    alt: string;
  };
  buttonText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Login1 = ({
  heading,
  logo = {
    src: "/images/logo.png",
    alt: "logo",
  },
  buttonText = "Masuk",
  signupText = "Belum punya akun?",
  signupUrl = "/signup",
}: Login1Props) => {
  return (
    <section className="bg-background h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-8 rounded-md border px-6 py-12 shadow-md">
          <div className="flex flex-col items-center gap-y-2">
            {/* Logo */}
            <div className="flex items-center gap-1 lg:justify-start">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={40}
                height={40}
                className="h-10"
              />
            </div>
            {heading && <h1 className="text-3xl font-semibold">{heading}</h1>}
          </div>
          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Input type="text" placeholder="Nama Pengguna" required />
              </div>
              <div className="flex flex-col gap-2">
                <Input type="password" placeholder="Kata Sandi" required />
              </div>
              <div className="flex flex-col gap-4">
                <Button type="submit" className="mt-2 w-full">
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{signupText}</p>
            <Link
              href={signupUrl}
              className="text-primary font-medium hover:underline"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login1 };
