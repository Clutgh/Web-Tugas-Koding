import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "wendrybelajar@gmail.com",
    href: "mailto:wendrybelajar@gmail.com",
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "+62 853-6199-3203",
    href: "https://wa.me/6285361993203",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Aceh, Indonesia",
    href: "#",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_higfuwg",
        "template_vyv0tui",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "PUckskTm0ADMNqxei",
      );

      toast({
        title: "Berhasil!",
        description: "Pesan sudah masuk ke email kamu 🚀",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Gagal",
        description: "Cek config EmailJS kamu!",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // ✅ INI YANG PENTING
    <section id="contact" className="py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-4">
          {contactInfo.map((info, i) => (
            <a key={i} href={info.href} className="flex gap-3">
              <info.icon />
              <div>
                <p>{info.label}</p>
                <p>{info.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Nama"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            name="subject"
            placeholder="Subjek"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Pesan"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="animate-spin mr-2" />
            ) : (
              <Send className="mr-2" />
            )}
            Kirim
          </Button>
        </form>
      </div>
    </section>
  );
}
