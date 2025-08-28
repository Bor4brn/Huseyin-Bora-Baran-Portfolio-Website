import { Mail, User, Zap, Linkedin } from "lucide-react";
import {
  asanaIcon,
  cppLogo,
  discord,
  dockerLogo,
  facebook,
  figmaIcon,
  flaskLogo,
  flutterLogo,
  framerIcon,
  graphicDesignIcon,
  javaLogo,
  linkedInIcon,
  notionIcon,
  numpyLogo,
  ozyeginLogo,
  pinterest,
  pythonLogo,
  pytorchLogo,
  seoOptIcon,
  slackIcon,
  snapchat,
  spotify,
  springLogo,
  sqlLogo,
  supabaseLogo,
  telcosetLogo,
  tensorflowLogo,
  turkcellLogo,
  webDesignIcon,
  webDevIcon,
  webflowIcon,
} from "@/app/assets/assets";
import { Github } from 'lucide-react'

import { counterListsType, FAQ, FollowerData, myExperienceTypes, myServicesPlansTypes, myServicesTypes, myShowCasesTypes, myStackTypes, socialBrandsTypes } from "@/types";
import { socialListsTypes } from '@/types'
import { pagesListsType } from "@/types";

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User />,
  },
  {
    id: 2,
    title: "Projects",
    href: "/projects",
    icon: <Zap />,
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: 'LinkedIn',
    icon: <Linkedin size={22} />,
    link: 'https://www.linkedin.com/in/h%C3%BCseyin-bora-baran-2965b7269/'
  },
  {
    id: 2,
    title: 'Github',
    icon: <Github size={22} />,
    link: 'https://github.com/Bor4brn'
  }
]

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: "Discord",
    icon: discord,
    link: "https://discord.com",
  },
  {
    id: 3,
    name: "Facebook",
    icon: facebook,
    link: "https://facebook.com",
  },
  {
    id: 4,
    name: "Pinterest",
    icon: pinterest,
    link: "https://pinterest.com",
  },
  {
    id: 5,
    name: "SnapChat",
    icon: snapchat,
    link: "https://snapchat.com",
  },
  {
    id: 6,
    name: "Spotify",
    icon: spotify,
    link: "https://open.spotify.com",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Happy Clients",
    value: 45,
  },
  {
    id: 2,
    title: "Year of Experience",
    value: 2,
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: 40,
  },
  {
    id: 4,
    title: "Awards Received",
    value: 6,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "July 2025 - August 2025",
    title: "Data Science Intern",
    company: "Turkcell",
    label: 'Telecom Company',
    description: "Working on data analytics and machine learning projects to optimize customer experience and network performance.",
    link: "turkcell.com.tr",
    logo: turkcellLogo
  },
  {
    id: 2,
    year: "July 2024 - August 2024",
    title: "Network Automation Intern",
    company: "Telcoset",
    label: 'Network Solutions',
    description: "Developing automation scripts and tools for network management and configuration optimization.",
    link: "telcoset.com",
    logo: telcosetLogo
  },
  {
    id: 3,
    year: "Sept 2023 - Jan 2024",
    title: "Differential Equations Course Assistant",
    company: "Özyeğin University",
    label: 'University',
    description: "Supporting students in understanding mathematical concepts and solving complex differential equation problems.",
    link: "ozyegin.edu.tr",
    logo: ozyeginLogo
  }
]

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: "Java",
    description: "Programming Language",
    logo: javaLogo,
    link: "https://www.java.com",
  },
  {
    id: 2,
    title: "Python",
    description: "Programming Language",
    logo: pythonLogo,
    link: "https://www.python.org",
  },
  {
    id: 3,
    title: "C++",
    description: "Programming Language",
    logo: cppLogo,
    link: "https://isocpp.org",
  },
  {
    id: 4,
    title: "SQL",
    description: "Database Language",
    logo: sqlLogo,
    link: "https://www.mysql.com",
  },
  {
    id: 5,
    title: "Spring Framework",
    description: "Java Framework",
    logo: springLogo,
    link: "https://spring.io",
  },
  {
    id: 6,
    title: "PyTorch",
    description: "Machine Learning Framework",
    logo: pytorchLogo,
    link: "https://pytorch.org",
  },
  {
    id: 7,
    title: "TensorFlow",
    description: "Deep Learning Framework",
    logo: tensorflowLogo,
    link: "https://www.tensorflow.org",
  }
]

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: 'Machine Learning',
    description: 'Building intelligent systems using advanced ML algorithms and neural networks for predictive analytics.',
    icon: webDesignIcon,
    link: '/services'
  },
  {
    id: 2,
    title: 'Deep Learning',
    description: 'Developing complex neural networks for computer vision, NLP, and pattern recognition applications.',
    icon: webDevIcon,
    link: '/services'
  },
  {
    id: 3,
    title: 'Backend Development',
    description: 'Creating robust server-side applications with scalable architecture and efficient database management.',
    icon: graphicDesignIcon,
    link: '/services'
  },
  {
    id: 4,
    title: 'Data Engineering',
    description: 'Designing and implementing data pipelines for large-scale data processing and analytics solutions.',
    icon: seoOptIcon,
    link: '/services'
  }
]

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 5,
    title: 'SnapMath',
    description: 'End-to-end system that converts handwritten/printed math into LaTeX and solves them with SymPy.',
    link: 'snapmath.ai',
    type: 'AI/ML',
    theme: 'Dark',
    pages: 1,
    slug: 'snapmath',
    detailedDescription: `I built an end-to-end system that converts images of handwritten/printed math into LaTeX and (next step) solves them with SymPy, using a ViT-Base + TrOCR-Base VisionEncoderDecoder model and a Flask web app.

**Results:** CROHME'14 (handwritten) 62% Exact-Match, 6.1% SER; im2latex-100k (printed) 6.7% CER, 55% EM.

**Performance:** Trained in 2h55m on 2× NVIDIA L40 (FP16 DDP); inference ≈ 42 ms/expression; ~220M params.

**Data & Prep:** ~116k CROHME expressions; images normalized to 384×384 with histogram equalization; +83 math symbols added to TrOCR BPE tokenizer.

**Engineering:** Custom data collator, label smoothing + AdamW, beam decoding, ONNX export path.

**App:** Flask UI with secure uploads (MIME/extension whitelist, size limits, secure_filename) and live preview.

**My contributions:**
- Designed and fine-tuned ViT-Base + TrOCR; implemented FP16 DDP training and ablations (FP32 vs FP16, vocab extension, ViT-Large).
- Built the preprocessing/tokenization pipeline and evaluation (EM/SER/CER).
- Developed the Flask frontend/backend and wired the inference/LaTeX rendering plan; prepared ONNX deployment.`,
    techStack: ['PyTorch', 'HuggingFace Transformers', 'ViT-B/16', 'TrOCR-Base', 'Flask', 'Bootstrap', 'ONNX', 'SymPy', 'DDP/NCCL'],
    techStackLogos: [pytorchLogo, pythonLogo, flaskLogo],
    highlights: [
      'CROHME\'14 (handwritten) 62% Exact-Match, 6.1% SER',
      'im2latex-100k (printed) 6.7% CER, 55% EM',
      'Trained in 2h55m on 2× NVIDIA L40 (FP16 DDP)',
      'Inference ≈ 42 ms/expression; ~220M params',
      '~116k CROHME expressions processed',
      'Custom data collator and evaluation metrics'
    ]
  },
  {
    id: 6,
    title: 'MedMarket AI',
    description: 'AI-powered sales platform for medical procedures with RAG chatbot that negotiates prices and recommends doctors.',
    link: 'medmarket.ai',
    type: 'AI/ML',
    theme: 'Dark',
    pages: 1,
    slug: 'medmarket-ai',
    detailedDescription: `I built a vertical marketplace backend with an AI sales assistant that answers patient questions, recommends doctors, and negotiates price under guardrails—powered by RAG (PostgreSQL + pgvector) and Gemini.

**RAG over domain corpus:** Device specs, procedure guides, clinic/doctor profiles; embeddings with multilingual-e5-base (dim=768) stored in PostgreSQL + pgvector.

**Dialogue state machine:** transitions library drives greeting → procedure selection → doctor match → negotiation → booking intent with slot-filling and tool calls.

**Negotiation engine:** Rule-of-thumb price bands + LLM strategies (anchoring, counter-offers, concessions) with safety rails, transparency, and audit logs.

**Data ingestion:** setup_db.py ETL from Excel/workbook + knowledge_base.docx → canonical chunks → embeddings; idempotent re-indexing.

**Observability:** Per-turn traces (prompt, retrieved chunks, price deltas), prompt cost tracking, and conversation transcripts for QA.

**My contributions:**
- Designed the pgvector schema and SQLAlchemy models; built the ingestion & embedding pipeline (chunking, batching, retries).
- Implemented the state-machine controller and tool interfaces (DB lookups, pricing, availability).
- Authored the negotiation policy (guardrails, discounts, max concession logic) and safe-response templates.
- Wrote the chat orchestration (chatbot.py) and REST endpoints (session init, chat, quote preview); added unit tests and manual review playbooks.`,
    techStack: ['Python', 'PostgreSQL', 'pgvector', 'SQLAlchemy', 'SentenceTransformers', 'multilingual-e5-base', 'Gemini-2.0-flash', 'Gemini-1.5-flash-latest', 'transitions', 'Flask/FastAPI'],
    techStackLogos: [pythonLogo, sqlLogo, flaskLogo],
    highlights: [
      'RAG with PostgreSQL + pgvector for medical knowledge',
      'Dialogue state machine with slot-filling and tool calls',
      'Smart negotiation engine with safety rails and audit logs',
      'ETL pipeline from Excel/docs to embeddings',
      'Per-turn traces and cost tracking for observability',
      'Multilingual-e5-base embeddings (dim=768)'
    ]
  },
  {
    id: 7,
    title: 'CarGo',
    description: 'Production-style Spring Boot backend for car-rental service with clean architecture and OpenAPI docs.',
    link: 'cargo-rental.com',
    type: 'Backend',
    theme: 'Dark',
    pages: 1,
    slug: 'cargo',
    detailedDescription: `I built a production-style Spring Boot backend for a car-rental service with clean DTO layers, MapStruct mappings, and OpenAPI/Swagger docs—covering cars, customers, reservations, and pricing.

**Domain model & CRUD:** Car, Customer, Reservation, Payment entities with Controller → Service → Repository layering and JPA/Hibernate.

**DTO & mapping:** Input/Output DTOs, MapStruct mappers, and Bean Validation (constraints, global exception handling, error payloads).

**Availability logic:** Reservation overlap checks (date-range conflict detection) and simple price computation (daily rate × days, optional fees).

**API design:** Versioned REST endpoints (/api/v1/...), pagination/sort with Pageable, consistent response envelopes.

**Docs & tooling:** Swagger UI / OpenAPI 3 with example payloads; profiles for dev/test; SQL migrations via Flyway (optional).

**My contributions:**
- Designed the schema & repositories, wrote reservation conflict-check algorithm, and encapsulated pricing rules.
- Implemented DTO layer + MapStruct mappers; added validation (size, pattern, date range) and centralized error handling.
- Authored OpenAPI annotations and request/response examples; enabled pagination/sorting across list endpoints.`,
    techStack: ['Java', 'Spring Boot', 'Spring Web', 'Spring Data JPA', 'Hibernate', 'MapStruct', 'Lombok', 'Bean Validation', 'OpenAPI/Swagger', 'JUnit/Mockito'],
    techStackLogos: [javaLogo, springLogo, sqlLogo],
    highlights: [
      'Clean Controller → Service → Repository architecture',
      'MapStruct mappers with Input/Output DTOs',
      'Reservation conflict detection algorithm',
      'Versioned REST endpoints with pagination',
      'OpenAPI/Swagger documentation with examples',
      'Bean Validation with centralized error handling'
    ]
  },
  {
    id: 8,
    title: 'FileScope',
    description: 'Intelligent file analyzer that classifies, audits, and cleans local files using machine learning algorithms.',
    link: 'filescope.app',
    type: 'AI/ML',
    theme: 'Dark',
    pages: 1,
    slug: 'filescope',
    detailedDescription: `I built a desktop app that classifies, audits, and cleans local files—using TF-IDF + Naive Bayes for text and ResNet50 features for images—then lets you compress, archive, or delete safely via a Tkinter UI.

**Multimodal classification:**

**Text:** TF-IDF vectorization → Multinomial Naive Bayes (topic/doctype labels).

**Images:** ResNet50 (pretrained) feature extractor → lightweight classifier (LogReg/SVM).

**Batch scan & insights:** Recursively indexes folders, extracts metadata (size, type, mtime), computes hashes (MD5) to detect duplicates, surfaces large/old/rarely-opened candidates.

**Interactive GUI:** Tkinter table with filters, preview pane, progress bars, cancel-safe scanning, and one-click actions (compress to ZIP, move to archive, safe delete to OS trash).

**Quality & reporting:** Confusion matrix, precision/recall/F1, per-class support; exportable CSV of findings and actions log for auditability.

**Safety rails:** Dry-run mode, undo queue, permission checks, integrity verification after compress/move.

**My contributions:**
- Implemented the text & image pipelines, feature caching, and model persistence; wrote the duplicate finder (hash + size heuristics).
- Built the Tkinter UI (virtualized table, preview, progress), multi-threaded scanning worker, and action handlers with rollback.
- Authored evaluation scripts and reporting (metrics, CSV export), plus config profiles for "aggressive" vs "conservative" cleanup.`,
    techStack: ['Python', 'Tkinter', 'scikit-learn', 'TensorFlow/Keras', 'ResNet50', 'NumPy/Pandas', 'send2trash', 'zipfile', 'hashlib'],
    techStackLogos: [pythonLogo, tensorflowLogo, numpyLogo],
    highlights: [
      'TF-IDF + Naive Bayes for text classification',
      'ResNet50 feature extraction for image analysis',
      'MD5 hash-based duplicate detection',
      'Multi-threaded Tkinter GUI with progress tracking',
      'Safe file operations with undo functionality',
      'Exportable CSV reports and audit logs'
    ]
  },
  {
    id: 9,
    title: 'Cisco NSO L3VPN Automation',
    description: 'NSO service that provisions end-to-end L3VPNs with idempotent workflows and RESTCONF API.',
    link: 'nso-l3vpn.cisco.com',
    type: 'Network Automation',
    theme: 'Dark',
    pages: 1,
    slug: 'cisco-nso-l3vpn',
    detailedDescription: `I built a Cisco NSO service that provisions end-to-end L3VPNs (VRFs, RT/RD, PE-CE links, BGP) across multi-device labs with idempotent, rollback-safe workflows and a RESTCONF API.

**Service model:** Custom YANG service (l3vpn) with customers → sites → endpoints; auto-generates VRFs, route-targets/route-distinguishers, and BGP neighbors from a single payload.

**Templates & callbacks:** Vendor-agnostic NSO templates + Python service callbacks (maagic/maapi) for create/update/delete; per-platform renderers for Cisco IOS-XE / IOS-XR.

**Safety & correctness:** Dry-run (commit-dry-run), two-phase commit, auto-rollback-on-error; pre-checks (device reachability, interface state) and post-checks (VRF routes, BGP session up).

**APIs & tooling:** Northbound RESTCONF endpoints with example requests; service audit trail and commit-queue logs for change tracking.

**Testing:** NSO netsim topology (P/PE/CE) + pytest harness that provisions a VPN, validates routes, and then tears it down—fully repeatable.

**My contributions:**
- Authored the YANG service schema and Python action/CB code; implemented per-platform templates for IOS-XE/XR.
- Wrote the pre/post-check library (commands→parsers→asserts) and the pytest scenario suite.
- Produced operator docs (payload schema, runbook, rollback procedures) and example RESTCONF curls.`,
    techStack: ['Cisco NSO', 'YANG', 'Python', 'NSO maagic/maapi', 'NETCONF/RESTCONF', 'NSO templates/NEDs', 'Git', 'Linux'],
    techStackLogos: [pythonLogo, dockerLogo],
    highlights: [
      'Custom YANG service model for L3VPN provisioning',
      'Vendor-agnostic templates for IOS-XE/XR platforms',
      'Two-phase commit with auto-rollback safety',
      'Pre/post validation checks for network state',
      'RESTCONF API with audit trail logging',
      'Automated pytest testing with netsim topology'
    ]
  },
  {
    id: 10,
    title: 'TableRAG',
    description: 'SQL-native RAG system for tabular data that answers natural-language questions over Excel workbooks.',
    link: 'tablerag.ai',
    type: 'AI/ML',
    theme: 'Dark',
    pages: 1,
    slug: 'tablerag',
    detailedDescription: `I built a self-contained module that answers natural-language questions over a single Excel workbook by embedding each row (multilingual-e5-base, dim=768) into PostgreSQL + pgvector, running cosine ANN retrieval in pure SQL, and returning the most relevant rows with a concise summary.

**Ingestion & normalization:** ETL from Excel → PostgreSQL with typed columns, locale-safe currency/decimal cleanup, and a canonical text builder per row (joins important fields + lightweight templating).

**Embeddings at the DB edge:** Row embeddings stored in a vector(768) column; IVFFLAT index with tuned lists for fast ANN; pre-warm and VACUUM routines.

**Pure-SQL retrieval:** Prompt → embedding → ORDER BY embedding <=> :qvec LIMIT k (cosine distance via pgvector) → return rows + relevance scores; deterministic tie-breaks.

**Summarization:** Compact answer generator that cites row IDs; configurable to return only rows (no LLM) for audit-friendly workflows.

**Ops & safety:** Idempotent re-indexing, chunk/batch size controls, retry/backoff, and simple PII redaction hooks for sensitive columns.

**Observability:** Query traces (SQL + timings), ANN vs. exact recall probes, and quick evaluation notebooks (Recall@k / MRR on a small QA set).

**My contributions:**
- Designed the PostgreSQL schema and pgvector index strategy; wrote the Excel→DB loader and canonical text builder.
- Implemented the embedding pipeline (batching, retries, caching) and the SQL ANN search with cosine distance.
- Authored the summarization prompt, guardrails (max tokens, safe fallbacks), and evaluation harness; packaged everything behind clean Python APIs.`,
    techStack: ['Python', 'PostgreSQL', 'pgvector', 'SQLAlchemy', 'SentenceTransformers', 'multilingual-e5-base', 'Flask/FastAPI', 'dotenv', 'Docker'],
    techStackLogos: [pythonLogo, sqlLogo, flaskLogo],
    highlights: [
      'Excel→PostgreSQL ETL with typed columns',
      'Row-level embeddings with IVFFLAT indexing',
      'Pure SQL cosine ANN retrieval via pgvector',
      'Configurable summarization with row citations',
      'Idempotent re-indexing with safety controls',
      'Evaluation notebooks with Recall@k metrics'
    ]
  },
  {
    id: 11,
    title: 'UCSS',
    description: 'University Course Selection System with role-based access, clash detection, and waitlist management built in Java 21.',
    link: 'ucss-university.edu',
    type: 'Web Application',
    theme: 'Dark',
    pages: 1,
    slug: 'ucss',
    detailedDescription: `Web-based course selection with login/logout, browse & filter, add/drop with clash checks, capacity & FIFO waitlist, and GPA—implemented in plain Java 21 + JDBC + SQL (no Spring).

**Team & role:** Built by a team. My role: Backend & Database.

**Highlights (system):**

**Student:** Auth, upcoming course list & filters (code, instructor, schedule, quota), add/drop, weekly timetable, GPA view.

**Admin/Professor:** CRUD for courses/sections (quotas, prerequisites, syllabus, schedule), student record ops, grade entry.

**Rules & safety:** Time-conflict prevention, prereq/co-req checks, credit limit, block when full, FIFO waitlist auto-promotion.

**Security:** Role-based access, salted password hashing, and planned field-level encryption for sensitive data.

**My contributions (backend & DB):**

**Data model & integrity:** Designed relational schema (Student, Course, Section, Meeting, Enrollment, Prereq, Waitlist, etc.), keys/indexes, normalization, and ERD.

**JDBC layer:** Connection pooling, DAO pattern, and transactional workflows for add/drop/swap; atomic seat accounting with row-level locking; waitlist promotion in the same TX.

**Business rules:**
- Clash detection: Weekday-aware time-interval overlap algorithm.
- Prereq engine: Graph-based validation with minimum grade thresholds.
- GPA: Letter→score mapping and weighted GPA updates on grade entry.

**API & validation:** Lightweight REST-like endpoints (framework-free), input validation, consistent error payloads; Dockerized DB.

**Docs:** Contributed to SRS/SDP/SDD/STR; produced UML (use case, activity, deployment).

**Next up:** Stronger ACID checks and deadlock-retry strategy, integration tests (e.g., Testcontainers), API docs, iCal export, ILP/CP-SAT auto-scheduler PoC, column-level encryption, and basic rate limiting.`,
    techStack: ['Java 21', 'JDBC', 'SQL', 'Docker', 'IntelliJ IDEA', 'UML', 'ArgoUML/Visio', 'GitHub Projects/Issues'],
    techStackLogos: [javaLogo, sqlLogo, dockerLogo],
    highlights: [
      'Relational schema design with ERD and normalization',
      'JDBC connection pooling with DAO pattern',
      'Atomic transactions with row-level locking',
      'Weekday-aware time-conflict detection algorithm',
      'Graph-based prerequisite validation engine',
      'FIFO waitlist with auto-promotion system'
    ]
  },
  {
    id: 12,
    title: 'TelcoScrape',
    description: 'Ethical web-scraping pipeline for phone release data with normalization and business analytics insights.',
    link: 'telcoscrape.data',
    type: 'Data Engineering',
    theme: 'Dark',
    pages: 1,
    slug: 'telcoscrape',
    detailedDescription: `I built an ethical web-scraping → cleaning → analysis pipeline that collects phone release/announce dates across brands, normalizes them into a clean table, and answers campaign questions (brand-level bills, city e-invoice adoption, 5G support vs 5G subscription sanity checks).

**Scraper:** Respectful crawling (robots.txt, backoff/jitter, rotating user-agents), retry with exponential backoff, HTML parsing → brand / model / announced_date / release_date; idempotent resume.

**Normalization:** Model name de-aliasing (Pro/Plus/5G variants), date parsing to ISO, duplicate collapse, multi-source reconciliation with confidence scores.

**Data quality:** Coverage/freshness metrics, anomaly flags (release < announce, missing year), brand/year completeness heatmap.

**Case study analytics:**
- Brand-level average bills (from a workbook mirroring prod schema).
- E-invoice adoption by city (groupby + rates, small multiples).
- Sanity check: device_supports_5g vs subscription_5g_flag consistency report.

**Outputs:** release_dates.csv (canonical), notebook with plots (histograms/boxplots), and a short, auditable commentary ("assumptions & caveats").

**My contributions:**
- Implemented the scraper core (session, retries, caching), parsers, and the normalization rules; wrote the de-dup & confidence logic.
- Built the pandas cleaning pipeline, currency/locale normalization, and the analytics notebook answering the three stakeholder questions concisely.
- Added QA checks (schema validator, null/dup tests) and lightweight CLI (--resume, --since YYYY) for incremental runs; documented runbook & ethics.`,
    techStack: ['Python', 'requests/httpx', 'tenacity', 'BeautifulSoup/lxml', 'pandas', 'matplotlib', 'typer CLI', 'pytest', 'Playwright'],
    techStackLogos: [pythonLogo, numpyLogo, dockerLogo],
    highlights: [
      'Ethical web scraping with robots.txt compliance',
      'Multi-source reconciliation with confidence scores',
      'Data quality metrics and anomaly detection',
      'Brand-level business analytics insights',
      'Idempotent resume with CLI controls',
      'Schema validation and QA testing pipeline'
    ]
  },
  {
    id: 13,
    title: 'SwipeWork',
    description: 'Tinder-style job discovery app with AI summaries and fit scoring - swipe to save/skip jobs with smart matching.',
    link: 'swipework.app',
    type: 'Mobile App',
    theme: 'Dark',
    pages: 1,
    slug: 'swipework',
    detailedDescription: `A Tinder-style job discovery app with AI summaries and a fit score—swipe to save/skip, view structured details, and track leads. Currently migrating data/auth to Supabase and wiring the scoring pipeline.

**Status:** In progress (MVP) — core UI and data model drafted; Supabase (Postgres + Auth + Storage) setup in flight.

**What's done so far:**

**Data model & ingestion (draft):** Normalized job schema (title/company/location/salary/tags), near-duplicate detection plan (company+title+similarity).

**Swipe UI (Flutter):** Card stack with save / skip / super-like, detail drawer, quick filters scaffold (remote, salary band, stack); state mgmt with Riverpod/Bloc.

**Supabase groundwork:** Project created, Postgres schema WIP, Row-Level Security (RLS) policy draft, Supabase Auth (email/password) integration path identified; using supabase-flutter SDK.

**AI assist (prototype):** JD → 5-bullet summary (TR/EN) prompt templates; "top reasons to match" explanation format.

**Up next (near term):**
- Finish Supabase: Tables, indexes, RLS policies; implement saved/applied lists and on-device cache (SQLite) + sync.
- Fit scoring service: Standalone FastAPI microservice (Docker) for hybrid match (multilingual-e5-base embeddings + keywords) returning 0–100 fit + rationale; call from app.
- Notifications: New high-fit role alerts; rate-limit/backoff.
- Privacy & control: Human-in-the-loop only (no auto-apply), secure credential storage.

**My contributions (so far):**
- Designed the data model and drafted de-dup heuristics; built the Flutter swipe UI and state management.
- Set up Supabase project, started Postgres schema and RLS policy design; integrated supabase-flutter auth skeleton.
- Prototyped JD → AI summary pipeline (TR/EN) and match-reason templates.`,
    techStack: ['Flutter/Dart', 'Riverpod/Bloc', 'Supabase', 'PostgreSQL', 'supabase-flutter SDK', 'SQLite', 'FastAPI', 'SentenceTransformers', 'multilingual-e5-base', 'Docker'],
    techStackLogos: [flutterLogo, supabaseLogo, sqlLogo],
    highlights: [
      'Tinder-style swipe UI with card stack interaction',
      'Supabase backend with RLS policies and auth',
      'AI-powered job summaries in TR/EN languages',
      'Hybrid fit scoring with embeddings + keywords',
      'Offline-first with SQLite cache and sync',
      'Privacy-focused with human-in-the-loop design'
    ]
  }
]

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: 'ML Model Development',
    price: '$95',
    description: 'Custom machine learning models for classification, regression, and clustering problems with deployment.',
    completedWorks: '15+',
    experience: '3+',
    totalHoursWorked: '850 hours',
    icon: webDesignIcon,
  },
  {
    id: 2,
    service: 'API Development',
    price: '$75',
    description: 'RESTful APIs and microservices architecture with Spring Boot and database integration.',
    completedWorks: '25+',
    experience: '4+',
    totalHoursWorked: '680 hours',
    icon: webDevIcon,
  },
  {
    id: 3,
    service: 'Deep Learning Solutions',
    price: '$110',
    description: 'Neural networks for computer vision, NLP, and time series analysis using PyTorch and TensorFlow.',
    completedWorks: '8+',
    experience: '2+',
    totalHoursWorked: '520 hours',
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: 'Data Pipeline Engineering',
    price: '$85',
    description: 'ETL processes, data warehousing, and real-time data processing with cloud technologies.',
    completedWorks: '12+',
    experience: '3+',
    totalHoursWorked: '420 hours',
    icon: seoOptIcon,
  }
];

export const faqData: FAQ[] = [
  {
    question: "Can you work with clients remotely?",
    answer: "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adaptable to various devices and screen sizes. Your website will provide an optimal user experience whether accessed via desktops, smartphones, or tablets.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities, and the client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.",
  },
  {
    question: "Can you integrate third-party tools into my website?",
    answer: "Yes, I have experience integrating various third-party tools, plugins, and platforms into websites. Whether you need to integrate e-commerce functionalities, social media integration, email marketing services, or anything else, I can recommend and help ensure smooth integration.",
  },
  {
    question: "Do you offer website maintenance?",
    answer: "Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From performance updates to adding new features and content, I can provide ongoing support to keep your website running smoothly.",
  },
  {
    question: "How do you handle website revisions?",
    answer: "I value your input and collaboration throughout the design process. Upon completing an initial design, I encourage you to provide feedback. I incorporate your suggestions and revisions to ensure the final product aligns with your vision.",
  },
  {
    question: "Can you optimize my website?",
    answer: "Certainly! I incorporate search engine optimization (SEO) best practices into my development process. This includes using relevant keywords, optimizing meta tags, creating search-engine-friendly URLs, and ensuring your website has a solid foundation for better search engine visibility.",
  },
  {
    question: "What are your payment terms?",
    answer: "Payment terms may vary depending on the project scope and duration. Generally, I request an initial deposit before commencing work.",
  },
];

export const testimonials: any[] = [
  // Testimonials data can be added here when needed
];

export const followerData: FollowerData[] = [
  {
    platform: "LinkedIn",
    followers: "450+",
    url: "https://www.linkedin.com/in/h%C3%BCseyin-bora-baran-2965b7269/",
    icon: linkedInIcon,
  },
];