import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InvitationExperience } from "@/components/invitation/InvitationExperience";
import { isInvitationVariant, resolveInvitation } from "@/config/invitationVariants";

export function generateStaticParams() {
  return [{ variant: "groom" }, { variant: "bride" }];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ variant: string }>;
}): Promise<Metadata> {
  const { variant } = await params;
  if (!isInvitationVariant(variant)) return {};

  const config = resolveInvitation(variant);
  return {
    title: config.site.title,
    description: config.site.description,
    openGraph: {
      title: config.site.title,
      description: config.site.description,
    },
    twitter: {
      title: config.site.title,
      description: config.site.description,
    },
  };
}

export default async function InvitationVariantPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  if (!isInvitationVariant(variant)) notFound();

  return <InvitationExperience variant={variant} />;
}
