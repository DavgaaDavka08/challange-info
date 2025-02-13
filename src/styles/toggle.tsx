import { Bold } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="w-[50px] h-[34px] bg-blue-400" />
    </Toggle>
  );
}
