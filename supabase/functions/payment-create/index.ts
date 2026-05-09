import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PAYPAL_EMAIL = "davidsonpopiler609@gmail.com";

const PLANS_PAYPAL: Record<string, { duration: string; amount: number; display: string }> = {
  day1: { duration: "1 día", amount: 4, display: "$4 USD" },
  day7: { duration: "7 días", amount: 7, display: "$7 USD" },
  day30: { duration: "30 días", amount: 15, display: "$15 USD" },
};

function rand(len: number) {
  const c = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < len; i++) s += c[Math.floor(Math.random() * c.length)];
  return s;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { plan, alias, email } = await req.json();
    const p = PLANS_PAYPAL[plan];
    if (!p) throw new Error("Plan inválido");
    if (!alias || typeof alias !== "string" || alias.trim().length < 2) throw new Error("Alias requerido");

    const cleanAlias = alias.trim().slice(0, 60);

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Anti-spam: blocked user check
    const { data: blocked } = await supabase
      .from("blocked_users")
      .select("alias, reason")
      .ilike("alias", cleanAlias)
      .maybeSingle();
    if (blocked) {
      return new Response(JSON.stringify({
        error: `Usuario bloqueado${blocked.reason ? `: ${blocked.reason}` : ""}`,
      }), { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const payment_id = `HG-${rand(8)}`;
    const tracking_token = `${rand(6)}-${rand(6)}-${rand(6)}-${rand(6)}`;

    const { data, error } = await supabase.from("payment_orders").insert({
      payment_id,
      tracking_token,
      alias: cleanAlias,
      email: email?.trim().slice(0, 120) || null,
      plan,
      duration: p.duration,
      amount: p.amount,
      amount_display: p.display,
      payment_method: "paypal",
      status: "AWAITING_RECEIPT",
    }).select().single();

    if (error) throw error;

    await supabase.from("payment_logs").insert({
      payment_id, event: "order_created",
      detail: { plan, method: "paypal", amount: p.amount, alias: data.alias },
    });

    return new Response(JSON.stringify({
      payment_id: data.payment_id,
      tracking_token: data.tracking_token,
      amount: data.amount,
      amount_display: p.display,
      duration: data.duration,
      payment_method: "paypal",
      paypal_email: PAYPAL_EMAIL,
    }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Error" }), {
      status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
