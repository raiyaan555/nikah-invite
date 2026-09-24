export type InvitationType = "wedding" | "reception" | "both";

export type Guest = {
  id: string;
  name: string;
  invitationType: InvitationType;
  createdAt: string;
};

const invitationTypes: InvitationType[] = ["wedding", "reception", "both"];

export function isInvitationType(value: string): value is InvitationType {
  return invitationTypes.includes(value as InvitationType);
}
