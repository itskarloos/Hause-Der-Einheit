import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { useTranslation } from "../hooks/useTranslation"
import type React from "react" // Added import for React

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
    <section id="contact" className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t("contact.title")}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                    {t(`contact.${field}`)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                    required
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2E8B57] focus:ring-[#2E8B57]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2E8B57] hover:bg-[#246B43] text-white px-6 py-3 rounded-full transition-colors"
              >
                {t("contact.send")}
              </button>
            </form>
          </div>
          <div className="space-y-8">
            {[
              { icon: Mail, label: "contact.email", value: "info@hausedereinheit.de" },
              { icon: Phone, label: "Telefon", value: "+49 123 456789" },
              { icon: MapPin, label: "Adresse", value: "Musterstraße 123\n12345 Musterstadt\nDeutschland" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start space-x-4">
                <Icon className="w-6 h-6 text-[#2E8B57]" />
                <div>
                  <h3 className="font-semibold">{t(label)}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

