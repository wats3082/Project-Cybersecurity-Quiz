export const Questions = [
  {
    id: Math.random(),
    question: 'Which security control is designed to prevent incidents before they happen?',
    correctAnswer: 'Preventive control',
    wrongAnswers: ['Detective control', 'Corrective control', 'Compensating control'],
  },
  {
    id: Math.random(),
    question: 'What type of control helps detect and alert on suspicious behavior?',
    correctAnswer: 'Detective control',
    wrongAnswers: ['Physical control', 'Preventive control', 'Directive control'],
  },
  {
    id: Math.random(),
    question: 'What does CIA stand for in cybersecurity?',
    correctAnswer: 'Confidentiality, Integrity, Availability',
    wrongAnswers: ['Control, Inspection, Access', 'Compliance, Identity, Authorization', 'Confidentiality, Isolation, Authentication'],
  },
  {
    id: Math.random(),
    question: 'Which attack floods a target with traffic from many devices?',
    correctAnswer: 'Distributed Denial of Service (DDoS)',
    wrongAnswers: ['Phishing', 'SQL injection', 'Privilege escalation'],
  },
  {
    id: Math.random(),
    question: 'What is the purpose of multi-factor authentication (MFA)?',
    correctAnswer: 'Require multiple forms of verification',
    wrongAnswers: ['Replace password policies', 'Disable encryption', 'Speed up account provisioning'],
  },
  {
    id: Math.random(),
    question: 'Which principle grants users only the access they need?',
    correctAnswer: 'Least privilege',
    wrongAnswers: ['Open trust', 'Maximum access', 'Default allow'],
  },
  {
    id: Math.random(),
    question: 'What is a primary use of a SIEM platform?',
    correctAnswer: 'Correlating and analyzing security events',
    wrongAnswers: ['Rendering 3D dashboards', 'Replacing firewalls', 'Encrypting files at rest'],
  },
  {
    id: Math.random(),
    question: 'What does a Web Application Firewall (WAF) mainly protect against?',
    correctAnswer: 'Attacks on web applications like SQL injection and XSS',
    wrongAnswers: ['Power outages', 'Hardware theft', 'DNS zone transfers only'],
  },
  {
    id: Math.random(),
    question: 'What is the goal of a penetration test?',
    correctAnswer: 'Identify exploitable vulnerabilities safely',
    wrongAnswers: ['Patch every system automatically', 'Train all employees', 'Guarantee zero incidents forever'],
  },
  {
    id: Math.random(),
    question: 'What is phishing?',
    correctAnswer: 'Tricking users into revealing sensitive information',
    wrongAnswers: ['Encrypting endpoint disks', 'Monitoring CPU temperature', 'Compiling source code'],
  },
]

export const topics = ['Cybersecurity', 'Threats', 'Controls', 'Network Security', 'Identity']