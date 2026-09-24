import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InvitationEntry } from "@/components/stationery/InvitationEntry";
import { weddingConfig } from "@/config/invitation";
import { isInvitationType } from "@/types/guest";

export function generateStaticParams() {
  return [{ type: "wedding" }, { type: "reception" }, { type: "both" }];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const names = `${weddingConfig.couple.brideName} & ${weddingConfig.couple.groomName}`;

  if (!isInvitationType(type)) {
    return { title: names };
  }

  const eventTitle =
    type === "both"
      ? `${weddingConfig.wedding.title} & ${weddingConfig.reception.title}`
      : weddingConfig[type].title;

  return {
    title: names,
    description: eventTitle,
  };
}

export default async function InvitePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  if (!isInvitationType(type)) notFound();

  return <InvitationEntry type={type} />;
}
