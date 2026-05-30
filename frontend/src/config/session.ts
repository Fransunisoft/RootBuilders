import type { AccessSubject } from "@/lib/access-control";

// Fikerte Replace this fixture with the authenticated user response when auth is wired.
export const currentParticipantAccess: AccessSubject = {
  role: "participant",
  isTeamLead: true,
};
