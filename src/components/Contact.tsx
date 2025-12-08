import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useTranslation } from "../hooks/useTranslation"
import { Reveal } from './Reveal'
import type React from "react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <section id="contact" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#2E8B57 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">{t("contact.title")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Contact Information Card */}
          <div className="lg:col-span-1">
            <Reveal delay={0.2}>
              <div className="bg-[#2E8B57] rounded-3xl p-8 text-white shadow-xl h-full shadow-[#2E8B57]/20 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-black/10 blur-3xl"></div>

                <h3 className="text-2xl font-bold mb-8 relative z-10">{t("contact.info")}</h3>

                <div className="space-y-8 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Email</p>
                      <a href="mailto:H.Heinrich@betima.com" className="text-lg font-medium hover:text-white/90 transition-colors">
                        H.Heinrich@betima.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Telefon</p>
                      <a href="tel:+4917671911609" className="text-lg font-medium hover:text-white/90 transition-colors">
                        +49 176 719 116 09
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Adresse</p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium hover:text-white/90 transition-colors leading-relaxed block"
                      >
                        Herzogstandstr. 11a<br />
                        82140 Olching
                      </a>
                    </div>
                  </div>
                </div>

                {/* Optional Social Links could go here */}
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Reveal delay={0.3}>
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-gray-200/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 block">
                        {t("contact.name")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                        {t("contact.email")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 block">
                      {t("contact.subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 block">
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 outline-none transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-[#2E8B57] text-white rounded-xl font-medium hover:bg-[#246B43] transition-colors duration-300 shadow-lg shadow-[#2E8B57]/30 flex items-center justify-center space-x-2 group"
                  >
                    <span>{t("contact.send")}</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <Reveal delay={0.4} width="100%">
            <div className="bg-white p-4 rounded-3xl shadow-lg relative z-0">
              <div className="rounded-2xl overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.4997657225235!2d11.320204112016484!3d48.196988946903176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7f03336e0c53%3A0xd78130c4dd0fecaf!2sHerzogstandstra%C3%9Fe%2011A%2C%2082140%20Olching%2C%20Germany!5e0!3m2!1sen!2set!4v1748184531203!5m2!1sen!2set"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

