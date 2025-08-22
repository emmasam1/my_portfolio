// src/pages/Home.jsx

import React, { useMemo, useState } from "react";
import {
  Button,
  Card,
  Form,
  Input,
  Drawer,
  message as antdMessage,
  Modal,
} from "antd";
import { FaLinkedinIn, FaWhatsapp, FaGithub, FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import photo from "../assets/photo.jpg";
import cutlist from "../assets/cutlist.png";
import withread from "../assets/withread.jpeg";
import pos from "../assets/pos.png";

const projects = [
  {
    title: "Cutlist",
    description:
      "React + AntD community platform with posts, Tailwind for frontend and Node.js backend. Currently in testing phase.",
    tags: ["React.js", "AntD", "Tailwind", "Node.js", "Express", "MongoDB"],
    image: cutlist,
    link: "https://cutlist.vercel.app/admin-login",
    repo: "https://github.com/emmasam1/cutlist.git",
    login: { user: "8055120900", password: "1234" },
  },
  {
    title: "Withread",
    description:
      "Next.js + AntD platform with posts, Tailwind for frontend and Node.js backend. A social media app",
    tags: ["Next.js", "AntD", "Tailwind", "Framer Motion", "Node.js", "Express", "MongoDB"],
    image: withread,
    link: "https://withread.vercel.app/dashboard",
    repo: "https://github.com/emmasam1/withread.git",
  },
  {
    title: "Point of Sale",
    description:
      "React, Tailwind, AntD frontend and Node.js backend POS system with product management, sales tracking, and analytics.",
    tags: ["React", "Tailwind", "AntD", "Node.js", "Express", "MongoDB"],
    image: pos,
    link: "https://example.com/portfolio",
    repo: "https://github.com/you/portfolio",
    login: {
      user: "finderic84@gmail.com (cashier) and oyivosam12@gmail.com (admin)",
      password: "123456@",
    },
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

  // For project modal
  const [projectOpen, setProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);

  const showProject = (project) => {
    setSelectedProject(project);
    setProjectOpen(true);
  };

  // 🔥 EmailJS Contact Submit
  // const onContactSubmit = () => {
  //   setLoading(true);
  //   form.validateFields().then((values) => {
  //     emailjs
  //       .send(
  //         "service_gozwykh", // ✅ your EmailJS service ID
  //         "template_g69q20z", // ✅ your EmailJS template ID
  //         {
  //           from_name: values.name,
  //           reply_to: values.email,
  //           message: values.message,
  //         },
  //         "EsTzN-dWRv49434Ne" // ✅ your EmailJS public key
  //       )
  //       .then(
  //         () => {
  //           antdMessage.success("Message sent successfully ✅");
  //           setLoading(false);
  //           setOpen(false);
  //           form.resetFields();
  //         },
  //         (error) => {
  //           console.error("EmailJS Error:", error);
  //           setLoading(false);
  //           antdMessage.error("Failed to send message ❌");
  //         }
  //       );
  //   });
  // };

  const onContactSubmit = () => {
  setLoading(true);
  form.validateFields().then((values) => {
    emailjs
      .send(
        "service_gozwykh", // ✅ your EmailJS service ID
        "template_g69q20z", // ✅ your EmailJS template ID
        {
          from_name: values.name,
          reply_to: values.email,
          message: values.message,
          to_email: "findm4@gmail.com", // ✅ your email (recipient)
        },
        "EsTzN-dWRv49434Ne" // ✅ your EmailJS public key
      )
      .then(
        () => {
          antdMessage.success("Message sent successfully ✅");
          setLoading(false);
          setOpen(false);
          form.resetFields();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
          antdMessage.error("Failed to send message ❌");
        }
      );
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
            icon={<MdOutlineMail size={20} />}
            bg="bg-emerald-500"
          />
          <SocialBtn
            href="https://github.com/emmasam1"
            icon={<FaGithub size={20} />}
            bg="bg-gray-700"
          />
          <SocialBtn
            href="https://www.linkedin.com/in/emmanuel-akinbolasere-91a82035b/"
            icon={<FaLinkedinIn size={20} />}
            bg="bg-blue-600"
          />
          <SocialBtn
            href={whatsappHref}
            icon={<FaWhatsapp size={20} />}
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
                className="bg-gray-800 border-gray-700 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                cover={
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 w-full object-cover"
                  />
                }
                onClick={() => showProject(p)}
              >
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="text-gray-400">{p.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <Modal
        open={projectOpen}
        title={selectedProject?.title}
        onCancel={() => setProjectOpen(false)}
        footer={null}
        centered
      >
        {selectedProject && (
          <div className="space-y-4">
            <p>{selectedProject.description}</p>

            <div>
              <h4 className="font-semibold">Tech Stack:</h4>
              <ul className="list-disc ml-5 text-gray-700">
                {selectedProject.tags.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>

            {selectedProject.login && (
              <div>
                <h4 className="font-semibold">Demo Login:</h4>
                <p>
                  <strong>User:</strong> {selectedProject.login.user} <br />
                  <strong>Pass:</strong> {selectedProject.login.password}
                </p>
              </div>
            )}

            <div className="flex gap-4">
              <Button type="primary">
                <a href={selectedProject.link} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </Button>
              <Button>
                <a href={selectedProject.repo} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        )}
      </Modal>

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
            <Button href={`tel:${yourPhone}`} icon={<FaPhone />}>
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
          <Form.Item name="name" label="Your name" rules={[{ required: true }]}>
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
          <Button type="primary" loading={loading} onClick={onContactSubmit}>
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
      className={`${bg} p-3 rounded-full flex justify-center items-center w-12 h-12 hover:scale-110 transform transition`}
    >
      {icon}
    </a>
  );
}
