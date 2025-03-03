import React from "react";
import { Separator } from "./ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

interface FooterProps {
  companyName?: string;
  description?: string;
  navigationLinks?: Array<{ title: string; href: string }>;
  socialLinks?: Array<{ platform: string; href: string }>;
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
}

const Footer: React.FC<FooterProps> = ({
  companyName = "运势计算网",
  description = "一个现代化、专业的运势预测平台，结合东方玄学、紫微斗数、易经和西方星座学，为您提供详细的运势分析报告。",
  navigationLinks = [
    { title: "首页", href: "/" },
    { title: "功能介绍", href: "#features" },
    { title: "运势计算", href: "#calculator" },
    { title: "常见问题", href: "#faq" },
    { title: "价格方案", href: "#pricing" },
    { title: "计算原理", href: "#principles" },
  ],
  socialLinks = [
    { platform: "Facebook", href: "https://facebook.com" },
    { platform: "Twitter", href: "https://twitter.com" },
    { platform: "Instagram", href: "https://instagram.com" },
  ],
  contactInfo = {
    email: "contact@fortunecalculator.com",
    phone: "+86 123 4567 8910",
    address: "北京市朝阳区东三环中路39号建外SOHO",
  },
}) => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    Facebook: <Facebook className="h-5 w-5" />,
    Twitter: <Twitter className="h-5 w-5" />,
    Instagram: <Instagram className="h-5 w-5" />,
  };

  return (
    <footer className="bg-gray-50 pt-12 pb-8 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">{companyName}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label={link.platform}
                >
                  {socialIcons[link.platform as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">快速导航</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">联系我们</h3>
            <ul className="space-y-3">
              {contactInfo.email && (
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    {contactInfo.email}
                  </span>
                </li>
              )}
              {contactInfo.phone && (
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    {contactInfo.phone}
                  </span>
                </li>
              )}
              {contactInfo.address && (
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    {contactInfo.address}
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">法律信息</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  隐私政策
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  服务条款
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  免责声明
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-200" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} {companyName}. 保留所有权利。
          </p>
          <div className="flex items-center mt-4 sm:mt-0">
            <Globe className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-500 text-sm">简体中文</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
