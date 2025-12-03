import React from 'react';
import { MapPin, Compass } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-16 px-4 animate-fade-in">
      <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md mb-6">
         <Compass className="h-8 w-8 text-thai-secondary animate-pulse" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 tracking-tight leading-tight">
        ค้นหาแหล่งเรียนรู้
        <span className="text-thai-primary block md:inline md:ml-2">ใกล้ตัวคุณ</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
        ระบบช่วยให้ครูและนักเรียนสามารถสำรวจแหล่งเรียนรู้ในชุมชน
        และเชื่อมโยงกับสาระการเรียนรู้/มาตรฐานของหลักสูตรแกนกลางฯ
        เพื่อออกแบบการเรียนรู้ที่สอดคล้องกับบริบทพื้นที่
      </p>
    </section>
  );
};

export default Hero;