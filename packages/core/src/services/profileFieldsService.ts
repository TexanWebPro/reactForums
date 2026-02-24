import { CustomProfileFields } from "../domain/models";

export class ProfileFieldsService {
  constructor() {}

  getProfileFieldValue(fieldId: number) {
    const fieldValue = profileFields.find((field) => field.id === fieldId);
    if (!fieldValue) return;
    return fieldValue;
  }
}

const profileFields: CustomProfileFields = [
  {
    id: 1,
    name: "Location",
    description: "Where are you located?",
    displayOrder: 1,
    type: "text",
    length: 5,
    maxLength: 45,
    canEdit: true,
    isHidden: false,
    isRequired: false,
  },
  {
    id: 2,
    name: "Bio",
    description: "Tell us something about you.",
    displayOrder: 2,
    type: "textarea",
    length: 5,
    maxLength: 100,
    canEdit: true,
    isHidden: false,
    isRequired: false,
  },
  {
    id: 3,
    name: "Sex",
    description: "What is your sex?",
    displayOrder: 3,
    type: "select",
    length: 0,
    maxLength: 0,
    canEdit: true,
    isHidden: false,
    isRequired: false,
  },
];
