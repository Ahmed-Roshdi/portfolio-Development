// Professional Translation System - English to Arabic
// نظام الترجمة الاحترافي - من الإنجليزية إلى العربية

(function() {
    // Expose a clean global `translations` object only. No extra code here.
    window.translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            expertise: "Expertise",
            projects: "Projects",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            title: "Hi, I'm <span class='highlight'>Ahmed Roshdi</span><br>Cross-Functional Expert & Certified Pro",
            subtitle: "An Ardent Follower of Science & Creative Problem Solver",
            description: "Bringing together diverse expertise in AI, graphic design, cybersecurity, programming, and more, I craft innovative solutions with a deep passion for science and technology.",
            viewWork: "View My Work",
            getInTouch: "Get In Touch",
            profileTitle: "Ahmed Roshdi",
            profileSubtitle: "Developer & Designer"
        },
        
        // About Section
        about: {
            title: "About Me",
            paragraph1: "As a **Cross-Functional Expert & Certified Professional**, I bring a unique blend of diverse skills and a profound passion for science to every project. My journey is driven by an insatiable curiosity and a commitment to innovation, allowing me to bridge the gaps between seemingly disparate fields.",
            paragraph2: "My expertise spans the cutting-edge realms of **Artificial Intelligence**, where I delve into machine learning, deep learning, and natural language processing to craft intelligent solutions. In **Graphic Design & Content Creation**, I transform ideas into compelling visual narratives, leveraging my skills in visual effects, video editing, and audio engineering to produce immersive experiences.",
            paragraph3: "A seasoned practitioner in **Cybersecurity**, I possess comprehensive knowledge of its various tactics and defenses, ensuring robust digital protection. My proficiency extends to **Programming & Development**, where I master multiple languages and apply them across diverse domains to build robust and scalable applications.",
            paragraph4: "Beyond the digital, my passion for **Science & Research** is profound. I am an ardent follower of engineering, medicine, biology, chemistry, physics, geology, and psychology, constantly developing advanced theories and exploring their depths. This scientific rigor underpins my problem-solving approach, enabling me to devise innovative and integrated solutions.",
            paragraph5: "Whether it's crafting engaging content, securing digital infrastructures, developing intelligent systems, or exploring the frontiers of scientific knowledge, I am dedicated to delivering excellence and pushing boundaries. My goal is to create meaningful digital experiences and contribute to advancements that shape the future.",
            stats: {
                experience: "Years Experience",
                projects: "Projects Completed",
                satisfaction: "Client Satisfaction"
            }
        },
        
        // Skills Section
        skills: {
            title: "Skills & Technologies",
            frontend: "Frontend",
            backend: "Backend",
            tools: "Tools"
        },
        
        // Expertise Dropdown
        expertise: {
            ai: "Artificial Intelligence",
            cybersecurity: "Cybersecurity",
            programming: "Programming & Development",
            graphicDesign: "Graphic Design & Content Creation",
            audioPhoto: "Audio, Photo & Lighting",
            contentWriting: "Content Writing & Translation",
            vfx: "VFX & Video Editing",
            emarketing: "E-Marketing",
            science: "Science & Research"
        },
        
        // Projects Section
        projects: {
            title: "Featured Projects",
            ecommerce: {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
                liveDemo: "Live Demo",
                github: "GitHub"
            },
            taskManagement: {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates and team collaboration features.",
                liveDemo: "Live Demo",
                github: "GitHub"
            },
            analytics: {
                title: "Data Analytics Dashboard",
                description: "An interactive dashboard for visualizing complex data with charts, filters, and real-time updates.",
                liveDemo: "Live Demo",
                github: "GitHub"
            }
        },
        
        // Contact Section
        contact: {
            title: "Get In Touch",
            subtitle: "Let's work together!",
            description: "I'm always interested in new opportunities and exciting projects. Feel free to reach out!",
            email: "Ahmed7Roshdi@gmail.com",
            phone: "Soon to be available",
            location: "Cairo, Egypt",
            form: {
                name: "Your Name",
                email: "Your Email",
                subject: "Subject",
                message: "Your Message",
                send: "Send Message",
                sending: "Sending..."
            }
        },
        
        // Footer
        footer: {
            copyright: "© 2025 Ahmed Roshdi. All rights reserved.",
            builtWith: "Built with ❤️ and lots of ☕"
        },
        
        // Cybersecurity Page
        cybersecurity: {
            title: "Cybersecurity <span class='highlight'>Expertise</span>",
            subtitle: "Protecting Digital Assets with Advanced Security Solutions",
            description: "Specialized in comprehensive cybersecurity strategies, from ethical hacking to secure application development. Ensuring your digital infrastructure remains protected against evolving threats.",
            exploreServices: "Explore Services",
            getQuote: "Get Quote",
            servicesTitle: "Our Cybersecurity Services",
            services: {
                penetrationTesting: {
                    title: "Penetration Testing",
                    description: "Comprehensive security assessments to identify vulnerabilities before attackers do. Ethical hacking to strengthen your defenses.",
                    features: ["Web Application Testing", "Network Infrastructure", "Social Engineering"]
                },
                vulnerabilityAssessment: {
                    title: "Vulnerability Assessment",
                    description: "Systematic identification and analysis of security weaknesses in applications, networks, and infrastructure.",
                    features: ["Automated Scanning", "Manual Verification", "Detailed Reporting"]
                },
                secureCodeReview: {
                    title: "Secure Code Review",
                    description: "Thorough analysis of source code to identify security flaws and ensure compliance with security standards.",
                    features: ["Static Analysis", "Dynamic Testing", "Compliance Checks"]
                },
                networkSecurity: {
                    title: "Network Security",
                    description: "Design and implementation of secure network architectures with advanced monitoring and threat detection.",
                    features: ["Architecture Design", "Threat Detection", "24/7 Monitoring"]
                },
                securityTraining: {
                    title: "Security Training",
                    description: "Comprehensive security awareness training for teams to build a strong security culture within organizations.",
                    features: ["Phishing Simulations", "Security Workshops", "Compliance Training"]
                },
                incidentResponse: {
                    title: "Incident Response",
                    description: "Rapid response and recovery services for security incidents with detailed forensic analysis and reporting.",
                    features: ["24/7 Response", "Forensic Analysis", "Recovery Planning"]
                }
            },
            statsTitle: "Security Achievements",
            stats: {
                vulnerabilities: "Vulnerabilities Found",
                audits: "Security Audits",
                satisfaction: "Client Satisfaction",
                monitoring: "Security Monitoring"
            },
            certificationsTitle: "Professional Certifications",
            certifications: {
                securityPlus: "CompTIA Security+",
                ceh: "CEH (Certified Ethical Hacker)",
                cissp: "CISSP",
                oscp: "OSCP"
            },
            contactTitle: "Ready to Secure Your Digital Assets?",
            contactDescription: "Let's discuss how we can protect your organization from cyber threats."
        }
    },
    
    ar: {
        // التنقل
        nav: {
            home: "الرئيسية",
            about: "عني",
            expertise: "الخبرات",
            projects: "المشاريع",
            contact: "التواصل"
        },
        
        // القسم الرئيسي
        hero: {
            title: "مرحباً، أنا <span class='highlight'>أحمد رشدي</span><br>خبير متعدد التخصصات ومحترف معتمد",
            subtitle: "متابع شغوف للعلوم وحلال مشاكل إبداعي",
            description: "أجمع بين خبرات متنوعة في الذكاء الاصطناعي والتصميم الجرافيكي والأمن السيبراني والبرمجة وأكثر، لأصنع حلولاً مبتكرة بشغف عميق للعلوم والتكنولوجيا.",
            viewWork: "اطلع على أعمالي",
            getInTouch: "تواصل معي",
            profileTitle: "أحمد رشدي",
            profileSubtitle: "مطور ومصمم"
        },
        
        // قسم عني
        about: {
            title: "عني",
            paragraph1: "بصفتي **خبير متعدد التخصصات ومحترف معتمد**، أجلب مزيجاً فريداً من المهارات المتنوعة وشغفاً عميقاً بالعلوم لكل مشروع. رحلتي مدفوعة بفضول لا يشبع والتزام بالابتكار، مما يمكنني من سد الفجوات بين المجالات المختلفة ظاهرياً.",
            paragraph2: "تمتد خبرتي عبر المجالات المتطورة للـ**ذكاء الاصطناعي**، حيث أتعمق في التعلم الآلي والتعلم العميق ومعالجة اللغات الطبيعية لصنع حلول ذكية. في **التصميم الجرافيكي وصناعة المحتوى**، أحول الأفكار إلى قصص بصرية مقنعة، مستفيداً من مهاراتي في المؤثرات البصرية ومونتاج الفيديو والهندسة الصوتية لإنتاج تجارب غامرة.",
            paragraph3: "كممارس متمرس في **الأمن السيبراني**، أمتلك معرفة شاملة بتكتيكاته ودفاعاته المختلفة، مما يضمن حماية رقمية قوية. تمتد كفاءتي إلى **البرمجة والتطوير**، حيث أتقن لغات متعددة وأطبقها عبر مجالات متنوعة لبناء تطبيقات قوية وقابلة للتوسع.",
            paragraph4: "وراء الرقمي، شغفي بـ**العلوم والبحث** عميق. أنا متابع شغوف للهندسة والطب والأحياء والكيمياء والفيزياء والجيولوجيا وعلم النفس، أطور باستمرار نظريات متقدمة وأستكشف أعماقها. هذا الصرامة العلمية تدعم نهجي في حل المشاكل، مما يمكنني من ابتكار حلول مبتكرة ومتكاملة.",
            paragraph5: "سواء كان الأمر يتعلق بصناعة محتوى جذاب، أو تأمين البنى التحتية الرقمية، أو تطوير أنظمة ذكية، أو استكشاف حدود المعرفة العلمية، فأنا مكرس لتقديم التميز ودفع الحدود. هدفي هو إنشاء تجارب رقمية ذات معنى والمساهمة في التطورات التي تشكل المستقبل.",
            stats: {
                experience: "سنوات الخبرة",
                projects: "المشاريع المكتملة",
                satisfaction: "رضا العملاء"
            }
        },
        
        // قسم المهارات
        skills: {
            title: "المهارات والتقنيات",
            frontend: "الواجهة الأمامية",
            backend: "الواجهة الخلفية",
            tools: "الأدوات"
        },
        
        // قائمة الخبرات
        expertise: {
            ai: "الذكاء الاصطناعي",
            cybersecurity: "الأمن السيبراني",
            programming: "البرمجة والتطوير",
            graphicDesign: "التصميم الجرافيكي وصناعة المحتوى",
            audioPhoto: "الصوت والتصوير والإضاءة",
            contentWriting: "كتابة المحتوى والترجمة",
            vfx: "المؤثرات البصرية ومونتاج الفيديو",
            emarketing: "التسويق الإلكتروني",
            science: "العلوم والبحث"
        },
        
        // قسم المشاريع
        projects: {
            title: "المشاريع المميزة",
            ecommerce: {
                title: "منصة التجارة الإلكترونية",
                description: "حل تجارة إلكترونية متكامل مع تكامل الدفع ومصادقة المستخدم ولوحة تحكم الإدارة.",
                liveDemo: "عرض مباشر",
                github: "جيت هاب"
            },
            taskManagement: {
                title: "تطبيق إدارة المهام",
                description: "تطبيق إدارة مهام تعاوني مع تحديثات فورية وميزات التعاون الجماعي.",
                liveDemo: "عرض مباشر",
                github: "جيت هاب"
            },
            analytics: {
                title: "لوحة تحليل البيانات",
                description: "لوحة تفاعلية لتصور البيانات المعقدة مع الرسوم البيانية والمرشحات والتحديثات الفورية.",
                liveDemo: "عرض مباشر",
                github: "جيت هاب"
            }
        },
        
        // قسم التواصل
        contact: {
            title: "تواصل معي",
            subtitle: "لنعمل معاً!",
            description: "أنا دائماً مهتم بالفرص الجديدة والمشاريع المثيرة. لا تتردد في التواصل!",
            email: "Ahmed7Roshdi@gmail.com",
            phone: "قريباً سيكون متاحاً",
            location: "القاهرة، مصر",
            form: {
                name: "اسمك",
                email: "بريدك الإلكتروني",
                subject: "الموضوع",
                message: "رسالتك",
                send: "إرسال الرسالة",
                sending: "جاري الإرسال..."
            }
        },
        
        // التذييل
        footer: {
            copyright: "© 2025 أحمد رشدي. جميع الحقوق محفوظة.",
            builtWith: "صُنع بـ ❤️ وكثير من ☕"
        },
        
        // صفحة الأمن السيبراني
        cybersecurity: {
            title: "<span class='highlight'>خبرة</span> الأمن السيبراني",
            subtitle: "حماية الأصول الرقمية بحلول أمنية متقدمة",
            description: "متخصص في استراتيجيات الأمن السيبراني الشاملة، من الاختراق الأخلاقي إلى تطوير التطبيقات الآمنة. ضمان بقاء بنيتك التحتية الرقمية محمية ضد التهديدات المتطورة.",
            exploreServices: "استكشف الخدمات",
            getQuote: "احصل على عرض سعر",
            servicesTitle: "خدمات الأمن السيبراني",
            services: {
                penetrationTesting: {
                    title: "اختبار الاختراق",
                    description: "تقييمات أمنية شاملة لتحديد الثغرات قبل أن يفعل المهاجمون. اختراق أخلاقي لتقوية دفاعاتك.",
                    features: ["اختبار تطبيقات الويب", "البنية التحتية للشبكة", "الهندسة الاجتماعية"]
                },
                vulnerabilityAssessment: {
                    title: "تقييم الثغرات",
                    description: "تحديد وتحليل منهجي لنقاط الضعف الأمنية في التطبيقات والشبكات والبنية التحتية.",
                    features: ["المسح الآلي", "التحقق اليدوي", "التقارير المفصلة"]
                },
                secureCodeReview: {
                    title: "مراجعة الكود الآمن",
                    description: "تحليل شامل للكود المصدري لتحديد العيوب الأمنية وضمان الامتثال لمعايير الأمان.",
                    features: ["التحليل الثابت", "الاختبار الديناميكي", "فحوصات الامتثال"]
                },
                networkSecurity: {
                    title: "أمن الشبكة",
                    description: "تصميم وتنفيذ هياكل شبكة آمنة مع مراقبة متقدمة واكتشاف التهديدات.",
                    features: ["تصميم الهيكل", "اكتشاف التهديدات", "مراقبة 24/7"]
                },
                securityTraining: {
                    title: "التدريب الأمني",
                    description: "تدريب شامل للوعي الأمني للفرق لبناء ثقافة أمنية قوية داخل المؤسسات.",
                    features: ["محاكاة التصيد", "ورش الأمان", "تدريب الامتثال"]
                },
                incidentResponse: {
                    title: "الاستجابة للحوادث",
                    description: "خدمات استجابة وتعافي سريعة للحوادث الأمنية مع تحليل جنائي مفصل وتقارير.",
                    features: ["استجابة 24/7", "التحليل الجنائي", "تخطيط التعافي"]
                }
            },
            statsTitle: "الإنجازات الأمنية",
            stats: {
                vulnerabilities: "الثغرات المكتشفة",
                audits: "التدقيقات الأمنية",
                satisfaction: "رضا العملاء",
                monitoring: "المراقبة الأمنية"
            },
            certificationsTitle: "الشهادات المهنية",
            certifications: {
                securityPlus: "CompTIA Security+",
                ceh: "CEH (هاكر أخلاقي معتمد)",
                cissp: "CISSP",
                oscp: "OSCP"
            },
            contactTitle: "مستعد لتأمين أصولك الرقمية؟",
            contactDescription: "دعنا نناقش كيف يمكننا حماية مؤسستك من التهديدات السيبرانية."
        }
    };
})();
