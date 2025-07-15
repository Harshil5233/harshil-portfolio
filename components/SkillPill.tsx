'use client';

interface SkillPillProps {
  children: React.ReactNode;
  emoji?: string;
  className?: string;
}

export default function SkillPill({ children, emoji, className = '' }: SkillPillProps) {
  return (
    <span className={`skill-pill ${className}`}>
      {emoji && <span className="mr-1">{emoji}</span>}
      {children}
    </span>
  );
}