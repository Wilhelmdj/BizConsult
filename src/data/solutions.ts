import {
  Gavel,
  UserCheck,
  ClipboardList,
  Users,
  ShieldAlert,
  Building2,
  FileText,
  GraduationCap,
  MessageSquareWarning,
  Scale,
  Handshake,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export interface Solution {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  overview: string;
  benefits: string[];
  process: { step: string; description: string }[];
}

export const solutions: Solution[] = [
  {
    slug: "disciplinary-management",
    title: "Disciplinary Management",
    short: "End-to-end management of workplace misconduct and disciplinary processes.",
    icon: Gavel,
    overview:
      "We chair, advise on, and manage disciplinary enquiries in line with the LRA, ensuring procedural and substantive fairness while protecting your business from costly reversals at the CCMA.",
    benefits: [
      "Procedurally and substantively fair outcomes",
      "Independent, qualified chairpersons",
      "Reduced exposure to unfair dismissal claims",
      "Clear, defensible records of process",
    ],
    process: [
      { step: "Investigation", description: "We investigate the alleged misconduct and gather evidence." },
      { step: "Charge Formulation", description: "Accurate charge sheets aligned to your disciplinary code." },
      { step: "Enquiry", description: "An independent chairperson conducts the hearing." },
      { step: "Outcome & Records", description: "A reasoned ruling and complete record for any review." },
    ],
  },
  {
    slug: "representation",
    title: "Representation",
    short: "Senior employer representation at the CCMA, Bargaining Councils, and Labour Court.",
    icon: UserCheck,
    overview:
      "BizConsult represents employers at conciliation, arbitration, and pre-dismissal arbitration. Our consultants are seasoned advocates for the employer's interest.",
    benefits: [
      "Experienced employer-side representation",
      "Strong preparation and case strategy",
      "Skilled cross-examination and argument",
      "Cost-effective alternative to attorneys",
    ],
    process: [
      { step: "Case Review", description: "We assess merits, evidence, and risk exposure." },
      { step: "Strategy", description: "A tailored strategy and witness preparation plan." },
      { step: "Appearance", description: "Full representation at conciliation and arbitration." },
      { step: "Award Management", description: "Advice on awards, reviews, and rescissions." },
    ],
  },
  {
    slug: "labour-audit-reporting",
    title: "Labour Audit & Reporting",
    short: "Comprehensive audits of your labour compliance posture, with actionable reporting.",
    icon: ClipboardList,
    overview:
      "We assess contracts, policies, procedures, records, and statutory submissions against current South African labour legislation and provide a remediation roadmap.",
    benefits: [
      "Full visibility of compliance gaps",
      "Risk-rated, prioritised action plan",
      "Reduced exposure to inspections and penalties",
      "Board-ready reporting",
    ],
    process: [
      { step: "Scoping", description: "Define audit scope across sites and functions." },
      { step: "Document Review", description: "Detailed review of HR and IR documentation." },
      { step: "Interviews", description: "Targeted interviews with managers and HR." },
      { step: "Report & Roadmap", description: "Findings, risk rating, and remediation plan." },
    ],
  },
  {
    slug: "union-collective-bargaining",
    title: "Union Collective Bargaining",
    short: "Strategic management of wage negotiations and union engagement.",
    icon: Users,
    overview:
      "We lead and advise on collective bargaining processes — from mandate development to wage settlement — protecting business continuity and employer interests.",
    benefits: [
      "Robust negotiation mandate",
      "Disciplined process management",
      "Reduced risk of protracted disputes",
      "Sustainable, affordable settlements",
    ],
    process: [
      { step: "Mandate", description: "Define affordability, scope, and red lines with leadership." },
      { step: "Engagement", description: "Structured engagement with union representatives." },
      { step: "Negotiation", description: "Lead negotiation rounds and caucus management." },
      { step: "Settlement", description: "Draft and conclude binding agreements." },
    ],
  },
  {
    slug: "strike-management",
    title: "Strike Management",
    short: "Protect operations, people, and assets during protected and unprotected strike action.",
    icon: ShieldAlert,
    overview:
      "We provide on-the-ground strike management — picketing rules, court interdicts, no-work-no-pay, replacement labour, and post-strike resolution.",
    benefits: [
      "Continuity of critical operations",
      "Compliant, defensible responses",
      "Reduced legal and reputational risk",
      "Rapid escalation support",
    ],
    process: [
      { step: "Readiness", description: "Pre-strike contingency plans and rules of engagement." },
      { step: "Response", description: "Live management of picketing and incidents." },
      { step: "Legal Action", description: "Interdicts and ULPs where required." },
      { step: "Resolution", description: "Return-to-work protocols and post-strike recovery." },
    ],
  },
  {
    slug: "retrenchment-restructuring",
    title: "Retrenchment & Restructuring",
    short: "Section 189 and 189A processes managed with rigour and care.",
    icon: Building2,
    overview:
      "We design and execute lawful, defensible retrenchment and restructuring processes — including consultation, selection criteria, and severance.",
    benefits: [
      "Lawful section 189 / 189A processes",
      "Defensible selection methodology",
      "Reduced disputes and reputational risk",
      "Respectful, structured employee engagement",
    ],
    process: [
      { step: "Rationale", description: "Document operational requirements clearly." },
      { step: "Consultation", description: "Run meaningful joint consensus-seeking process." },
      { step: "Selection", description: "Apply fair, objective selection criteria." },
      { step: "Implementation", description: "Conclude separation, severance, and references." },
    ],
  },
  {
    slug: "policies-employment-contracts",
    title: "Policies & Employment Contracts",
    short: "Bespoke contracts and policy frameworks aligned to your business.",
    icon: FileText,
    overview:
      "We draft and review contracts of employment, restraints, codes, and HR policies to be enforceable, current, and aligned to your operational realities.",
    benefits: [
      "Enforceable, current contracts",
      "Coherent policy framework",
      "Reduced ambiguity and disputes",
      "Tailored to your sector and structure",
    ],
    process: [
      { step: "Discovery", description: "Understand roles, risks, and current documentation." },
      { step: "Drafting", description: "Draft contracts and policies fit for purpose." },
      { step: "Review", description: "Stakeholder review and refinement." },
      { step: "Rollout", description: "Implementation, communication, and training." },
    ],
  },
  {
    slug: "capacity-management",
    title: "Capacity Management",
    short: "Fair management of poor performance and incapacity due to ill health.",
    icon: GraduationCap,
    overview:
      "We help managers run lawful incapacity processes — both poor performance and ill-health — with structured support, evaluation, and outcomes.",
    benefits: [
      "Lawful poor-performance procedures",
      "Compassionate ill-health processes",
      "Clear documentation and timelines",
      "Reduced unfair dismissal exposure",
    ],
    process: [
      { step: "Assessment", description: "Diagnose performance or health-related issues." },
      { step: "Support", description: "Implement counselling, training, or accommodation." },
      { step: "Review", description: "Structured reviews against defined standards." },
      { step: "Outcome", description: "Fair outcome with documented rationale." },
    ],
  },
  {
    slug: "grievance-management",
    title: "Grievance Management",
    short: "Independent, structured handling of employee grievances.",
    icon: MessageSquareWarning,
    overview:
      "We design grievance procedures and act as independent investigators or hearing officers to resolve grievances efficiently and fairly.",
    benefits: [
      "Restored workplace trust",
      "Faster resolution of issues",
      "Independent, credible process",
      "Reduced escalation to disputes",
    ],
    process: [
      { step: "Intake", description: "Receive and scope the grievance." },
      { step: "Investigation", description: "Interviews and evidence gathering." },
      { step: "Findings", description: "Written findings with recommendations." },
      { step: "Resolution", description: "Implementation and follow-through." },
    ],
  },
  {
    slug: "dispute-resolution",
    title: "Dispute Resolution",
    short: "Strategic resolution of workplace disputes — formal and informal.",
    icon: Scale,
    overview:
      "We resolve disputes through facilitation, mediation, conciliation, and arbitration — preserving relationships where possible and asserting employer rights where necessary.",
    benefits: [
      "Pragmatic, cost-effective outcomes",
      "Reduced litigation exposure",
      "Preserved working relationships",
      "Senior, experienced facilitators",
    ],
    process: [
      { step: "Analysis", description: "Map issues, interests, and risks." },
      { step: "Engagement", description: "Convene the parties and define rules." },
      { step: "Facilitation", description: "Mediate or arbitrate to resolution." },
      { step: "Agreement", description: "Document binding outcomes." },
    ],
  },
  {
    slug: "conflict-management",
    title: "Conflict Management",
    short: "Manage interpersonal and team conflict before it escalates.",
    icon: Handshake,
    overview:
      "We work with leaders and teams to surface, diagnose, and resolve conflict — building healthier working relationships and reducing IR risk.",
    benefits: [
      "Improved team functioning",
      "Reduced grievances and disputes",
      "Stronger leadership capability",
      "Confidential, professional process",
    ],
    process: [
      { step: "Diagnose", description: "Confidential interviews to map the conflict." },
      { step: "Design", description: "Choose the right intervention." },
      { step: "Intervene", description: "Facilitated sessions and coaching." },
      { step: "Embed", description: "Agreements, follow-up, and review." },
    ],
  },
  {
    slug: "payroll-management",
    title: "Payroll Management",
    short: "Accurate, compliant payroll processing — every cycle.",
    icon: Wallet,
    overview:
      "Outsourced payroll administration that takes the risk of errors, late submissions, and penalties off your plate.",
    benefits: [
      "Accurate, on-time payroll",
      "SARS and statutory compliance",
      "Confidential, secure processing",
      "Detailed reporting for leadership",
    ],
    process: [
      { step: "Onboarding", description: "Migrate data securely and validate inputs." },
      { step: "Processing", description: "Run monthly or weekly payroll cycles." },
      { step: "Compliance", description: "EMP201, EMP501, UIF, and SDL submissions." },
      { step: "Reporting", description: "Management reports and reconciliations." },
    ],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
