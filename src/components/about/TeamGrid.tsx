import { Icon } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Placeholder";

const teamMembers = [
  { name: "[Name]", role: "[Founder · Engineering]", mobileRole: "[Founder]" },
  { name: "[Name]", role: "[Design lead]", mobileRole: "[Design lead]" },
  { name: "[Name]", role: "[AI & automation]", mobileRole: "[AI lead]" },
  { name: "[Name]", role: "[Project lead]", mobileRole: "[Project lead]" },
];

export function TeamGrid() {
  return (
    <div className="team grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
      {teamMembers.map((member, i) => (
        <Placeholder key={i} active className="p block">
          <div className="img h-[200px] md:h-[360px] rounded-lg bg-surface-2 border border-line grid place-items-center text-ink-3">
            <Icon name="user-round" size={40} strokeWidth={1.2} />
          </div>
          <b className="block font-medium mt-3.5 text-ink">{member.name}</b>
          <span className="block text-ink-3 text-sm">
            <span className="md:hidden">{member.mobileRole}</span>
            <span className="hidden md:inline">{member.role}</span>
          </span>
        </Placeholder>
      ))}
    </div>
  );
}
