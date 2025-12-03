import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-8 mt-auto border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-light">
          © {currentYear} ระบบฐานข้อมูลแหล่งเรียนรู้ท้องถิ่นเพื่อการศึกษาไทย
        </p>
        <p className="text-xs text-gray-500 mt-2">
          พัฒนาเพื่อการศึกษาและพัฒนาชุมชนอย่างยั่งยืน
        </p>
      </div>
    </footer>
  );
};

export default Footer;