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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Kontak</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center gap-4 p-4 glass rounded-xl hover:shadow-card-hover transition-all"
              >
                <info.icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 glass rounded-2xl shadow-card"
            >
              <Input
                name="name"
                placeholder="Nama"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                name="email"
                type="email"
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
                placeholder="Pesan..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />

              <Button
                type="submit"
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
