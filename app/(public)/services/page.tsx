import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Briefcase, PlaneTakeoff, School, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Next Level Education',
  description:
    'Explore university selection, visa consultation, scholarships, and pre-departure support with Next Level Education.',
}

const services = [
  {
    title: 'Student Visa Consultation',
    description:
      'Step-by-step guidance through document preparation, application filing, and submission timelines.',
    icon: BookOpen,
    bullets: [
      'Personalized document checklist',
      'Mock interview sessions',
      'Financial documentation audit',
    ],
  },
  {
    title: 'University & Course Selection',
    description:
      'Find the right academic fit based on career goals, location preferences, and budget.',
    icon: School,
    bullets: [
      'Program shortlisting',
      'Admission eligibility review',
      'Application strategy',
    ],
  },
  {
    title: 'Scholarship Assistance',
    description:
      'We identify financial aid opportunities and support applications for merit-based awards.',
    icon: Sparkles,
    bullets: [
      'Scholarship matching',
      'SOP support',
      'Funding guidance',
    ],
  },
  {
    title: 'Pre-departure Briefing',
    description:
      'Prepare confidently with guidance on accommodation, banking, and settling into a new country.',
    icon: PlaneTakeoff,
    bullets: [
      'Cultural integration tips',
      'Accommodation search help',
      'Arrival checklist',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]">
      <section className="relative overflow-hidden bg-[#1D4092] text-white">
        <div className="absolute inset-0">
          <Image
            src="/world-map.jpg"
            alt="Global education background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(29,64,146,0.96),rgba(29,64,146,0.84),rgba(29,64,146,0.62))]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#aac7ff]">
              Services
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our Comprehensive Support Services
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Expert guidance tailored to elevate your academic journey and help
              you move forward with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#046BD2] px-7 text-sm font-semibold text-white shadow-lg shadow-[#046BD2]/30 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Book Consultation
              </Link>
              <Link
                href="/blog"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/80 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-12">
          <article className="relative overflow-hidden rounded-[2rem] border border-[#c4c6d3] bg-white p-8 shadow-[0_14px_40px_-18px_rgba(29,64,146,0.18)] xl:col-span-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(4,107,210,0.08),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="inline-flex rounded-full bg-[#046BD2]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#046BD2]">
                  Featured support
                </div>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1D4092]">
                  Student Visa Consultation
                </h2>
                <p className="mt-4 text-slate-600 leading-7">
                  Navigating visa requirements can be complex. Our consultants
                  provide meticulous, step-by-step guidance through the
                  documentation and application process.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#046BD2]" />
                    Personalized document checklist
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#046BD2]" />
                    Mock interview sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#046BD2]" />
                    Financial documentation audit
                  </li>
                </ul>
              </div>
              <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/home2/happy-gi.png"
                  alt="Students reviewing documents"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </article>

          <article className="rounded-[2rem] bg-[#1D4092] p-8 text-white shadow-[0_14px_40px_-18px_rgba(29,64,146,0.3)] xl:col-span-4">
            <Briefcase className="h-12 w-12 text-[#aac7ff]" />
            <h2 className="mt-6 text-2xl font-extrabold tracking-tight">
              University & Course Selection
            </h2>
            <p className="mt-4 text-white/85 leading-7">
              Find the perfect academic fit based on your career goals, budget,
              and location preferences.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#aac7ff]"
            >
              Explore programs
              <span aria-hidden="true">→</span>
            </Link>
          </article>

          {services.map(service => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="rounded-[2rem] border border-[#c4c6d3] bg-white p-7 shadow-[0_12px_35px_-18px_rgba(29,64,146,0.14)] md:col-span-1 xl:col-span-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#046BD2]/10 text-[#046BD2]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-slate-700">
                  {service.bullets.map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#1D4092]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-[#f2f4f6] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1D4092] sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Join thousands of successful students who have reached their
            academic potential with Next Level Education.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-[#046BD2] px-7 text-sm font-semibold text-white shadow-lg shadow-[#046BD2]/25 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Contact Us Today
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-[#1D4092] px-7 text-sm font-semibold text-[#1D4092] transition hover:bg-[#1D4092] hover:text-white"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
