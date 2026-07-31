export type Agent = {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
};

export const AGENTS: Agent[] = [
  {
    name: "Claire Whitfield",
    role: "Principal Broker",
    phone: "+1 (212) 555-0142",
    email: "claire@primeestate.com",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marcus Ionescu",
    role: "Senior Agent, Downtown",
    phone: "+1 (212) 555-0198",
    email: "marcus@primeestate.com",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Priya Anand",
    role: "Agent, Suburban Homes",
    phone: "+1 (212) 555-0176",
    email: "priya@primeestate.com",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
  },
];
