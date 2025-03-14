import { type } from 'arktype';

// Define the constant values
export const SECTIONS = {
  CHATS: 'CHATS',
  CONTACTS: 'CONTACTS',
  SETTINGS: 'SETTINGS',
} as const;

// Create the type using type.enumerated
const Section = type.enumerated(SECTIONS.CHATS, SECTIONS.CONTACTS, SECTIONS.SETTINGS);

export type SectionType = typeof Section.infer;
export default Section;
