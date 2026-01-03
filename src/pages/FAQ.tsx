import { memo, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    category: 'Getting Started',
    question: 'Who is this course for?',
    answer:
      'Our curriculum is designed for absolute beginners through advanced learners. We have multiple versions (Lite, Pro, Practitioner, Specialist, and Elite) to match your experience level and goals. Whether you\'re a curious beginner or an experienced professional, there\'s a path for you.',
  },
  {
    category: 'Getting Started',
    question: 'Do I need any prior technical knowledge?',
    answer:
      'No prior technical knowledge is required for the Cyber Literacy or Cybersecurity Foundations programs. Modules 0-2 cover all the basics. If you have some IT background, you can start from Module 1-3. The program is designed to accommodate all experience levels.',
  },
  {
    category: 'Getting Started',
    question: 'How long does the program take?',
    answer:
      'It depends on which version and format you choose. The Lite version takes 2-3 months, Pro takes 4-6 months, Practitioner takes 8-10 months, and the Elite program takes 12-18 months. We offer flexible schedules: intensive (3 months), part-time (6 months), and full mastery (12-18 months).',
  },
  {
    category: 'Curriculum',
    question: 'What will I learn in each module?',
    answer:
      'Each module includes learning objectives, detailed lessons, hands-on labs, tools and setup guides, assessment criteria, and instructor notes. For example, Module 0 covers digital literacy and computer basics, Module 1 covers operating systems, Module 6 covers web application security (OWASP), and so on. All 13 modules build on each other progressively.',
  },
  {
    category: 'Curriculum',
    question: 'Are the labs hands-on or theoretical?',
    answer:
      'Our labs are heavily hands-on with step-by-step guidance. You\'ll work with real tools like Wireshark, Nmap, Burp Suite, Metasploit, and more. All labs are conducted in safe, isolated lab environments using VMs (VirtualBox/VMware). We never conduct any offensive testing on external systems.',
  },
  {
    category: 'Curriculum',
    question: 'What tools will I learn?',
    answer:
      'You\'ll learn 50+ tools across different domains including virtualization (VirtualBox, VMware), OS (Kali, Ubuntu, Windows), web testing (Burp Suite, OWASP ZAP), networking (Wireshark, Nmap), SIEM (ELK, Splunk), and exploitation (Metasploit, Hashcat). All tools are industry-standard and used by professionals worldwide.',
  },
  {
    category: 'Learning Formats',
    question: 'What are the different delivery formats?',
    answer:
      'We offer four formats: Instructor-led Classroom (weekend/evening sessions), Online Cohort (live virtual classes), Self-paced Learning (at your own pace with weekly mentor calls), and VIP 1-on-1 (personalized training). Choose what works best for your schedule.',
  },
  {
    category: 'Learning Formats',
    question: 'Can I study part-time while working?',
    answer:
      'Absolutely! Our Self-paced format is perfect for working professionals. You can study at your own pace with support from mentors during weekly calls. The part-time schedule requires 1-2 hours daily over 6 months. Many of our students are working professionals.',
  },
  {
    category: 'Learning Formats',
    question: 'Is the course available online?',
    answer:
      'Yes! We offer both online and hybrid options. The Online Cohort format provides live virtual classes with peer collaboration. You can also choose Self-paced learning from anywhere with video recordings and mentor support.',
  },
  {
    category: 'Career Paths',
    question: 'What career roles can I pursue after this course?',
    answer:
      'Depending on which path you choose, you can pursue roles like: SOC Analyst, Incident Responder, Penetration Tester, Bug Bounty Hunter, Cloud Security Engineer, Detection Engineer, Security Architect, CISO, Compliance Analyst, or become a trainer yourself. We provide career mapping and job placement assistance.',
  },
  {
    category: 'Career Paths',
    question: 'Which path should I choose?',
    answer:
      'Start with our free Path Selector quiz that asks about your background, interests, and goals. It will recommend one of five specializations: Red Team (offensive), Blue Team (defensive), Purple Team (both), Cloud Security, or GRC (governance). You can also speak with our advisors for personalized guidance.',
  },
  {
    category: 'Certifications',
    question: 'What certifications will I get?',
    answer:
      'You\'ll get our official CyberSecAcademy certificate for completing any version. Additionally, our curriculum prepares you for industry certifications like CompTIA Security+, eJPT, PNPT, OSCP, GCIH, CySA+, and CISSP depending on your chosen path and level.',
  },
  {
    category: 'Certifications',
    question: 'Are the certifications recognized by employers?',
    answer:
      'Yes, employers widely recognize the certifications included in our curriculum. CompTIA, eJPT, and OSCP certifications in particular are highly valued in the industry. Our students have successfully secured roles at top security firms, financial institutions, and tech companies.',
  },
  {
    category: 'Ethics & Safety',
    question: 'Is this course legal and ethical?',
    answer:
      'Absolutely. We emphasize ethical hacking and legal boundaries throughout. All labs use authorized targets and isolated environments. We require students to sign a code of conduct and legal waiver before starting offense modules. We teach that knowledge without permission is illegal and irresponsible.',
  },
  {
    category: 'Ethics & Safety',
    question: 'Will you teach me illegal hacking?',
    answer:
      'No. We teach cybersecurity concepts and techniques within legal and ethical boundaries. While we explain how attacks work (so you can defend against them), all practice is on authorized lab targets only. Black hat techniques are discussed for awareness but never practiced without permission. Ethical responsibility is fundamental to our curriculum.',
  },
  {
    category: 'Enrollment',
    question: 'How do I enroll?',
    answer:
      'Visit our Courses page to view all available versions and their pricing. Choose the version that matches your goals and experience level. Fill out the enrollment form and select your preferred learning format. You\'ll get instant access to course materials and can start immediately.',
  },
  {
    category: 'Enrollment',
    question: 'What\'s the enrollment process?',
    answer:
      'The process is simple: 1) Take our free Path Selector quiz to get personalized recommendations, 2) Review the course that matches your path, 3) Choose your format (classroom, online, self-paced, or 1-on-1), 4) Complete enrollment and select payment method, 5) Receive welcome email with login credentials and start immediately.',
  },
  {
    category: 'Enrollment',
    question: 'Is there a money-back guarantee?',
    answer:
      'Yes, we offer a 14-day money-back guarantee. If you\'re not satisfied with the course in the first two weeks, we\'ll refund your full payment. No questions asked. We\'re confident in our curriculum and instructor quality.',
  },
  {
    category: 'Support',
    question: 'What support will I get during the course?',
    answer:
      'You\'ll get comprehensive support including: live instructor sessions, access to mentors, peer study groups, discussion forums, email support, office hours, lab troubleshooting, career guidance, and job placement assistance. Your success is our priority.',
  },
  {
    category: 'Support',
    question: 'What if I get stuck on a lab?',
    answer:
      'Our instructors and mentors are available during office hours to help. We also provide step-by-step lab guides with troubleshooting sections. You can post questions on our community forums where instructors and advanced students help. We also offer extended lab support for self-paced students.',
  },
  {
    category: 'Trainer Program',
    question: 'Can I become a trainer after completing the course?',
    answer:
      'Yes! After completing the Master/Elite program, you can pursue our Trainer Certification. We provide trainer support, curriculum materials, marketing assistance, and income opportunities. Trainers can teach independently or partner with us to deliver classes in their cities.',
  },
  {
    category: 'Trainer Program',
    question: 'How much can trainers earn?',
    answer:
      'Earnings depend on your trainer level: Junior trainers earn $30-50/hour, Lead trainers earn $75-125/hour, and Master trainers earn $150-300+/hour. You can also earn from workshop fees or revenue sharing if you train for us.',
  },
];

const FAQ = memo(() => {
  const [search, setSearch] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredFAQs = useMemo(() => {
    if (!search.trim()) return faqItems;
    const query = search.toLowerCase();
    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
  }, [search]);

  const groupedFAQs = useMemo(() => {
    const grouped: Record<string, FAQItem[]> = {};
    filteredFAQs.forEach((item) => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  }, [filteredFAQs]);

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full glass border border-accent/30 text-accent text-xs font-mono mb-4">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-4">
            Got Questions? We Have <span className="text-gradient-cyber">Answers</span>
          </h1>
          <p className="text-muted-foreground">
            Find answers to common questions about our courses, careers, and training programs.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search FAQ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 glass border-border/30 focus:border-primary/50"
            />
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-8">
          {Object.entries(groupedFAQs).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h2 className="font-mono text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-xs font-bold text-primary">
                  {items.length}
                </span>
                {category}
              </h2>

              <div className="space-y-3">
                {items.map((item, itemIndex) => {
                  const globalIndex = faqItems.findIndex((faq) => faq === item);
                  const isExpanded = expandedIndex === globalIndex;

                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                      className="rounded-xl glass border border-border/30 overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : globalIndex)}
                        className="w-full p-4 text-left hover:bg-primary/5 transition-colors flex items-start justify-between gap-4"
                      >
                        <span className="font-mono font-semibold text-foreground text-sm md:text-base">
                          {item.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-border/20 overflow-hidden"
                          >
                            <p className="p-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground mb-4">No FAQs found matching your search.</p>
            <button
              onClick={() => setSearch('')}
              className="px-4 py-2 rounded-lg glass border border-border/30 hover:border-primary/50 text-sm font-mono transition-all"
            >
              Clear Search
            </button>
          </motion.div>
        )}

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl glass border border-border/30 text-center"
        >
          <h3 className="font-mono text-xl font-bold text-foreground mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help. Reach out to us anytime.
          </p>
          <a
            href="mailto:support@cybersecurity.local"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
});

FAQ.displayName = 'FAQ';
export default FAQ;
