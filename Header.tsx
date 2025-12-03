import React from 'react';
import { BookOpen, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-thai-primary shadow-lg text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-white/10 p-2.5 rounded-lg backdrop-blur-sm border border-white/20 shadow-inner">
            <BookOpen className="h-8 w-8 text-thai-secondary" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight tracking-tight">
              ระบบฐานข้อมูลแหล่งเรียนรู้ท้องถิ่น
            </h1>
            <p className="text-sm text-teal-100 font-medium opacity-90 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              เชื่อมโยงมาตรฐาน/ตัวชี้วัด หลักสูตรแกนกลางฯ
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;