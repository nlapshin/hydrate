import { ChosenInlineResult, RawApi } from "../deps.deno.ts";
import {
    InlineMessageXFragment,
    installInlineMessageMethods,
} from "./inline-message.ts";

export type ChosenInlineResultX =
    & Partial<InlineMessageXFragment>
    & ChosenInlineResult;

export function installChosenInlineResultMethods(
    api: RawApi,
    chosenInlineResult: ChosenInlineResult,
) {
    if (chosenInlineResult.inline_message_id !== undefined) {
        installInlineMessageMethods(api, {
            inline_message_id: chosenInlineResult.inline_message_id,
        });
    }
}
