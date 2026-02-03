import { fieldData } from "@/pages/home/Constants";

export const useField = (id: number) => {
    const field = fieldData.find((item) => item.id === id);
    return field;
}

export const useFieldName = (fieldName: string) => {
    const field = fieldData.find((item) => item.fieldName === fieldName);
    return field?.name;
}