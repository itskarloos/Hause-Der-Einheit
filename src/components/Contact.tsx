import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useTranslation } from "../hooks/useTranslation"
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
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5DC] to-white">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2E8B57]/5 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2E8B57]/5 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">{t("contact.title")}</h2>
          <div className="w-24 h-1 bg-[#2E8B57] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-24 items-start">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2E8B57]/30 to-transparent"></div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {["name", "email", "subject"].map((field) => (
                <div key={field} className="space-y-2">
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                    {t(`contact.${field}`)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    required
                  />
                </div>
              ))}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-[#2E8B57] focus:ring-2 focus:ring-[#2E8B57]/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-medium flex items-center justify-center space-x-2 group"
              >
                <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                <span>{t("contact.send")}</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="relative">
            <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2E8B57]/30 to-transparent"></div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-12">{t("contact.info")}</h3>
            <div className="space-y-12">
              {[
                { 
                  icon: Mail, 
                  label: "Email", 
                  value: "H.Heinrich@betima.com",
                  href: "mailto:H.Heinrich@betima.com"
                },
                { 
                  icon: Phone, 
                  label: "Telefon", 
                  value: "+49 176 719 116 09",
                  href: "tel:+4917671911609"
                },
                { 
                  icon: MapPin, 
                  label: "Adresse", 
                  value: "Herzogstandstr. 11a · 82140 Olching",
                  href: "https://maps.google.com"
                },
              ].map(({ icon: Icon, label, value, href }, index) => (
                <div key={label} className="relative">
                  <a
                    href={href}
                    target={label === "Adresse" ? "_blank" : undefined}
                    rel={label === "Adresse" ? "noopener noreferrer" : undefined}
                    className="flex items-start space-x-6 group transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#2E8B57]/10 flex items-center justify-center group-hover:bg-[#2E8B57]/20 transition-all duration-300">
                      <Icon className="w-7 h-7 text-[#2E8B57] transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#2E8B57] transition-colors duration-300 mb-2">
                        {label}
                      </h4>
                      <p className="text-gray-600 whitespace-pre-line group-hover:text-gray-900 transition-colors duration-300">
                        {value}
                      </p>
                    </div>
                  </a>
                  {index < 2 && (
                    <div className="absolute -bottom-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2E8B57]/20 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://maps.app.goo.gl/HAyzigGP4i1FH1CT7"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}

