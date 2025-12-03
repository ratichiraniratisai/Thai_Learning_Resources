import React from 'react';
import { SearchX } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-gray-300 animate-fade-in">
      <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
        <SearchX className="h-10 w-10 text-gray-400" />
      </div>
      <p className="text-gray-600 text-lg font-medium">ไม่พบข้อมูลแหล่งเรียนรู้</p>
      <p className="text-gray-400 text-sm mt-1">
        ลองเปลี่ยนคำค้นหาอำเภอ หรือค้นหาเฉพาะระดับจังหวัด
      </p>
    </div>
  );
};

export default EmptyState;