import { functions } from "./functions";
import { keywords } from "./keywords";

export const completions = [...functions, ...keywords];
export const completionMap = new Map(
    completions.map((completion) => [completion.label, completion])
);
