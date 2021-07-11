import { ShippingQuery, RawApi } from '../deps.deno.ts'
import { Other, Ret } from '../plugin.ts'

export interface ShippingQueryX {
    /**
     * Shipping query-aware alias for `api.answerShippingQuery`. If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
     *
     * @param ok Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
     * @param other Optional remaining parameters, confer the official reference below
     * @param signal Optional `AbortSignal` to cancel the request
     *
     * **Official reference:** https://core.telegram.org/bots/api#answershippingquery
     */
    answer(
        ok: boolean,
        other?: Other<'answerShippingQuery', 'shipping_query_id' | 'ok'>,
        signal?: AbortSignal
    ): Ret<'answerShippingQuery'>
}

export function installShippingQueryMethods(
    api: RawApi,
    shippingQuery: ShippingQuery
) {
    const methods: Omit<ShippingQueryX, 'message'> = {
        answer: (ok, other, signal) =>
            api.answerShippingQuery(
                { shipping_query_id: shippingQuery.id, ok, ...other },
                signal
            ),
    }
    Object.assign(shippingQuery, methods)
}