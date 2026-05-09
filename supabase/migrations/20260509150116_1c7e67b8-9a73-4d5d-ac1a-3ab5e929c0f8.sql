
CREATE TABLE public.blocked_users (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  alias text NOT NULL UNIQUE,
  email text,
  reason text,
  blocked_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.blocked_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read blocked_users" ON public.blocked_users FOR SELECT USING (true);
CREATE POLICY "public insert blocked_users" ON public.blocked_users FOR INSERT WITH CHECK (true);
CREATE POLICY "public delete blocked_users" ON public.blocked_users FOR DELETE USING (true);

CREATE INDEX idx_blocked_users_alias_lower ON public.blocked_users (lower(alias));
