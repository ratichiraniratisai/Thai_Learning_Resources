import React from 'react';
import { MapPin, Book, Tag, CheckCircle2 } from 'lucide-react';
import { LearningResource } from '../types';

interface ResourceCardProps {
  resource: LearningResource;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, index }) => {
  // Use provided image URL or fallback to a deterministic placeholder based on ID
  const imageUrl = resource.imageUrl || `https://picsum.photos/seed/${resource.id}/600/400`;

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 transform hover:-translate-y-1 group h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-thai-accent to-white px-5 py-4 border-b border-gray-100 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-thai-secondary"></div>
        <h4 className="font-bold text-gray-800 text-lg line-clamp-2 group-hover:text-thai-primary transition-colors h-14 flex items-center">
          {resource.name}
        </h4>
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1.5">
          <MapPin className="h-3 w-3 flex-shrink-0" />
          <span className="truncate">จ.{resource.province} • อ.{resource.district}</span>
        </div>
      </div>

      {/* Image */}
      <div className="h-48 bg-gray-100 w-full overflow-hidden relative">
         <img 
            src={imageUrl} 
            alt={resource.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4 flex-grow">
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 min-h-[4.5em]">
          {resource.description}
        </p>

        <div className="space-y-3 mt-auto">
          {/* Subjects */}
          <div className="text-xs">
            <p className="font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
              <Book className="h-3.5 w-3.5 text-thai-primary" />
              สาระการเรียนรู้:
            </p>
            <p className="text-gray-600 pl-5 line-clamp-1">
              {resource.subjects.join(" • ")}
            </p>
          </div>

          {/* Standards */}
          <div className="text-xs bg-gray-50 p-2.5 rounded-lg border border-gray-100">
            <p className="font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-ministry-orange" />
              มาตรฐาน/ตัวชี้วัด:
            </p>
            <ul className="text-gray-600 space-y-1 pl-1">
              {resource.standards.slice(0, 2).map((s, idx) => (
                <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                  <span className="block w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
                  <span>{s}</span>
                </li>
              ))}
              {resource.standards.length > 2 && (
                <li className="pl-2.5 text-gray-400 italic">...และอื่นๆ อีก {resource.standards.length - 2} รายการ</li>
              )}
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-2">
          {resource.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 text-[11px] font-medium text-thai-primary border border-teal-100 whitespace-nowrap"
            >
              <Tag className="h-2.5 w-2.5" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ResourceCard;