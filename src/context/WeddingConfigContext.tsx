"use client";

import { createContext, useContext, type ReactNode } from "react";
import { defaultInvitation, type InvitationConfig } from "@/config/invitationVariants";

const WeddingConfigContext = createContext<InvitationConfig>(defaultInvitation());

export function WeddingConfigProvider({
  value,
  children,
}: {
  value: InvitationConfig;
  children: ReactNode;
}) {
  return <WeddingConfigContext.Provider value={value}>{children}</WeddingConfigContext.Provider>;
}

export function useWedding() {
  return useContext(WeddingConfigContext);
}
