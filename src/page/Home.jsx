// src/pages/Home.jsx

import React, { useMemo, useState } from "react";
import { Button, Card, Form, Input, Drawer, message as antdMessage } from "antd";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ExternalLink,
  Phone,
} from "lucide-react";
import photo from "../assets/photo.jpg";

const projects = [
  {
    title: "Community Hub",
    description:
      "Next.js + AntD community platform with posts, reactions, and real-time chat.",
    tags: ["Next.js", "AntD", "Socket.io", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200",
    link: "https://example.com/community",
    repo: "https://github.com/you/community-hub",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "React + JSON Server CRUD with modals, charts, and role-based access.",
    tags: ["React", "AntD", "Recharts", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1557825835-70d97c4aa1c1?q=80&w=1200",
    link: "https://example.com/dashboard",
    repo: "https://github.com/you/ecommerce-dashboard",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, Tailwind & Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "https://source.unsplash.com/1200x800/?portfolio,website",
    link: "https://example.com/portfolio",
    repo: "https://github.com/you/portfolio",
  },
];

export default function Home() {
  const yourName = "Emmanuel Akinbolasere";
  const yourRole = "Full-Stack Engineer";
  const yourEmail = "findm4@gmail.com";
  const yourPhone = "07063062524";

  const whatsappNumberOnly = useMemo(
    () => yourPhone.replace(/\D/g, ""),
    [yourPhone]
  );

  const whatsappHref = useMemo(() => {
    const txt = encodeURIComponent(
      "Hi, I found your portfolio and would love to chat!"
    );
    return `https://wa.me/234${whatsappNumberOnly}?text=${txt}`;
  }, [whatsappNumberOnly]);

  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const onContactSubmit = () => {
    form.validateFields().then((values) => {
      const subject = encodeURIComponent(
        `Portfolio inquiry from ${values.name}`
      );
      const body = encodeURIComponent(
        `Hi ${yourName},\n\n${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`
      );
      window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
      setOpen(false);
      antdMessage.success("Opening your email client…");
    });
  };

  return (
    <div className="bg-gray-900 text-gray-100 font-sans scroll-smooth">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-bold text-emerald-400">{yourName}</span>
          <div className="flex gap-5">
            <a href="#about" className="hover:text-emerald-400">
              About
            </a>
            <a href="#projects" className="hover:text-emerald-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-emerald-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <motion.img
          src={photo}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-emerald-500 shadow-2xl object-cover"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [-10, 10, -10], opacity: 1 }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.h1
          className="mt-6 text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="text-emerald-400">{yourName}</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg max-w-2xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {yourRole} • I build modern apps with React, Next.js, Node.js, and
          scalable APIs.
        </motion.p>

        {/* Social */}
        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <SocialBtn
            href={`mailto:${yourEmail}`}
            icon={<Mail />}
            bg="bg-emerald-500"
          />
          <SocialBtn
            href="https://github.com/you"
            icon={<Github />}
            bg="bg-gray-700"
          />
          <SocialBtn
            href="https://linkedin.com/in/you"
            icon={<Linkedin />}
            bg="bg-blue-600"
          />
          <SocialBtn
            href={whatsappHref}
            icon={<MessageCircle />}
            bg="bg-green-600"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me 
        </motion.h2>
        <motion.p
          className="text-gray-400 leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          I’m a passionate engineer who loves turning complex problems into
          elegant solutions. With a focus on modern JavaScript frameworks and
          backend scalability, I bring full-stack experience from idea to
          deployment.
        </motion.p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">🚀 Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card
                className="bg-gray-800 border-gray-700 rounded-2xl overflow-hidden shadow-lg"
                cover={
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 w-full object-cover"
                  />
                }
              >
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="text-gray-400">{p.description}</p>
                <div className="mt-3 flex gap-3">
                  <a href={p.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="text-emerald-400 hover:text-emerald-300" />
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <Github className="text-gray-400 hover:text-white" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">📬 Contact Me</h2>
          <p className="text-gray-400 mb-6">
            Let’s collaborate or just say hi!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button type="primary" onClick={() => setOpen(true)}>
              Message Me
            </Button>
            <Button href={whatsappHref} target="_blank">
              WhatsApp
            </Button>
            <Button href={`tel:${yourPhone}`} icon={<Phone />}>
              Call Me
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {yourName}. Built with React + Tailwind +
        Framer Motion.
      </footer>

      {/* Drawer for quick contact */}
      <Drawer title="Message Me" open={open} onClose={() => setOpen(false)}>
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Your name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Jane Doe" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="jane@example.com" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} placeholder="I’d like help with…" />
          </Form.Item>
          <Button type="primary" onClick={onContactSubmit}>
            Send Email
          </Button>
        </Form>
      </Drawer>
    </div>
  );
}

function SocialBtn({ href, icon, bg }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${bg} p-3 rounded-full hover:scale-110 transform transition`}
    >
      {icon}
    </a>
  );
}
