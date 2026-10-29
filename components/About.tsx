import {
  GraduationCap,
  MapPin,
  Code2,
  Database,
  Layers,
  FileText,
  Users,
  Wrench,
  Quote,
} from "lucide-react";

const skillCards = [
  {
    title: "Web Development",
    icon: Code2,
    skills: "Laravel, CodeIgniter 4, Tailwind CSS",
  },
  {
    title: "Database",
    icon: Database,
    skills: "MySQL, Database Management",
  },
  {
    title: "System Analysis",
    icon: Layers,
    skills: "User Needs Analysis, UML, SRS",
  },
  {
    title: "Office Tools",
    icon: FileText,
    skills: "Word, Excel, PowerPoint",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: "Teamwork, Komunikasi, Adaptif",
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: "Git, GitHub, VS Code",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#F7F6F1] dark:bg-[#171C1B] border-t border-[#DEE3DD]/70 dark:border-[#2F3835] relative overflow-hidden transition-colors duration-200"
    >
      <div id="skills" className="sr-only">
        Keahlian
      </div>

      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div data-aos="fade-right">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#77858A] dark:text-[#9BA7A3] block mb-2">
                TENTANG SAYA
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#263238] dark:text-[#F2F3EE] tracking-tight mb-5">
                Siapa Saya?
              </h2>

              <p className="text-base text-[#4A555B] dark:text-[#D4DBD7] leading-relaxed mb-4">
                Saya adalah mahasiswa Sistem Informasi Universitas Subang semester
                7. Saya memiliki minat di bidang pengembangan perangkat lunak dan
                analisis sistem, dengan pengalaman praktik menggunakan CodeIgniter
                4 dan Laravel.
              </p>

              <p className="text-base text-[#4A555B] dark:text-[#D4DBD7] leading-relaxed mb-8">
                Saya selalu berusaha meningkatkan kemampuan, baik dalam hal teknis
                maupun komunikasi, agar dapat memberikan kontribusi yang bermanfaat
                di lingkungan kerja.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-2">
              <div className="sm:col-span-6 flex flex-col gap-3 justify-center">
                <div
                  data-aos="fade-up"
                  data-aos-delay="180"
                  className="card-hover flex items-center gap-3 p-3.5 bg-white dark:bg-[#252D2A] rounded-xl border border-[#DEE3DD] dark:border-[#2F3835] shadow-[0_2px_8px_rgba(38,50,56,0.03)] hover:border-[#CBD5CC] dark:hover:border-[#3E4A45]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#E8EDE8] dark:bg-[#1D2522] text-[#4F695B] dark:text-[#83A090] flex items-center justify-center flex-shrink-0 transition-colors">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#263238] dark:text-[#F2F3EE] leading-tight">
                      Universitas Subang
                    </p>
                    <p className="text-[11px] text-[#77858A] dark:text-[#9BA7A3] mt-0.5">
                      Sistem Informasi • Semester 7
                    </p>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="260"
                  className="card-hover flex items-center gap-3 p-3.5 bg-white dark:bg-[#252D2A] rounded-xl border border-[#DEE3DD] dark:border-[#2F3835] shadow-[0_2px_8px_rgba(38,50,56,0.03)] hover:border-[#CBD5CC] dark:hover:border-[#3E4A45]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#E8EDE8] dark:bg-[#1D2522] text-[#4F695B] dark:text-[#83A090] flex items-center justify-center flex-shrink-0 transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#263238] dark:text-[#F2F3EE] leading-tight">
                      Subang, Jawa Barat
                    </p>
                    <p className="text-[11px] text-[#77858A] dark:text-[#9BA7A3] mt-0.5">
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="340"
                className="sm:col-span-6"
              >
                <div className="card-hover p-5 bg-[#F0F1EB] dark:bg-[#202725] rounded-2xl border border-[#DEE3DD] dark:border-[#2F3835] flex flex-col justify-between hover:border-[#CBD5CC] dark:hover:border-[#3E4A45] h-full">
                  <Quote size={22} className="text-[#6D8577] dark:text-[#83A090] mb-2 rotate-180 opacity-70" />
                  <p className="text-sm font-medium text-[#263238] dark:text-[#F2F3EE] leading-snug italic">
                    &ldquo;Berproses bukan tentang seberapa cepat kita sampai, tetapi tentang seberapa jauh diri kita tumbuh di sepanjang perjalanan.&rdquo;
                  </p>
                  <div className="w-6 h-[2px] bg-[#6D8577] dark:bg-[#83A090] mt-3 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div data-aos="fade-left">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#77858A] dark:text-[#9BA7A3] block mb-2">
                KEAHLIAN
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#263238] dark:text-[#F2F3EE] tracking-tight mb-5">
                Teknologi yang Saya Gunakan
              </h2>

              <p className="text-sm text-[#77858A] dark:text-[#9BA7A3] mb-8">
                Kumpulan kemampuan teknis dan metodologi analisis yang saya terapkan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {skillCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    data-aos="zoom-in-up"
                    data-aos-delay={100 + index * 70}
                  >
                    <div className="card-hover p-4 bg-white dark:bg-[#252D2A] rounded-xl border border-[#DEE3DD] dark:border-[#2F3835] shadow-[0_2px_8px_rgba(38,50,56,0.03)] hover:border-[#CBD5CC] dark:hover:border-[#3E4A45] group flex items-start gap-3.5 h-full">
                      <div className="w-10 h-10 rounded-lg bg-[#E8EDE8] dark:bg-[#1D2522] text-[#4F695B] dark:text-[#83A090] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4F695B] group-hover:text-white dark:group-hover:bg-[#83A090] dark:group-hover:text-[#171C1B] transition-colors duration-200">
                        <Icon size={19} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#263238] dark:text-[#F2F3EE] mb-0.5">
                          {card.title}
                        </h3>
                        <p className="text-xs text-[#77858A] dark:text-[#9BA7A3] leading-relaxed">
                          {card.skills}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
