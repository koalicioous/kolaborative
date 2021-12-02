import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://sqexsuwpjmsdflfwsbtk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODQzMjU4NywiZXhwIjoxOTU0MDA4NTg3fQ.-hlNEhXBiaOSsQNl1nJIM3RCePK8huiCmaPc3e5BTzM',
);

export default supabase;
